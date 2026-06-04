import { Resend } from 'resend';

type ContactRequestBody = {
    name?: unknown;
    email?: unknown;
    message?: unknown;
};

const DEFAULT_CONTACT_EMAIL = 'abdullah.mohammed.mahrous@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_EMAIL;

const jsonResponse = (body: Record<string, unknown>, status = 200): Response => {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const readString = (value: unknown): string => {
    return typeof value === 'string' ? value.trim() : '';
};

const escapeHtml = (value: string): string => {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
};

const parseContactBody = async (request: Request): Promise<ContactRequestBody | null> => {
    try {
        return await request.json() as ContactRequestBody;
    } catch {
        return null;
    }
};

const validateContactPayload = (body: ContactRequestBody | null) => {
    const name = readString(body?.name);
    const email = readString(body?.email).toLowerCase();
    const message = readString(body?.message);

    if (!name || name.length < 2) {
        return { error: 'Please enter your name.', name, email, message };
    }

    if (!EMAIL_PATTERN.test(email)) {
        return { error: 'Please enter a valid email address.', name, email, message };
    }

    if (!message || message.length < 10) {
        return { error: 'Please enter a message with at least 10 characters.', name, email, message };
    }

    return { name, email, message };
};

export default {
    async fetch(request: Request): Promise<Response> {
        if (request.method !== 'POST') {
            return jsonResponse({ message: 'Method not allowed.' }, 405);
        }

        const payload = validateContactPayload(await parseContactBody(request));

        if ('error' in payload) {
            return jsonResponse({ message: payload.error }, 400);
        }

        if (!RESEND_API_KEY) {
            return jsonResponse({ message: 'Email service is not configured yet.' }, 500);
        }

        const resend = new Resend(RESEND_API_KEY);
        const safeName = escapeHtml(payload.name);
        const safeEmail = escapeHtml(payload.email);
        const safeMessage = escapeHtml(payload.message).replaceAll('\n', '<br>');

        try {
            const { error } = await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: [CONTACT_TO_EMAIL],
                replyTo: payload.email,
                subject: `Portfolio contact from ${payload.name}`,
                text: [
                    `Name: ${payload.name}`,
                    `Email: ${payload.email}`,
                    '',
                    payload.message,
                ].join('\n'),
                html: `
                    <h2>New portfolio contact message</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Message:</strong></p>
                    <p>${safeMessage}</p>
                `,
            });

            if (!error) {
                return jsonResponse({ message: 'Message sent successfully.' });
            }

            console.error('Resend contact email failed:', error);
            return jsonResponse({ message: 'Could not send your message. Please try again later.' }, 502);
        } catch (error) {
            console.error('Resend contact email failed:', error);
            return jsonResponse({ message: 'Could not send your message. Please try again later.' }, 502);
        }
    },
};

/**
 * Format date to readable string (short format)
 * @param date - Date object or string
 * @returns Formatted date string (e.g., "Jun 1, 2024")
 */
export function formatDate(date: string | Date): string {
    if (typeof date === 'string') {
        date = new Date(date);
    }

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Format date relative to now (e.g., "2 hours ago", "3 days ago")
 */
function formatRelativeDate(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
        return 'just now';
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
        return formatDate(date);
    }
}

/**
 * Format date with various format options
 * @param date - Date object or string
 * @param format - Format type: 'short', 'long', 'relative'
 */
function formatDateExtended(date: Date | string, format: 'short' | 'long' | 'relative' = 'short'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) {
        return 'Invalid date';
    }

    switch (format) {
        case 'short':
            return formatDate(dateObj);

        case 'long':
            return dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });

        case 'relative':
            return formatRelativeDate(dateObj);

        default:
            return dateObj.toISOString();
    }
}

/**
 * Composable for date formatting
 */
export function useDateFormatter() {
    return {
        formatDate: formatDateExtended,
        formatRelativeDate,
    };
}

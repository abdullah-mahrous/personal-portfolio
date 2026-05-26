import { router } from '../router';
import { nextTick } from 'vue';


const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleHomeScroll = async (target: () => void) => {
    const route = router.currentRoute.value;

    if (route.name === 'home' || route.path === '/') {
        target();
        return;
    }

    await router.push({ name: 'home' });
    await nextTick();
    window.requestAnimationFrame(() => target());
};

const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export { scrollUp, handleHomeScroll, scrollToContact };

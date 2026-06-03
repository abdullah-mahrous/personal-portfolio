type Theme = 'light' | 'dark';
type ThemeListener = (isDark: boolean) => void;

const THEME_STORAGE_KEY = 'theme';
const themeListeners = new Set<ThemeListener>();
const THEME_TRANSITION_CLASS = 'theme-transition';
const THEME_TRANSITION_DURATION = 420;

let mediaQuery: MediaQueryList | null = null;
let isSystemListenerAttached = false;
let themeTransitionTimeout: ReturnType<typeof setTimeout> | undefined;

const getMediaQuery = (): MediaQueryList | null => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return null;
    }

    mediaQuery ??= window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQuery;
};

const getSavedTheme = (): Theme | null => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;
};

const getSystemTheme = (): Theme => {
    return getMediaQuery()?.matches ? 'dark' : 'light';
};

const notifyThemeListeners = (): void => {
    const isDark = isDarkMode();
    themeListeners.forEach((listener) => listener(isDark));
};

const enableThemeTransition = (): void => {
    document.documentElement.classList.add(THEME_TRANSITION_CLASS);

    if (themeTransitionTimeout) {
        clearTimeout(themeTransitionTimeout);
    }

    themeTransitionTimeout = setTimeout(() => {
        document.documentElement.classList.remove(THEME_TRANSITION_CLASS);
        themeTransitionTimeout = undefined;
    }, THEME_TRANSITION_DURATION);
};

const applyTheme = (theme: Theme, shouldTransition = false): void => {
    if (shouldTransition) {
        enableThemeTransition();
    }

    document.documentElement.classList.toggle('dark', theme === 'dark');
    notifyThemeListeners();
};

const handleSystemPreferenceChange = (): void => {
    if (!getSavedTheme()) {
        applyTheme(getSystemTheme(), true);
    }
};

const watchSystemPreference = (): void => {
    if (isSystemListenerAttached) {
        return;
    }

    const query = getMediaQuery();

    if (!query) {
        return;
    }

    if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', handleSystemPreferenceChange);
    } else {
        query.addListener(handleSystemPreferenceChange);
    }

    isSystemListenerAttached = true;
};

export function detectTheme(): void {
    applyTheme(getSavedTheme() ?? getSystemTheme());
    watchSystemPreference();
}

export function toggleTheme(): void {
    const newTheme: Theme = isDarkMode() ? 'light' : 'dark';

    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    applyTheme(newTheme, true);
}

export function isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
}

export function subscribeTheme(listener: ThemeListener): () => void {
    themeListeners.add(listener);
    listener(isDarkMode());

    return () => {
        themeListeners.delete(listener);
    };
}

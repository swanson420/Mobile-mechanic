// Initialize Icons
lucide.createIcons();

// Theme Sync (Matches Phone Day/Night Settings)
const syncTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncTheme);
syncTheme();

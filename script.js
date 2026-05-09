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

// Basic Anti-XSS (Security)
document.getElementById('secureForm').addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        // Remove any <script> tags or harmful characters
        input.value = input.value.replace(/<[^>]*>?/gm, '');
    });
});

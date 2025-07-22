// MyWeb.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    toggleButton.textContent = savedTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        toggleButton.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        localStorage.setItem('theme', newTheme);
    });
});
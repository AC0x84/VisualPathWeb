// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the saved theme
function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode'; // Default to light mode
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌜'; // Moon emoji for dark mode
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌞'; // Sun emoji for light mode
    }
}

// Apply the theme when the page loads
applyTheme();

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌜'; // Moon emoji for dark mode
        localStorage.setItem('theme', 'dark-mode'); // Save dark mode preference
    } else {
        themeToggle.textContent = '🌞'; // Sun emoji for light mode
        localStorage.setItem('theme', 'light-mode'); // Save light mode preference
    }
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated-text, .animated-button, .animated-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
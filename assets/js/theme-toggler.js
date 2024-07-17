const themeTogglerButton = document.querySelector('.theme-toggler');

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
})

themeTogglerButton.addEventListener('click', () => {
    let icon = themeTogglerButton.querySelector('.bx');
    let currentTheme = getCurrentTheme();

    if(currentTheme === 'light') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    
})


function getCurrentTheme() {
    return localStorage.getItem('current-theme');
}

function applyTheme(theme) {
    let themes = ['dark', 'light'];
    if(themes.includes(theme)) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('current-theme', theme);
    } else {
        console.error(`Cannot set theme ${theme}. Its not available`);
    }
}

function initTheme() {
    const currentTheme = getCurrentTheme();
    let icon = themeTogglerButton.querySelector('.bx');
    currentTheme != null ? applyTheme(currentTheme) : applyTheme('light');
}
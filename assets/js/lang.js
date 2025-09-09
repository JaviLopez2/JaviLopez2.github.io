(function () {
    const toggle = document.getElementById('lang-toggle');
    const label = document.getElementById('lang-label');
    const elements = document.querySelectorAll('[data-lang-es]');

    function setLanguage(lang) {
        label.textContent = lang.toUpperCase();
        elements.forEach(el => {
            const langValue = el.getAttribute(`data-lang-${lang}`);
            if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email'))) {
                el.placeholder = langValue;
            } else if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'reset')) {
                el.value = langValue;
            } else {
                el.innerHTML = langValue;
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('site-lang') || 'es';
        toggle.checked = savedLang === 'en';
        setLanguage(savedLang);
    });

    toggle.addEventListener('change', () => {
        const lang = toggle.checked ? 'en' : 'es';
        localStorage.setItem('site-lang', lang);
        setLanguage(lang);
    });
})();
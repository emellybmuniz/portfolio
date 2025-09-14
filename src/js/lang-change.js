/**
 * Helper function to resolve nested object keys from a string path.
 * @param {string} path - The string path (e.g., "header.projects").
 * @param {object} obj - The translations object.
 * @returns {string|null} The translated string or null if not found.
 */
function resolve(path, obj) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
}

/**
 * Fetches the language JSON file and applies translations to the page.
 * @param {string} lang - The language code (e.g., "en", "pt-BR").
 */
async function setLanguage(lang) {
    try {
        const response = await fetch(`src/langs/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${lang}.json, status: ${response.status}`);
        }
        const data = await response.json();
        const translations = data[lang];

        if (!translations) {
            console.error(`No translations found for language "${lang}" in the JSON structure.`);
            return;
        }

        // Update all elements with a data-translate-key
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = resolve(key, translations);

            if (translation) {
                const type = element.getAttribute('data-translate-type');
                switch (type) {
                    case 'content':
                    case 'alt':
                    case 'title':
                    case 'placeholder':
                    case 'aria-label':
                    case 'value':
                        element.setAttribute(type === 'content' ? 'content' : type, translation);
                        break;
                    default:
                        element.textContent = translation;
                        break;
                }
            }
        });

        // Special handling for the CV download link
        const cvLink = document.querySelector('[data-cv-link]');
        if (cvLink) {
            const cvFile = resolve('header.cvFile', translations);
            const cvFileName = resolve('header.cvFileName', translations);
            if (cvFile) cvLink.setAttribute('href', cvFile);
            if (cvFileName) cvLink.setAttribute('download', cvFileName);
        }

        document.documentElement.lang = lang;

        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { lang, translations }
        }));

    } catch (error) {
        console.error('Failed to load or apply translations:', error);
        if (lang !== 'pt-BR') {
            console.log('Falling back to Portuguese (pt-BR).');
            setLanguage('pt-BR');
        }
    }
}

function getInitialLanguage() {
    const savedLang = localStorage.getItem('lang');
    const supportedLangs = ['pt-BR', 'en'];

    if (savedLang && supportedLangs.includes(savedLang)) return savedLang;

    const browserLang = navigator.language;
    const matchedLang = supportedLangs.find(supported => browserLang.startsWith(supported.split('-')[0]));

    return matchedLang || 'pt-BR'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggleButton = document.getElementById('lang-toggle-btn');

    if (langToggleButton) {
        langToggleButton.addEventListener('click', (event) => {
            event.preventDefault();

            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';

            localStorage.setItem('lang', newLang);
            setLanguage(newLang);
        });
    }

    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
});

document.getElementById('english').addEventListener('click', () => {
    setLanguage('en');
});

document.getElementById('latvian').addEventListener('click', () => {
    setLanguage('lv');
});

function setLanguage(language) {
    // Store the chosen language in localStorage
    localStorage.setItem('language', language);
    translatePage(language);
}

function translatePage(language) {
    const translations = {
        en: {
            "Welcome to Auce, Latvia": "Welcome to Auce, Latvia",
            "Your journey to history, culture, and beauty begins here.": "Your journey to history, culture, and beauty begins here.",
            "Tourist Attractions": "Tourist Attractions",
            "How to Reach Auce": "How to Reach Auce",
            "Travel Time": "Travel Time",
            // Add other English translations here
        },
        lv: {
            "Welcome to Auce, Latvia": "Laipni lūdzam Auces, Latvijā",
            "Your journey to history, culture, and beauty begins here.": "Jūsu ceļojums uz vēsturi, kultūru un skaistumu sākas šeit.",
            "Tourist Attractions": "Tūrisma apskates objekti",
            "How to Reach Auce": "Kā nokļūt Auce",
            "Travel Time": "Ceļojuma laiks",
            // Add other Latvian translations here
        }
    };

    // Update the text of all elements based on the selected language
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[language][key] || el.textContent;
    });
}

// On page load, check the stored language preference and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    translatePage(savedLanguage);
});


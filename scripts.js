const englishFlag = document.getElementById('english-flag');
const latvianFlag = document.getElementById('latvian-flag');


const translations = {
    "english": {
        "site-title": "Welcome to Auce, Latvia",
        "site-description": "Your journey to history, culture, and beauty begins here.",
        "tourist-attractions-title": "Tourist Attractions",
        "getting-there-title": "How to Reach Auce",
        "travel-time-title": "Travel Time",
        "weather-title": "Weather",
        "culture-title": "Culture",
        "history-title": "History of Auce",
        "food-music-title": "Food & Music",
        "geography-title": "Geography",
        "events-festivals-title": "Events & Festivals",
        "economy-title": "Economy",
        "education-title": "Education",
        "accommodation-title": "Accommodation",
        "nature-title": "Nature & Outdoor Activities"
    },
    "latvian": {
        "site-title": "Laipni lūdzam Auce, Latvija",
        "site-description": "Jūsu ceļojums uz vēsturi, kultūru un skaistumu sākas šeit.",
        "tourist-attractions-title": "Tūrisma apskates objekti",
        "getting-there-title": "Kā nokļūt Auce",
        "travel-time-title": "Ceļojuma laiks",
        "weather-title": "Laika apstākļi",
        "culture-title": "Kultūra",
        "history-title": "Auces vēsture",
        "food-music-title": "Pārtika un mūzika",
        "geography-title": "Ģeogrāfija",
        "events-festivals-title": "Pasākumi un festivāli",
        "economy-title": "Ekonomika",
        "education-title": "Izglītība",
        "accommodation-title": "Naktsmītnes",
        "nature-title": "Daba un ārējās aktivitātes"
    }
};


function changeLanguage(language) {
    Object.keys(translations[language]).forEach(key => {
        document.getElementById(key).textContent = translations[language][key];
    });
    localStorage.setItem('language', language);
}


englishFlag.addEventListener('click', () => changeLanguage('english'));
latvianFlag.addEventListener('click', () => changeLanguage('latvian'));

const savedLanguage = localStorage.getItem('language') || 'english';
changeLanguage(savedLanguage);

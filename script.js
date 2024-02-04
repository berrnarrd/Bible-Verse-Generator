const scriptureContainer = document.getElementById('scripture-container');
const verseText = document.getElementById('verse');
const verseBook = document.getElementById('book');
const newVerseBtn = document.getElementById('new-verse-btn');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    scriptureContainer.hidden = true;
};

// Hide Loading
function complete() {
    if (!loader.hidden) {
        scriptureContainer.hidden = false;
        loader.hidden = true;
    }
};

function newVerse() {
    loading();
    const verse = localVerses[Math.floor(Math.random() * localVerses.length)];
    verseBook.textContent = verse.book;
    verseText.textContent = verse.verse;

    // Check Verse length to determine styling
    // if (verse.verse.length > 120) {
    //     verseText.classList.add('long-quote');
    // }
    // else {
    //     verseText.classList.remove('long-quote');
    // }

    // Stop Loader and Show Verse
    complete();
};

// Event Listeners
newVerseBtn.addEventListener('click', newVerse)

// On Load
newVerse();
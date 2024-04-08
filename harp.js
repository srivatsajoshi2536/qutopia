// Array of quotes
const quotes = [
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "The original idea of the web was that it should be a collaborative space where you can communicate through sharing information. - Tim Berners-Lee",
    "If you're changing the world, you're working on important things. You're excited to get up in the morning. - Larry Page",
    "We want Google to be the third half of your brain. - Sergey Brin",
    "I am more than ever now the bride of science. - Ada Lovelace",
    "The most dangerous phrase in the language is, 'We've always done it this way.' - Grace Hopper"
];


// Get a reference to the button and text area in your HTML
const generateBtn = document.getElementById('generate-btn');
const quoteDisplay = document.getElementById('quote');

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
}

// Event listener for the button click
generateBtn.addEventListener('click', generateQuote);

// Initial quote generation when the page loads
generateQuote();

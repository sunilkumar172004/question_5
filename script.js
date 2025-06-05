
// Array of motivational quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Act as if what you do makes a difference. It does. - William James"
];

// Select elements from the DOM
const quoteElement = document.getElementById('quote');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');

// Function to show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Fade out the quote and then change it
  quoteElement.style.opacity = 0;
  
  setTimeout(() => {
    quoteElement.textContent = randomQuote;
    quoteElement.style.opacity = 1;  // Fade back in
  }, 500);
}

// Show an initial quote on load
window.onload = showRandomQuote;

// Add event listener to the button to show the next quote
nextQuoteBtn.addEventListener('click', showRandomQuote);

const quotes = [
    {
        quote: "He who has never hoped can never despair.",
        author:"George Bernard Shaw",
    },
    {
        quote: "Laughter is by definition healthy.",
        author:"Doris Lessing",

    },
    {
        quote: "The greatest mistake is trying to be more agreeable than you can be..",
        author:"Walter Bagehot",
    },
    {
        quote: "A friend to all is a friend to none.",
        author:"Aristotle",
    },
    {
        quote: "When you stare into the abyss the abyss stares back at you.",
        author:"Friedrich Nietzsche",
    },
    {
        quote: "The more I want to get something done, the less I call it work.",
        author:"Richard Bach",
    },
    {
        quote: "The reason we all like to think so well of others is that we are all afraid for ourselves. The basis of optimism is sheer terror.",
        author:"Oscar Wildew",
    },
    {
        quote: "You may be disappointed if you fail, but you are doomed if you don't try.",
        author:"Beverly Sills",
    },
    {
        quote: "When you stare into the abyss the abyss stares back at you.",
        author:"Friedrich Nietzsche2",
    }, 
    {
        quote: "The reason we all like to think so well of others is that we are all afraid for ourselves. The basis of optimism is sheer terror.",
        author:"Oscar Wildew3",
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*(quotes.length-1))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
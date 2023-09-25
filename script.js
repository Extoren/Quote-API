document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const getQuoteButton = document.getElementById('getQuote');

    getQuoteButton.addEventListener('click', function() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteElement.innerHTML = `
                    <p>${data.content}</p>
                    <footer>${data.author}</footer>
                `;
            })
            .catch(error => console.error('Error:', error));
    });
});

document.getElementById('random-joke-btn').addEventListener('click', function() {
    console.log('Fetching a random joke...'); // Debug log
    // Fetch a random joke from the joke API
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Joke fetched successfully:', data); // Debug log
            // Display the joke in the #joke element
            document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            console.error('Error fetching the joke:', error); // Debug log
            document.getElementById('joke').innerText = 'Oops! Something went wrong, try again later.';
        });
});

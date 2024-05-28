function filterCards() {
    // Get the search term entered by the user and convert it to lowercase
    const searchTerm = document.getElementById('search').value.toLowerCase();
    // Get all job card elements
    const jobCards = document.getElementsByClassName('job-card');

    // Iterate through each job card
    for (let i = 0; i < jobCards.length; i++) {
        const card = jobCards[i];
        // Get the title of the job from the card and convert it to lowercase
        const title = card.querySelector('.titleofjob').innerText.toLowerCase();

        // Check if the title includes the search term
        if (title.includes(searchTerm)) {
            // If it does, display the card
            card.style.display = 'block';
        } else {
            // If it doesn't, hide the card
            card.style.display = 'none';
        }
    }
}

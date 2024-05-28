function filterCards() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const jobCards = document.getElementsByClassName('job-card');

    for (let i = 0; i < jobCards.length; i++) {
        const card = jobCards[i];
        const title = card.querySelector('.titleofjob').innerText.toLowerCase();

        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
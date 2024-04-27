document.addEventListener("DOMContentLoaded", function() {
    // Sample data for the leaderboard
    const leaderboardData = [
        { name: 'John Doe', score: 100 },
        { name: 'Jane Smith', score: 90 },
        { name: 'Michael Brown', score: 85 },
        { name: 'Emily Jones', score: 80 }
    ];

    // Get the leaderboard list container
    const leaderboardList = document.getElementById('leaderboard-list');

    // Iterate through the leaderboard data and create HTML elements for each entry
    leaderboardData.forEach((entry, index) => {
        // Create a list item for the leaderboard entry
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;

        // Append the list item to the leaderboard list container
        leaderboardList.appendChild(listItem);
    });
});

// Sample course content data
const courseContentData = [
    'HTML Basics',
    'CSS Fundamentals',
    'JavaScript Essentials'
];

// Function to populate course content
function populateCourseContent() {
    const courseContentElement = document.getElementById('course-content');
    courseContentData.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.textContent = topic;
        courseContentElement.appendChild(topicElement);
    });
}

// Call the function to populate course content when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateCourseContent();
});

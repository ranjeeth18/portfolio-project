document.addEventListener('DOMContentLoaded', function() {
    // Function to capture double-click events on skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('dblclick', function() {
            // Display detailed view of the skill (e.g., in a modal)
            // You can implement this functionality here
        });
    });

    // Function to trigger animation effect
    const animateButton = document.getElementById('animateButton');
    animateButton.addEventListener('click', function() {
        // Add animation class to the button element
        this.classList.add('animate__animated', 'animate__bounce');
        
        // Remove animation class after animation completes
        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__bounce');
        });
    });

    // Function to integrate videos from external websites
    // You can implement this functionality based on specific requirements
});

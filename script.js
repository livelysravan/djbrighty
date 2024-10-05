document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Play sound on hover
const profileImage = document.querySelector('.profile-image img');
const hoverSound = document.getElementById('hover-sound');

profileImage.addEventListener('mouseover', () => {
    hoverSound.currentTime = 0; // Reset the sound to the beginning
    hoverSound.play();
});

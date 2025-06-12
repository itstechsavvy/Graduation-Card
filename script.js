// Find the card scene element in the HTML
const scene = document.querySelector('.scene');

// Add an event listener that waits for a click on the scene
scene.addEventListener('click', function() {
  // When clicked, find the card element inside and toggle the 'is-flipped' class
  scene.querySelector('.card').classList.toggle('is-flipped');
});

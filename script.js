  // Slider functionality
  function initSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    // Show first slide
    slides[0].classList.add('active');
  
    // Function to change slide
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
  }
  
  // Countdown Timer
  function initTimer() {
    const eventDate = new Date('March 21, 2025 00:00:00').getTime();
  
    function updateTimer() {
      const now = new Date().getTime();
      const distance = eventDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerHTML = `${days}<br>Days`;
      document.getElementById('hours').innerHTML = `${hours}<br>Hours`;
      document.getElementById('minutes').innerHTML = `${minutes}<br>Minutes`;
      document.getElementById('seconds').innerHTML = `${seconds}<br>Seconds`;
    }
  
    // Update timer every second
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  // Initialize everything when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initTimer();
  });
// Initialize the map
function initMap() {
  var location = { lat: 27.4729, lng: 94.9243 }; // Coordinates for Dibrugarh University

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

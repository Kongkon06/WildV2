// Slider Functionality
class Slider {
  constructor(sliderElement, interval = 3000) {
    this.slider = sliderElement;
    this.slides = this.slider.querySelectorAll('.slide');
    this.currentIndex = 0;
    this.interval = interval;
    this.autoSlide();
  }

  // Switch to the next slide
  nextSlide() {
    this.changeSlide((this.currentIndex + 1) % this.slides.length);
  }

  // Switch to the previous slide
  prevSlide() {
    this.changeSlide((this.currentIndex - 1 + this.slides.length) % this.slides.length);
  }

  // Change slide by index
  changeSlide(index) {
    this.slides[this.currentIndex].classList.remove('active');
    this.currentIndex = index;
    this.slides[this.currentIndex].classList.add('active');
  }

  // Automatically cycle through slides
  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  // Manual control of slides (next/prev)
  addControls(nextBtn, prevBtn) {
    nextBtn.addEventListener('click', () => this.nextSlide());
    prevBtn.addEventListener('click', () => this.prevSlide());
  }
}

// Initialize slider on the page
document.addEventListener('DOMContentLoaded', () => {
  const sliderElement = document.querySelector('.slider');
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  
  const slider = new Slider(sliderElement);

  // Optional: Add manual controls if buttons are present
  if (nextButton && prevButton) {
    slider.addControls(nextButton, prevButton);
  }
});

// Countdown Timer
function initTimer() {
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 52); // Add 52 days
  eventDate.setHours(8); // Set to 8 hours
  eventDate.setMinutes(37); // Set to 37 minutes
  eventDate.setSeconds(11); // Set to 11 seconds
  
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
  
    // Optional: Handle countdown expiration
    if (distance < 0) {
      document.getElementById('days').innerHTML = `0<br>Days`;
      document.getElementById('hours').innerHTML = `0<br>Hours`;
      document.getElementById('minutes').innerHTML = `0<br>Minutes`;
      document.getElementById('seconds').innerHTML = `0<br>Seconds`;
    }
  }
  
  // Update the timer every second
  setInterval(updateTimer, 1000);
}

// Initialize the timer
initTimer();

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
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
  
    hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  
}

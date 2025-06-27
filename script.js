let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function toggleMenu() {
    const navLinks = document.querySelector('.navbar .link');
    navLinks.classList.toggle('show');
  }

//  Start slide

let slideIndex = 1;
showSlides(slideIndex);

// Moving forwars or backward
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Moving to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Showing current slides and hide the rest 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";  // We display current slides 
  dots[slideIndex - 1].className += " active";
}



//end Slide 

// Toggle menu for mobile
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Declare currentIndex only once


// Dummy slider function — replace with your real one
function showSlide(index) {
  console.log("Showing slide:", index);
  // Your slide logic here
}

// Initialize first slide
showSlide(currentIndex);

// Show button after scrolling down 300px
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

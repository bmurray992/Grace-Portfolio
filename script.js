let slideIndex = 1;
showSlides(slideIndex);

const navbar = document.querySelector('.nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav__active');
    } else {
        navbar.classList.remove('nav__active');
    }
};


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__slides");
  let dots = document.getElementsByClassName("slideshow__dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow__active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " slideshow__active";

}




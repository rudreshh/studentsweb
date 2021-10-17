
// ---------------------- FIRST PAGE -------------------------
const [red, green, blue] = [255, 255, 255];
const section1 = document.querySelector(".firstPage");
const section1text = document.querySelector("#firstPageText");
const section1footer = document.querySelector("#firstPageFooter");
const incentives = document.querySelector('#incentivesContainer');
window.addEventListener("scroll", () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  const [fr, fg, fb] = [255 - red / y, 255 - green / y, 255 - blue / y];
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  section1.style.color = `rgb(${fr}, ${fg}, ${fb})`;
  const scale=1 - (y - 1) / 5;
  if(scale<=0)
  section1footer.style.transform = `scale(${0})`;
  else
  section1footer.style.transform = `scale(${1})`;
});
// ------------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mycards");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

  
  
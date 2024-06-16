// Script to make the image scroll to the about section when clicked

document.getElementById('scroll-image').addEventListener('click', function(){
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Slider of the speakers

let index = 0;
function nextSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.children[0].offsetWidth;
  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}
function prevSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.children[0].offsetWidth;
  // Calculate the new index for the previous slide
  index = (index - 1 + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}
let index2 = 0;
function nextSlide2() {
    const slides = document.querySelector('.slides-2');
    const slideWidth = slides.children[0].offsetWidth;
    index2 = (index2 + 1) % slides.children.length;
    slides.style.transform = `translateX(-${index2 * slideWidth}px)`;
  }
  function prevSlide2() {
    const slides = document.querySelector('.slides-2');
    const slideWidth = slides.children[0].offsetWidth;
    // Calculate the new index for the previous slide
    index2 = (index2 - 1 + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${index2 * slideWidth}px)`;
  }
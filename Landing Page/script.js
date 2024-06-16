// Script to make the image scroll to the about section when clicked

document.getElementById('scroll-image').addEventListener('click', function(){
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Slider of the speakers

let keyspeakerIndex = 0;
let speakerIndex = 0;
function nextSlide(slider_class,sliderType) {
  const slides = document.querySelector(`.${slider_class}`);
  const slideWidth = slides.children[0].offsetWidth;
  const viewportWidth = slides.offsetWidth;
  const numSlidesThatFit = Math.floor(viewportWidth / slideWidth);
  let index;
  if(sliderType === 'key-speaker'){
    index=keyspeakerIndex;
  }
  else if(sliderType === 'speaker'){
    index=speakerIndex;
  }
  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  // Adjusted condition to hide the Next button
  if (index >= slides.children.length - numSlidesThatFit) {
    document.querySelector('.next').style.display = 'none';
  } else {
    document.querySelector('.next').style.display = 'block';
  }

  // Make the Prev button visible if we move away from the first slide
  if (index > 0) {
    document.querySelector('.prev').style.display = 'block';
  }

  if(sliderType === 'key-speaker'){
    keyspeakerIndex = index;
  }
  else if(sliderType === 'speaker'){
    speakerIndex = index;
  }
}

function prevSlide(slider_class) {
  const slides = document.querySelector(`.${slider_class}`);
  const slideWidth = slides.children[0].offsetWidth;
  const viewportWidth = slides.offsetWidth;
  const numSlidesThatFit = Math.floor(viewportWidth / slideWidth);
  let index;
  if(sliderType === 'key-speaker'){
    index=keyspeakerIndex;
  }
  else if(sliderType === 'speaker'){
    index=speakerIndex;
  }
  if (index > 0) {
    index = (index - 1) % slides.children.length;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // Update the visibility of the Prev button
  if (index === 0) {
    document.querySelector('.prev').style.display = 'none';
  } else {
    document.querySelector('.prev').style.display = 'block';
  }

  // Ensure the Next button is visible when going back, unless it's the last slide
  if (index < slides.children.length - numSlidesThatFit) {
    document.querySelector('.next').style.display = 'block';
  }
  if(sliderType === 'key-speaker'){
    keyspeakerIndex = index;
  }
  else if(sliderType === 'speaker'){
    speakerIndex = index;
  }
}
// Call this function when initializing your slider to ensure the Prev button is initially hidden if the first slide is shown
function initializeSlider() {
  let index;
  if(sliderType === 'key-speaker'){
    index=keyspeakerIndex;
  }
  else if(sliderType === 'speaker'){
    index=speakerIndex;
  }
  if (index === 0) {
    document.querySelector('.prev').style.display = 'none';
  }
  // Add any other initialization logic here
}
// let index2 = 0;
// function nextSlide2() {
//     const slides = document.querySelector('.slides-2');
//     const slideWidth = slides.children[0].offsetWidth;
//     index2 = (index2 + 1) % slides.children.length;
//     slides.style.transform = `translateX(-${index2 * slideWidth}px)`;
//   }
//   function prevSlide2() {
//     const slides = document.querySelector('.slides-2');
//     const slideWidth = slides.children[0].offsetWidth;
//     // Calculate the new index for the previous slide
//     index2 = (index2 - 1 + slides.children.length) % slides.children.length;
//     slides.style.transform = `translateX(-${index2 * slideWidth}px)`;
//   }
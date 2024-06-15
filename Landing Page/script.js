// Script to make the image scroll to the about section when clicked

document.getElementById('scroll-image').addEventListener('click', function(){
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
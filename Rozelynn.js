var darkModeButton = document.getElementById('mybutton');
var webpageBackground = document.body;
var hideDarkMode = false;
var selfPortrait = document.getElementById('darkModeButton');

function activate() {
  if (hideDarkMode == true) {
    webpageBackground.style.background='#b8c6db';
     hideDarkMode = false;
     darkModeButton.innerHTML='Apply Dark Mode';

  }
  else if (hideDarkMode == false) {
    webpageBackground.style.background='black';
    hideDarkMode = true;
    darkModeButton.innerHTML='Hide Dark Mode';

  }
  console.log("activate");
}
darkModeButton.addEventListener("click", activate);


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

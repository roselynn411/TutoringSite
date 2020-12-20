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

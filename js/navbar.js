const openSideBar = () => document.getElementById("side-bar").style.width = "250px";
const closeSideBar = () => document.getElementById("side-bar").style.width = "0";

let sideBarMenu = document.querySelector('#menu');
sideBarMenu.addEventListener('click', openSideBar);

let closeBtn = document.querySelector('#close-btn');
closeBtn.addEventListener('click', closeSideBar);

// Get the modal
var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const openSideBar = () => document.getElementById("side-bar").style.width = "250px";
const closeSideBar = () => document.getElementById("side-bar").style.width = "0";

let sideBarMenu = document.querySelector('#menu');
sideBarMenu.addEventListener('click', openSideBar);

let closeBtn = document.querySelector('#close-btn');
closeBtn.addEventListener('click', closeSideBar);
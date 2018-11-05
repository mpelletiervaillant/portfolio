// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var stick = document.getElementById("stick");

// Get the offset position of the navbar
var sticky = stick.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    stick.classList.add("sticky")
  } else {
    stick.classList.remove("sticky");
  }
}

function mobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-covid");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.num').counterUp({
  delay: 5,
  time: 600
});

var datecovid = new Date();
document.getElementById("date").innerText = datecovid.toUTCString();

var wrapper = document.querySelector('section');

function scrollView () {
  window.scrollBy(wrapper);
  alert("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
}

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("aktif");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


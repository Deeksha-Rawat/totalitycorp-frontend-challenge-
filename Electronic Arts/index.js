window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




var gamebox1  = document.getElementById("firstgame")
var p1 = document.getElementById("origi1")
gamebox1.addEventListener("mouseover",firstfunc)
gamebox1.addEventListener("mouseout",firstfunc1)



var gamebox2  = document.getElementById("secondgame")
var p2 = document.getElementById("origi2")
gamebox2.addEventListener("mouseover",secondfunc)
gamebox2.addEventListener("mouseout",secondfunc1)




var gamebox3  = document.getElementById("thirdgame")
var p3 = document.getElementById("origi3")
gamebox3.addEventListener("mouseover",thirdfunc)
gamebox3.addEventListener("mouseout",thirdfunc1)




var gamebox4  = document.getElementById("forthgame")
var p4 = document.getElementById("origi4")
gamebox4.addEventListener("mouseover",forthfunc)
gamebox4.addEventListener("mouseout",forthfunc1)




var gamebox5  = document.getElementById("fifthgame")
var p5 = document.getElementById("origi5")
gamebox5.addEventListener("mouseover",fifthfunc)
gamebox5.addEventListener("mouseout",fifthfunc1)




var gamebox6  = document.getElementById("sixthgame")
var p6 = document.getElementById("origi6")
gamebox6.addEventListener("mouseover",sixthfunc)
gamebox6.addEventListener("mouseout",sixthfunc1)



function firstfunc() {
  p1.classList.add("original");
  p1.classList.remove('origi1')
}
function firstfunc1() {
  p1.classList.add("origi1");
  p1.classList.remove('original')
}


function secondfunc() {
  p2.classList.add("original");
  p2.classList.remove('origi2')
}
function secondfunc1() {
  p2.classList.add("origi2");
  p2.classList.remove('original')
}



function thirdfunc() {
  p3.classList.add("original");
  p3.classList.remove('origi3')
}
function thirdfunc1() {
  p3.classList.add("origi3");
  p3.classList.remove('original')
}



function forthfunc() {
  p4.classList.add("original");
  p4.classList.remove('origi4')
}
function forthfunc1() {
  p4.classList.add("origi4");
  p4.classList.remove('original')
}


function fifthfunc() {
  p5.classList.add("original");
  p5.classList.remove('origi4')
}
function fifthfunc1() {
  p5.classList.add("origi4");
  p5.classList.remove('original')
}


function sixthfunc() {
  p6.classList.add("original");
  p6.classList.remove('origi4')
}
function sixthfunc1() {
  p6.classList.add("origi4");
  p6.classList.remove('original')
}


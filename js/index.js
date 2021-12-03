var w = window.innerWidth
console.log(w)
var i = window.innerHeight
console.log(i)
if(w > 769) {
  document.documentElement.style.setProperty('--sc-Height', (i-107)+'px');
} else {
  document.documentElement.style.setProperty('--sc-Height', i+'px');

}

var locked = false;
var slide = 1

function unlock () {locked = false;}

function mobilePopout() {
    var links = document.getElementById("links")
    links.style.display = "block";
    var click = document.getElementById("click")
    click.style.display = "block";
}

function mobileHide() {
    var links = document.getElementById("links")
    links.style.display = "none";
    var click = document.getElementById("click")
    click.style.display = "none";
}

//function scroll() {
  //arrow('right')
  //setTimeout(scroll,6000);
//}

scroll();

function arrow(direction) {
  if (!locked) {
    locked = true;
    setTimeout(unlock, 1500);


    if( slide == 2 & direction == 'right' ) {
      slide = 3

      var s1 = document.getElementById('r1')
      s1.style.zIndex = "7"
      s1.style.left = "100%"
     // s1.style.zIndex = "8"

      var s2 = document.getElementById('r2')
      s2.style.zIndex = "8"
      s2.style.left = "-100%"


      var s3 = document.getElementById('r3')
      s3.style.zIndex = "9"
      s3.style.left = "0%"



      var d1 = document.getElementById('r1i')
      d1.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d2 = document.getElementById('r3i')
      d2.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d3 = document.getElementById('r2i')
      d3.style.backgroundColor = "#109ee6"
    } else if ( slide == 2 & direction == 'left' ) {
      slide = 1

      var s1 = document.getElementById('r1')
      s1.style.zIndex = "9"
      s1.style.left = "0%"

      var s2 = document.getElementById('r2')
      s2.style.zIndex = "8"
      s2.style.left = "100%"

      var s3 = document.getElementById('r3')
      s3.style.zIndex = "7"
      s3.style.left = "-100%"

      var d1 = document.getElementById('r1i')
      d1.style.backgroundColor = "#109ee6"
      var d2 = document.getElementById('r2i')
      d2.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d3 = document.getElementById('r3i')
      d3.style.backgroundColor = "rgba(0, 0, 0, 0)"
    } else if ( slide == 1 & direction == 'right' ) {
      slide = 2

      var s1 = document.getElementById('r1')
      s1.style.zIndex = "8"
      s1.style.left = "-100%"

      var s2 = document.getElementById('r2')
      s2.style.zIndex = "9"
      s2.style.left = "0%"

      var s3 = document.getElementById('r3')
      s3.style.zIndex = "7"
      s3.style.left = "100%"

      var d1 = document.getElementById('r1i')
      d1.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d2 = document.getElementById('r3i')
      d2.style.backgroundColor = "#109ee6"
      var d3 = document.getElementById('r2i')
      d3.style.backgroundColor = "rgba(0, 0, 0, 0)"
    } else if ( slide == 1 & direction == 'left' ) {
      slide = 3

      var s1 = document.getElementById('r1')
      s1.style.zIndex = "8"
      s1.style.left = "100%"

      var s2 = document.getElementById('r2')
      s2.style.zIndex = "7"
      s2.style.left = "-100%"

      var s3 = document.getElementById('r3')
      s3.style.zIndex = "9"
      s3.style.left = "0%"

      var d1 = document.getElementById('r1i')
      d1.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d2 = document.getElementById('r3i')
      d2.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d3 = document.getElementById('r2i')
      d3.style.backgroundColor = "#109ee6"
    }  else if ( slide == 3 & direction == 'right' ) {
      slide = 1

      var s1 = document.getElementById('r1')
      s1.style.zIndex = "9"
      s1.style.left = "0%"

      var s2 = document.getElementById('r2')
      s2.style.zIndex = "7"
      s2.style.left = "100%"

      var s3 = document.getElementById('r3')
      s3.style.zIndex = "8"
      s3.style.left = "-100%"

      var d1 = document.getElementById('r1i')
      d1.style.backgroundColor = "#109ee6"
      var d2 = document.getElementById('r3i')
      d2.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d3 = document.getElementById('r2i')
      d3.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }  else if ( slide == 3 & direction == 'left' ) {
      slide = 2

      var s1 = document.getElementById('r1')
      s1.style.zIndex = "7"
      s1.style.left = "-100%"

      var s2 = document.getElementById('r2')
      s2.style.zIndex = "9"
      s2.style.left = "0%"

      var s3 = document.getElementById('r3')
      s3.style.zIndex = "8"
      s3.style.left = "100%"

      var d1 = document.getElementById('r1i')
      d1.style.backgroundColor = "rgba(0, 0, 0, 0)"
      var d2 = document.getElementById('r3i')
      d2.style.backgroundColor = "#109ee6"
      var d3 = document.getElementById('r2i')
      d3.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
  }

}

function changeTheme() {
  var currentTheme = localStorage.getItem('Theme');
  if (currentTheme == 'light') { // this is dark theme

    localStorage.setItem('Theme', 'dark');

    var clr = document.getElementById("th1")
    clr.style.filter = "invert(89%) sepia(3%) saturate(0%) hue-rotate(171deg) brightness(98%) contrast(109%)";

    var clr2 = document.getElementById("th2")
    clr2.style= "background-color: #3D3D3D";

    var clr3_0 = document.getElementById("th3-0")
    clr3_0.style.backgroundColor = "#e6e6e6"
    var clr3_1 = document.getElementById("th3-1")
    clr3_1.style.backgroundColor = "#e6e6e6"
    var clr3_2 = document.getElementById("th3-2")
    clr3_2.style.backgroundColor = "#e6e6e6"


  } else if (currentTheme == 'dark') { // this is light theme
    localStorage.setItem('Theme', 'light');

    var clr = document.getElementById("th1")
    clr.style.filter = "invert(0%) sepia(53%) saturate(1198%) hue-rotate(287deg) brightness(110%) contrast(108%)";

    var clr2 = document.getElementById("th2")
    clr2.style= "background-color: white";

    var clr3_0 = document.getElementById("th3-0")
    clr3_0.style.backgroundColor = "black"
    var clr3_1 = document.getElementById("th3-1")
    clr3_1.style.backgroundColor = "black"
    var clr3_2 = document.getElementById("th3-2")
    clr3_2.style.backgroundColor = "black"
  }
}

if (localStorage.getItem('Theme') != 'dark' & localStorage.getItem('Theme') != 'light') {
  localStorage.setItem('Theme', 'dark');
} else if (localStorage.getItem('Theme') == 'dark') {
  var clr = document.getElementById("th1")
  clr.style.filter = "invert(89%) sepia(3%) saturate(0%) hue-rotate(171deg) brightness(98%) contrast(109%)";

  var clr2 = document.getElementById("th2")
  clr2.style= "background-color: #3D3D3D";

  var clr3_0 = document.getElementById("th3-0")
  clr3_0.style.backgroundColor = "#e6e6e6"
  var clr3_1 = document.getElementById("th3-1")
  clr3_1.style.backgroundColor = "#e6e6e6"
  var clr3_2 = document.getElementById("th3-2")
  clr3_2.style.backgroundColor = "#e6e6e6"
} else if (localStorage.getItem('Theme') == 'light') {
  var clr = document.getElementById("th1")
  clr.style.filter = "invert(0%) sepia(53%) saturate(1198%) hue-rotate(287deg) brightness(110%) contrast(108%)";

  var clr2 = document.getElementById("th2")
  clr2.style= "background-color: white";
}

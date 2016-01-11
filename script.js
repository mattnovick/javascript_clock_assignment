$(document).ready(function() {







// CLOCK
  function startTime() {
    var today = new Date();
    // today = Thu Jan 07 2016 18:42:12 GMT-0500 (EST)
    var h = today.getHours();
    // h = 18
    var m = today.getMinutes();
    // m = 42
    var s = today.getSeconds();
    // s = 12
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    oddOrEven(m);
    $("#txt").html(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    // i = 1
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }



// EVEN OR ODD MINUTE - BLUE OR RED
  function oddOrEven (i) {
    if (i % 2 == 0) {  
      console.log("The time now has an even minute");
      document.getElementById("txt").style.color = "#0000FF";
    } else{  
      console.log("the time now has an odd minute");
      document.getElementById("txt").style.color = "#FF0000";
    }
  }






// PULLING RANDOM BACKGROUND COLOR
  /* A function to return random number from min to max */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    var element = document.getElementById("txt");
    //generate random red, green and blue intensity
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    
    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
}, 2000); 






// PULLING RANDOM FONT
setInterval(function() {
    var element = document.getElementById("txt");
    var fontsizes = ['5px', '15px', '25px'];
    var randomfont = fontsizes[Math.floor(Math.random() * fontsizes.length)];

    
    element.style.fontSize = randomfont
    document.getElementById("fontsize").innerHTML = randomfont;
}, 3000);






  startTime();

  




});




let position = 0; //determines the position of the button

// play a sound when pressing a button:
const sound = new Audio("sound.wav") // can take a subfolder path
let myVariable = "Hello";
//
let bothorizontal = 0;
let botvertical = 0;
let madeit = false;

let dragging = false; // set dragging var to false.


let sandhorizontal = 0;
let sandvertical = 0;


if (typeof(window.localStorage) !="undefined")
{
  sandhorizontal = parseInt(window.localStorage.getItem("sandhorizontal"));
  sandvertical = parseInt(window.localStorage.getItem("sandvertical"));
  console.log("sandhorizontal");
}

// setInterval( moveButton, 20);

// on any key press call function 'keyboard()', defined bellow.
document.addEventListener("keydown", keyboard)

document.addEventListener("mousemove", onMouseMove)

function onLoad()
{
  document.ondragstart = canceldrag;

  document.getElementById('animButton').style.position = "relative"; // set the position to 'relative' to take it out of the page context

  document.getElementById('sndBx').style.top = sandvertical + "px";
  document.getElementById('sndBx').style.left = sandhorizontal + "px";

}


function canceldrag() {
  return false;
}

function moveButton()
{
if (position >= 900)
 {
   clearInterval (movePicture);
 }
else
{
  position = position + 1;
  document.getElementById("animButton").style.left = position + "px";
  console.log(position);
}

}

function myFunction()
{
  document.getElementById('jsdemo').innerHTML = "New Title";
  document.getElementById('jsdemo').innerHTML = myVariable; // changes the 'jsdemo' title to 'Hello' using myVariable

  document.getElementById('jsdemo_picture').src = "images/CliffBox.png";

  document.getElementById('jsdemo').style.fontSize = "5em"; //'fontSize' is using cammelCase fromat
 sound.play() // this plays the sound determines in 'const sound'

//  document.getElementById('jsdemo_picture02').style.display = "none" // Make jsdemo_picture02 disappear

}
// function used to move an image based on keyboard input.
function keyboard(parameter) // give the  function a parameter to hold the information about the keydown event.
{
  if (parameter.keyCode == 65)
  {
    //window.alert("hello")
    bothorizontal = bothorizontal - 4;
  }
  else if (parameter.keyCode == 68)
  {
    bothorizontal = bothorizontal + 4;
  }
  else if (parameter.keyCode == 87)
  {
    botvertical = botvertical - 4;
  }
  else if (parameter.keyCode == 83)
  {
    botvertical = botvertical + 4;
  }
  document.getElementById('RobotBox').style.top = botvertical + "px"
  document.getElementById('RobotBox').style.left = bothorizontal + "px"

  if (bothorizontal >= 300 && !madeit)
  {
    window.alert("you made it!");
    madeit = true;
  }
}

function drag()
{
dragging = true;
}

function drop()
{
dragging = false;
}

function onMouseMove(event)
{
    if (dragging) {
    sandvertical = event.pageY - 100;
    sandhorizontal = event.pageX - 100;
    document.getElementById('sndBx').style.top = sandvertical + "px";
    document.getElementById('sndBx').style.left = sandhorizontal + "px";

    window.localStorage.setItem("sandhorizontal", sandhorizontal);
    window.localStorage.setItem("sandvertical", sandvertical);
  }
}
// Comments:
// single line comment

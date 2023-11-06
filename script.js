//Start with an HTML file and a linked JS file (you can use and online IDE or VS code)
//Create a button element using JS
//Connect an event listener to the button 
//In the click handler function change the background color of the HTML page to a random color

//PARAMETERS
//RESULTS
//EXAMPLES: array[1]= #FF5733, so background color should change to #FF5733
//PSUEDOCODE

const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF'];

function getRandomColorIndex(){
  
  return Math.floor(Math.random() * colors.length);
}

//Math.random gives a random number between 0 and 1
//Math.random() * colors.length gives a random number between 0 and 6
//Math.floor rounds the number down
//Math.floor(Math.random() * colors.length) gives a random number between 0 and 5

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener('click', function (){
  const randomIndex = getRandomColorIndex();
  const randomColor = colors[randomIndex];
  
  document.body.style.backgroundColor = randomColor;
//document.body.style.backgroundColor = colors[randomIndex];
  colorButton.style.color = randomColor;
});
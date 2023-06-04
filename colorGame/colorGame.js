var numberOfCircles = 6;
var colors = generateRandomColors(numberOfCircles);
var circles = document.querySelectorAll(".circle");
var pickedColor = getRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var gridContainer = document.querySelector(".grid-container");
var resetButton = document.querySelector("#newColor");
var levelEasy = document.querySelector("#easy");
var levelHard = document.querySelector("#hard");

function generateRandomColors(num){
	var arr = []
	let randomColor = ()=>{
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r +", " + g +", " + b +")";
	}
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	console.log("-----------------",arr);
	return arr;
}
function getRandomColor(){
	var random = Math.floor(Math.random() * colors.length)
	console.log('random: ', random);
	return colors[random];
}
colorDisplay.textContent = pickedColor;
for(var i = 0; i < circles.length; i++) {
	circles[i].style.backgroundColor = colors[i];
	// console.log('circles[i].style.backgroundColor: ', circles[i].style.backgroundColor);
	circles[i].addEventListener("click",function() {
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			console.log("==========");
			messageDisplay.textContent = "You Win!!!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			// gridContainer.style.background = clickedColor;
		}	else {
			this.style.backgroundColor = "rgb(156, 241, 250)";//setting to background color
			messageDisplay.textContent = "Try Again";
		}
		});
}

function changeColors(clickedColor){
	for(var i = 0; i < circles.length; i++){
		circles[i].style.background = clickedColor;
	}	
}
levelEasy.addEventListener("click", () =>{
	numberOfCircles = 3;
	levelHard.classList.remove("default");
	levelEasy.classList.add("default");
	colors = generateRandomColors(numberOfCircles);
	pickedColor = getRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circles.length; i++){
		if(colors[i]){
			circles[i].style.background = colors[i];
		} else {
			circles[i].style.display = "none";
		}
	}
});


levelHard.addEventListener("click", ()=>{
	numberOfCircles = 6;
	levelEasy.classList.remove("default");
	levelHard.classList.add("default");	
	colors = generateRandomColors(numberOfCircles);
	pickedColor = getRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
		circles[i].style.display = "block";
	}
});

resetButton.addEventListener("click", ()=>{
	colors = generateRandomColors(numberOfCircles);
	pickedColor = getRandomColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
	}
})
var numberOfCircles = 6;
var colors = generateRandomColors (numberOfCircles);
var circles = document.querySelectorAll(".circle");
var selectedColor = getRandomColor();
var rgb = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");
var gridContainer = document.querySelector(".grid-container");
var newColor = document.querySelector("#newColor");
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
rgb.textContent = selectedColor;
for(var i = 0; i < circles.length; i++) {
	circles[i].style.backgroundColor = colors[i];
	circles[i].addEventListener("click",function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === selectedColor){
			console.log("==========");
			messageDisplay.textContent = "You Win!!!";
			newColor.textContent = "Play Again";
			changeColors(clickedColor);
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
	console.log('colors: ', colors);
	selectedColor = getRandomColor();
	rgb.textContent = selectedColor;
	
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
	selectedColor = getRandomColor();
	rgb.textContent = selectedColor;
	
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
		circles[i].style.display = "block";
	}
});

newColor.addEventListener("click", ()=>{
	colors = generateRandomColors(numberOfCircles);
	selectedColor = getRandomColor();
	rgb.textContent = selectedColor;
	newColor.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
	}
})
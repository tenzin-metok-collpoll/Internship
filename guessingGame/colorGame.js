let numberOfCircles = 9;
let colors = generateRandomColors (numberOfCircles);
let circles = document.querySelectorAll(".circle");
let selectedColor = getRandomColor();
let rgb = document.querySelector("#rgb");
let message = document.querySelector("#message");
let gridContainer = document.querySelector(".grid-container");
let newColor = document.querySelector("#newColor");
let levelHard = document.querySelector("#hard");
let levelEasy = document.querySelector("#easy");
let levelMedium = document.querySelector("#medium")
function generateRandomColors(num){
	const arr = []
	let randomColor = ()=>{
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		return "rgb(" + r +", " + g +", " + b +")";
	}
	for(let i = 0; i < num; i++){
		arr.push(randomColor())
	}
	console.log("-----------------",arr);
	return (arr);
}
function getRandomColor(){
	const random = Math.floor(Math.random() * colors.length)
	console.log('random: ', random);
	return colors[random];
}

rgb.textContent = selectedColor;
for(let i = 0; i < circles.length; i++) {
	circles[i].style.backgroundColor = colors[i];
	circles[i].addEventListener("click",function() {
		let clickedColor = this.style.backgroundColor;
		if(clickedColor === selectedColor){
			message.textContent = "You Win 🎉";
			
			newColor.textContent = "Play Again";
			console.log('newColor.textContent: ', newColor.textContent);
			changeAllColors(clickedColor);
			
		}	else {
			this.style.backgroundColor = "rgb(156, 241, 250)";//setting to background color
			message.textContent = "Try Again";
		}
		});
}

function changeAllColors(clickedColor){
	for(let i = 0; i < circles.length; i++){
		circles[i].style.background = clickedColor;
	}	
}
function generateOutput(numberOfCircles) {
	message.textContent = "";
	colors = generateRandomColors(numberOfCircles);
	selectedColor = getRandomColor();
	rgb.textContent = selectedColor;
	for(let i = 0; i < circles.length; i++){
		console.log('circles.length: ', circles.length);
		if(colors[i]){
			circles[i].style.background = colors[i];
			circles[i].style.display = "block";
		} else {
			circles[i].style.display = "none";
		}
	}
}
levelEasy.addEventListener("click", () =>{
	levelHard.classList.remove("default");
	levelMedium.classList.remove("default");
	levelEasy.classList.add("default");
	generateOutput(3);
});

levelMedium.addEventListener("click", () =>{
	levelHard.classList.remove("default");
	levelEasy.classList.remove("default");
	levelMedium.classList.add("default");
	generateOutput(6);
});

levelHard.addEventListener("click", ()=>{
	levelEasy.classList.remove("default");
	levelMedium.classList.remove("default");
	levelHard.classList.add("default");	
	generateOutput(9);
});

newColor.addEventListener("click", ()=>{
	colors = generateRandomColors(numberOfCircles);
	selectedColor = getRandomColor();
	rgb.textContent = selectedColor;
	newColor.textContent = "NEW COLORS";
	message.textContent = "";
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
	}
})



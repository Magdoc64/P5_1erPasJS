const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
let currentIndex=0;

for (i=0; i < slides.length; i++){
	let bullet = document.createElement("span");
	bullet.classList.add("dot");
	let parentSpan = document.querySelector(".dots");
	parentSpan.appendChild(bullet);
}

let active=document.getElementsByClassName("dot")[0];
active.classList.add("dot_selected");

function changeSlide(currentIndex){
	let active=document.getElementsByClassName("dot")[currentIndex];
	active.classList.add("dot_selected");
	let slide = document.getElementById("slide-img");
	slide.src="./assets/images/slideshow/"+slides[currentIndex].image;
	let tagLine = document.getElementById("banner-tagline");
	tagLine.innerHTML=slides[currentIndex].tagLine;
}

function inactiveDots(){
	for(let i=0; i<slides.length; i++){
		let inactive=document.getElementsByClassName("dot")[i];
		inactive.classList.remove("dot_selected");
	}
}

buttonPrev.addEventListener("click", () =>{
	if (currentIndex>0){
		currentIndex--;
	}else{
		currentIndex=slides.length-1;
	}

	inactiveDots();
	
	changeSlide(currentIndex);
});

buttonNext.addEventListener("click", ()=>{
	if (currentIndex<slides.length-1){
		currentIndex++;
	}else{
		currentIndex=0;
	}

	inactiveDots();

	changeSlide(currentIndex);
});


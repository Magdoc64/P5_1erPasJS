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
let currentIndex = 0;

slides.forEach(() => {
	let bullet = document.createElement("span");
	bullet.classList.add("dot");

	let parentSpan = document.querySelector(".dots");
	parentSpan.appendChild(bullet);
});

let bulletActive = document.getElementsByClassName("dot")[currentIndex].classList.add("dot_selected");

const dotSelected = (currentIndex) => {
	for (let i=0; i<slides.length; i++){
		let bulletInactive=document.getElementsByClassName("dot")[i];
		bulletInactive.classList.remove("dot_selected");
	}

	let bulletActive = document.getElementsByClassName("dot")[currentIndex]
	bulletActive.classList.add("dot_selected");
}

const changeSlide = (currentIndex) => {
	
	let slide = document.querySelector(".banner-img");
	slide.src = "./assets/images/slideshow/"+slides[currentIndex].image;

	let tagLine = document.querySelector(".banner-tagline");
	tagLine.innerHTML = slides[currentIndex].tagLine;

}

buttonPrev.addEventListener("click", () => {
	
	currentIndex>0 ? currentIndex-- : currentIndex=slides.length-1;
	
	changeSlide(currentIndex);

	dotSelected(currentIndex);

});

buttonNext.addEventListener("click", ()=>{
	
	currentIndex<slides.length-1 ? currentIndex++ : currentIndex=0;

	changeSlide(currentIndex);

	dotSelected(currentIndex);

});


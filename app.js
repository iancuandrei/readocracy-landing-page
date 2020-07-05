const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".arrow-next");

let size = slides[0].clientWidth;

window.onresize = () => {
	size = slides[0].clientWidth;
};

let counter = 1;

// Next Slide Button

nextBtn.onclick = () => {
	if (counter < 5) {
		carousel.style.transition = "transform 0.5s ease-in-out";
		carousel.style.transform = "translateX(" + -size * counter + "px)";
		counter++;
	} else {
		counter = 0;
		carousel.style.transition = "transform 0.5s ease-in-out";
		carousel.style.transform = "translateX(" + -size * counter + "px)";
		counter++;
	}
};

// Next slide every 10 seconds

setInterval(() => {
	if (counter < 5) {
		carousel.style.transition = "transform 0.5s ease-in-out";
		carousel.style.transform = "translateX(" + -size * counter + "px)";
		counter++;
	} else {
		counter = 0;
		carousel.style.transition = "transform 0.5s ease-in-out";
		carousel.style.transform = "translateX(" + -size * counter + "px)";
		counter++;
	}
}, 10000);

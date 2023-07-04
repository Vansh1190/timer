// FlipCardAnim '\r\n'
const FlipCardAnim = (i, flipCard) => {
	const c = document.getElementById("flipCardSec").children;
	const topHalf = c[0];
	const bottom = c[1];
	const topFlip = document.createElement("div");
	const BottomFlip = document.createElement("div");

	topFlip.classList.add("top-flip");
	BottomFlip.classList.add("bottom-flip");
	if (i - 1 == -2) {
		i = 59;
	}

	topHalf.textContent = (i - 1 < 9) ? "0" + i : i;
	bottom.textContent = (i < 9) ? "0" + i : i;
	topFlip.textContent = (i - 1 < 9) ? "0" + i : i - 1;
	BottomFlip.textContent = (i < 9) ? "0" + i : i;
	topFlip.addEventListener("animationstart", () => {
		topHalf.textContent = (i - 1 < 9) ? "0" + i : i - 1;
	});
	topFlip.addEventListener("animationend", () => {
		topFlip.remove();
	});
	BottomFlip.addEventListener("animationend", () => {
		bottom.textContent = (i - 1 < 9) ? "0" + i : i - 1;
		BottomFlip.remove();
	});
	flipCard.appendChild(topFlip);
	flipCard.appendChild(BottomFlip);
	console.log(i);
};

// FlipCardAnim ends here  

if (localStorage.key(0) != "Date") {
	// console.log("HELLO")
	localStorage.setItem("Date", "Jul 18, 2023 00:00:00");
}

var LaunchDate = new Date(localStorage.getItem("Date")).getTime();

// document.getElementById("minute").style.animationPlayState = "paused"
// document.getElementById("hour").style.animationPlayState = "paused"
// document.getElementById("day").style.animationPlayState = "paused"

// FLipCARD ANim 
// const flipCard = document.getElementById("flipCardSec")


let SecCARD = (document.getElementById("flipCardSec"));
let MinCARD = (document.getElementById("flipCardMin"));
let HrCARD = (document.getElementById("flipCardHour"));
let DayCARD = (document.getElementById("flipCardDay"));














let loop = setInterval(() => {
	const date = new Date().getTime();
	let distance = LaunchDate - date;
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);


	if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
		// document.getElementById("second").style.animation = "none";
		clearInterval(loop);

		return;

	}


	// document.getElementById("second").style.animation = "ScaleAnim 0.5s ease infinite"
	// document.getElementById("second").style.animationFillMode="both"




	// setTimeout(() => {
	//     // document.getElementById("sec").classList.remove("animate__flipInX")
	//     // document.getElementById("min").classList.remove("animate__flipInX")
	//     // document.getElementById("hr").classList.remove("animate__flipInX")
	//     // document.getElementById("dayID").classList.remove("animate__flipInX")
	// }, 950)
	// document.getElementById("second").classList.remove("animate__flipInX")

	if (minutes != 0 && seconds == 59) {
        
		// document.getElementById("minute").style.animation = "ScaleAnim 1s ease"
		FlipCardAnim(minutes+1,MinCARD);
		// document.getElementById("min").classList.add("animate__flipInX")
		// FlipCardAnim()
		// clearInterval(loop)
	}
	if (hours != 0 && minutes == 59 && seconds == 59) {

		FlipCardAnim(hours+1,HrCARD);
		// clearInterval(loop)
	}
	if (days != 0 && hours == 59 && minutes == 59 && seconds == 59) {
		
		// document.getElementById("day").style.animation = "ScaleAnim 1s ease"
		// document.getElementById("dayID").classList.add("animate__flipInX")
		FlipCardAnim(days+1,DayCARD);
		// clearInterval(loop)
	}


	if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
		
		setTimeout(() => {
			document.getElementById("timer").style.display = "none";
			document.getElementById("first").style.display = "none";
		}, 100);
		document.getElementById("launced").style.display = "block";
		document.getElementById("second").innerHTML = "00";

	}

	(days < 10) ? days = "0" + days : null;
	(hours < 10) ? hours = "0" + hours  : null;
	(minutes < 10) ? minutes = "0" + minutes : null;
	// (seconds < 10) ? seconds = "0" +  seconds: null







	document.getElementById("secTop").innerHTML = seconds;
	document.getElementById("secBottom").innerHTML = seconds;
    
	FlipCardAnim(seconds, SecCARD);



	document.getElementById("minBottom").innerHTML = minutes;
	document.getElementById("minTop").innerHTML = minutes;
    
	document.getElementById("hourTop").innerHTML = hours;
	document.getElementById("hourBottom").innerHTML = hours;

	document.getElementById("dayTop").innerHTML = days;
	document.getElementById("dayBottom").innerHTML = days;



}, 1000);

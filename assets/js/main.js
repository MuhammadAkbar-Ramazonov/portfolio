/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		console.log(navMenu.classList);
		navMenu.classList.add("show-sidebar");
	});
} 
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-sidebar");
	});
}
/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
	tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);

		tabContent.forEach((tabContents) => {
			tabContents.classList.remove("skills__active");
		});

		target.classList.add("skills__active");

		tabs.forEach((tab) => {
			tab.classList.remove("skills__active");
		});

		tab.classList.add("skills__active");
	});
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
	selectors: {
		target: ".work__card",
	},
	animation: {
		duration: 300,
	},
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
	linkWork.forEach((element) => element.classList.remove("active-work"));
	this.classList.add("active-work");
}

linkWork.forEach((element) => element.addEventListener("click", activeWork));

function togglePortfolioPopup() {
	document.querySelector(".portfolio__popup").classList.toggle("open");
}

/*=============== SERVICES MODAL ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc() {
	let parent = this.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighteer);

function navHighlighteer() {
	let scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50,
			sectionId = current.getAttribute("id");
			navMenu.classList.remove("show-sidebar");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}

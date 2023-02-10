const menuClick = document.querySelector(".container-text_hidden");
const menuHidded = document.querySelector(".menu-hidded");
const textHidded = document.querySelector(".text-hidded");
const searchMenu = document.querySelector("#searchMenu");
const pill = document.querySelector(".search-pill");

const dateInp = document.querySelector("#date");
const toInp = document.querySelector("#from");
const fromInp = document.querySelector("#to");

const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".bg-menu");
const menuIcon = document.querySelector(".menu-mob_icon");
const menuClose = document.querySelector(".menu-close_icon");
const gradientMenu = document.querySelector(".gradient-menu");
const menuText = document.querySelector(".menu-mob_text");

// Animação hover

document.querySelectorAll(".image").forEach((e) => {
	e.addEventListener("mouseover", () => {
		e.classList.toggle("image-hover");
		e.style.animation = "fade 1s ease-in normal";
	});
});

document.querySelectorAll(".image").forEach((e) => {
	e.addEventListener("mouseout", () => {
		e.classList.toggle("image-hover");
		e.style.animation = "";
	});
});

// Abrir menu footer

menuClick.addEventListener("click", () => {
	menuHidded.classList.toggle("hide");
	menuHidded.style.animation = "menu .5s ease-in-out";
	setTimeout(() => {
		textHidded.classList.toggle("hide");
		textHidded.style.animation = "menuText 1s ease-in normal";
	}, 500);
});

// Validação form

document
	.querySelector(".btn-search_pill")
	.addEventListener("click", () => {
		if (
			fromInp.value.length == 0 ||
			toInp.value.length == 0 ||
			dateInp.value.length == 0
		) {
			alert("Erro, Verifique os dados e tente novamente.");
		}
	});

// Menu mobile

menuIcon.addEventListener("click", () => {
	menuBg.classList.toggle("on-menu");
	menuBg.style.animation = "fade .4s ease-in normal";
	menu.classList.toggle("on-menu");
	menuIcon.style.animation = "";
	menu.style.animation = "menuMob .5s ease-in normal";
	menuIcon.classList.toggle("off-menu");
	setTimeout(() => {
		menuClose.classList.toggle("on-menu");
		menuClose.style.animation = "menuIconClose .6s ease-in ";
		gradientMenu.classList.toggle("off-menu");
		menuText.classList.toggle("on-menu");
	}, 500);
});

menuClose.addEventListener("click", () => {
	menu.classList.toggle("on-menu");
	menuBg.classList.toggle("on-menu");
	menuClose.classList.toggle("on-menu");
	menuIcon.classList.remove("off-menu");
	menuIcon.style.animation = "menuText .5s ease-in normal";
	menu.style.animation = "menuMobClose .5s ease-in normal";
	gradientMenu.classList.toggle("off-menu");
	menuText.classList.toggle("on-menu");
});

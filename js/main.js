const btnDarkMode = document.querySelector(".dark-mode-btn");
//Включение ночного режима по кнопке 

btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active');
	document.body.classList.toggle('dark');
}

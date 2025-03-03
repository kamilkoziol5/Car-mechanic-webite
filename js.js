document.addEventListener("DOMContentLoaded", function () {
	const menu = document.querySelector(".menu-container")
	const hamburger = document.querySelector(".hamburger")
	const sidebar = document.querySelector(".sidebar")
	const close = document.querySelector(".close")

	// Dodanie klasy .scrolled do menu-container po przewinięciu strony
	window.addEventListener("scroll", function () {
		if (window.scrollY > 50) {
			menu.classList.add("scrolled")
		} else {
			menu.classList.remove("scrolled")
		}
	})

	// Otwieranie Menu - dodanie klasy .open do sidebar
	hamburger.addEventListener("click", function () {
		sidebar.classList.add("open")
	})

	// Zamknięcie Menu - usunięcie klasy .open z sidebar
	close.addEventListener("click", function () {
		sidebar.classList.remove("open")
	})

	// Zamknięcie Menu po kliknięciu poza nim
	document.addEventListener("click", function (event) {
		if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
			sidebar.classList.remove("open")
		}
	})
})

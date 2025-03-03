document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.querySelector(".hamburger")
	const sidebar = document.querySelector(".sidebar")
	const close = document.querySelector(".close")

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

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault()
		const targetId = this.getAttribute("href").substring(1)
		const targetElement = document.getElementById(targetId)

		if (targetElement) {
			const offset = 160 // Przesunięcie o 100px
			const targetPosition = targetElement.offsetTop - offset

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			})
		}
	})
})

document.addEventListener("DOMContentLoaded", function () {
	// Odczytaj zapisaną pozycję scrolla
	let scrollPosition = sessionStorage.getItem("scrollPosition")

	if (scrollPosition !== null) {
		setTimeout(() => {
			window.scrollTo(0, parseInt(scrollPosition, 10))
		}, 100) // Opóźnienie 100ms, aby przeglądarka zdążyła załadować stronę
	}
})

// Zapisuj pozycję scrolla na bieżąco
window.addEventListener("scroll", function () {
	sessionStorage.setItem("scrollPosition", window.scrollY)
})





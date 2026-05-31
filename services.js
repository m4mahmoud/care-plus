// Scroll reveal
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
	const trigger = window.innerHeight * 0.85;

	elements.forEach((el) => {
		const top = el.getBoundingClientRect().top;

		if (top < trigger) {
			el.classList.add("active");
		}
	});
});

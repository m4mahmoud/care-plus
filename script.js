/* =========================================================
                    MENU TOGGLE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = () => {
	navLinks.classList.toggle("active");
};

/* =========================================================
                    SCROLL REVEAL
========================================================= */

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
	hiddenElements.forEach((el) => {
		const elementTop = el.getBoundingClientRect().top;

		if (elementTop < window.innerHeight - 100) {
			el.classList.add("show");
		}
	});
});

/* =========================================================
                    ACTIVE NAVBAR
========================================================= */

window.addEventListener("scroll", () => {
	const nav = document.querySelector("nav");

	if (window.scrollY > 50) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
});

// connect form with whatsappNumber

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let message = document.getElementById("message").value;

	let whatsappNumber = "201107922778"; // حط رقمك هنا

	let text =
		`📌 رسالة جديدة من الموقع %0A%0A` +
		`👤 الاسم: ${name}%0A` +
		`📧 البريد: ${email}%0A` +
		`📱 الهاتف: ${phone}%0A%0A` +
		`💬 الرسالة:%0A${message}`;

	let url = `https://wa.me/${whatsappNumber}?text=${text}`;

	window.open(url, "_blank");
});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const counter = entry.target;
				const target = +counter.dataset.target;

				let count = 0;

				const update = () => {
					const increment = target / 100;

					if (count < target) {
						count += increment;
						counter.innerText = Math.ceil(count);
						requestAnimationFrame(update);
					} else {
						counter.innerText = target + "+";
					}
				};

				update();
				observer.unobserve(counter);
			}
		});
	},
	{
		threshold: 0.5,
	},
);

counters.forEach((counter) => {
	observer.observe(counter);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
	item.querySelector(".faq-question").addEventListener("click", () => {
		// قفل الباقي (Accordion واحد مفتوح)
		faqItems.forEach((el) => {
			if (el !== item) {
				el.classList.remove("active");
			}
		});

		// فتح / قفل الحالي
		item.classList.toggle("active");
	});
});

function changeMap(location) {
	const map = document.getElementById("mapFrame");

	map.src = `https://www.google.com/maps?q=${location}&output=embed`;

	// active class effect
	document.querySelectorAll(".location").forEach((el) => {
		el.classList.remove("active");
	});

	event.currentTarget.classList.add("active");
}

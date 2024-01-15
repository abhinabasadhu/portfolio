console.log("Its working");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "violet") {
    document.getElementById("theme-style").href = "violet.css";
  }

  localStorage.setItem("theme", mode);
}

document.addEventListener("DOMContentLoaded", function() {
	const menuLinks = document.querySelectorAll('.menu a');

	menuLinks.forEach(link => {
		link.addEventListener('click', scrollToSection);
	});

	function scrollToSection(e) {
		e.preventDefault();
		const targetId = e.target.getAttribute('href').substring(1);
		const targetSection = document.getElementById(targetId);
		window.scrollTo({
			top: targetSection.offsetTop,
			behavior: 'smooth'
		});
	}
});
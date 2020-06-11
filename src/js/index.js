import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

let isDark = false;

document.documentElement.style.setProperty("--sky", "#090809");

const sun = document.querySelector(".sun--js");

sun.addEventListener("click", () => {
	if (isDark == false) {
		console.log("it is bright day");
	} else {
		console.log("this night is dark as your soul");
	}
});

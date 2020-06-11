import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

let isDark = false;

const sun = document.querySelector(".sun--js");

function createContent(querySelectorContent, content) {
	const item = document.querySelector(querySelectorContent);
	item.innerHTML = content;
}

sun.addEventListener("click", () => {
	if (isDark == false) {
		console.log("the night is dark as the buttom of the coal mine");
		isDark = true;
		document.documentElement.style.setProperty("--sky", "#090809");
		document.documentElement.style.setProperty("--text-color", "#F1FFE7");
		document.documentElement.style.setProperty("--sun", "../assets/img/moon.png");
		createContent(".sun__text--js", "the night is dark");
	} else {
		console.log("just another bright day");
		isDark = false;
		document.documentElement.style.setProperty("--sky", "#1AC8ED");
		document.documentElement.style.setProperty("--text-color", "#090809");
		createContent(".sun__text--js", "such a lovely day");
	}
});

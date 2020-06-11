import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

let isDark = false;

const sun = document.querySelector(".sun--js");

sun.addEventListener("click", () => {
	if (isDark == false) {
		console.log("just another bright day");
		isDark = true;
		document.documentElement.style.setProperty("--sky", "#090809");
		// document.documentElement.style.setProperty(
		// 	"--sun",
		// 	"url('../assets/img/sun.png')"
		// );
	} else {
		console.log("the night is dark as buttom of the coal mine");
		isDark = false;
		document.documentElement.style.setProperty("--sky", "#1AC8ED");
	}
});

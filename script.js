var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setText() {
	css.textContent = 
		"linear-gradient(to right, "
		+ color1.value + "," +
		color2.value + ")"
}

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value + "," +
		color2.value + ")"
	setText();
}

function setRandom() {
  var randomString1 = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  var randomString2 = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  var completeString = "linear-gradient(to right, " + randomString1 + ", " + randomString2 + ")";
  body.style.background = completeString;
  css.textContent = completeString + ";";
  color1.value = randomString1;
  color2.value = randomString2;
};


setText();

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button.addEventListener("click", setRandom)



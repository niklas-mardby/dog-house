// skapa HTML element och lagra i addButton
const addButton = document.querySelector("button");

// skapa lyssnare på knappen, lyssna på musklick
addButton.addEventListener("click", (e) => {
	// stoppa formulärets defaulebeteende att ladda om sidan
	e.preventDefault();

	// skapa HTML element för textfältet
	const dogNameInput = document.querySelector("#dog-name");

	// hämta det värde som står i textfältet
	const dogName = dogNameInput.value;

	// kolla om textfältet var tomt eller inte
	if (dogName !== "") {
		// om textfältet INTE var tomt så skapa en div
		const newDogDiv = document.createElement("div");

		//lägg hundens namn från textfältet i diven
		newDogDiv.innerHTML = dogName;

		// lägg till div i section
		document.querySelector("section").appendChild(newDogDiv);
	}

	// töm textfältet
	dogNameInput.value = "";

	// sätt tillbaka fokus på textfältet så användaren kan skriva igen utan att behöva klicka
	dogNameInput.focus();
});

// alla hundraser i en array
const dogRaces = ["greyhound", "bulldog", "pitbull", "pug", "husky"];
const dogs = [];

const numberOfDogsSpan = document.querySelector("#number-of-dogs");

// fyll en dropdown med alla hundraser
// skapa HTML element för select-taggen (vår dropdown)
const dogRaceSelect = document.querySelector("#dog-race");

// loopa igenom arrayen med hundraser och ta varje hundras och lägg till som en ny option-tagg
for (const dogRace of dogRaces) {
	const newRaceOption = document.createElement("option");
	newRaceOption.innerHTML = dogRace;
	newRaceOption.value = dogRace;
	dogRaceSelect.appendChild(newRaceOption);
}

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
		newDogDiv.innerHTML = `${dogName} (${dogRaceSelect.value})`;
		dogs.push({ dogname: "namn", dograce: "rasen" });
		numberOfDogsSpan.innerHTML = dogs.length;

		// lägg till div i section
		document.querySelector("section").appendChild(newDogDiv);
	}

	// töm textfältet
	dogNameInput.value = "";

	// sätt tillbaka fokus på textfältet så användaren kan skriva igen utan att behöva klicka
	dogNameInput.focus();
});

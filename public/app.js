const addButton = document.querySelector("button");

addButton.addEventListener("click", (e) => {
	e.preventDefault();

	const dogNameInput = document.querySelector("#dog-name");
	const dogName = dogNameInput.value;
	dogNameInput.value = "";
	dogNameInput.focus();

	const newDogDiv = document.createElement("div");
	newDogDiv.innerHTML = dogName;

	document.querySelector("section").appendChild(newDogDiv);
});

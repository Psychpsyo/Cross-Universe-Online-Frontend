startingHandGenBtn.addEventListener("click", function() {
	startingHandOverlayBlocker.style.display = "block";
	startingHandGenerator.style.display = "block";
	generateStartingHand();
});

function closeStartingHandGenerator() {
	startingHandGenerator.style.display = "none";
	startingHandOverlayBlocker.style.display = "none";
}
startingHandOverlayBlocker.addEventListener("click", function() {
	closeStartingHandGenerator();
});

function generateStartingHand() {
	startingHandGeneratorCards.innerHTML = "";
	let cards = [...deckList];
	for (let i = 0; i < 5;i++) {
		let cardId = cards.splice(Math.floor(Math.random() * cards.length), 1);
		let img = document.createElement("img");
		img.src = linkFromCardId(cardId);
		startingHandGeneratorCards.appendChild(img);
	}
}

regenerateStartingHand.addEventListener("click", function() {
	generateStartingHand();
});
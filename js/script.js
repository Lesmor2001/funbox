function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

function choose_card(card_id) {
	card = document.getElementById(card_id);
	if (!(card.classList.contains('card_disabled'))) {
		if (card.classList.contains('card_selected')) {
			card.classList.remove("card_selected");
		}
		else {
			card.classList.add("card_selected");
		}
	}
}

const cards = document.querySelectorAll(".card");

cards.forEach(element => element.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.matches('.card')) {
		if (!(event.target.classList.contains('card_disabled'))) {
			if (event.target.classList.contains('card_selected')) {
				event.target.classList.remove("card_selected");
			}
			else {
				event.target.classList.add("card_selected");
			}
		}
	}
}, false));
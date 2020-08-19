let card = document.querySelector("div.card");

function changeCard(event) {
  event.preventDefault();
  card.innerHTML = `<img src="src/0-fool.jpg" alt="The Fool" class="cardImg">`;
  card.classList.remove("default-styling");
}

card.addEventListener("click", changeCard);

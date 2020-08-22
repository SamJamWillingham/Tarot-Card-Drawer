let card = document.querySelector("div.card");
let cardName = document.querySelector("h3.name");
let moreInfo = document.querySelector("p.about");

//change card at random
function changeCard() {
  let index = getRandomNumber(0, deck.length - 1);
  card.innerHTML = deck[index].cardFile;
  cardName.innerHTML = deck[index].name;
  moreInfo.innerHTML = deck[index].about;

  card.classList.remove("default-styling");
  card.classList.add("newCard");
}

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

card.addEventListener("click", changeCard);

//Log
let logBtn = document.querySelector("button");
let catalog = null;

function logNewCard(event) {
  event.preventDefault();
  let cardNameInput = document.querySelector(".form-control");
  let emojiInput = document.querySelector("form-check-inline");
  let catalog = document.querySelector(".logCatalog");

  catalog.innerHTML = `<div class=logStyle><p>${cardNameInput.value} ${emojiInput.value}</p></div>`;
}
logBtn.addEventListener("click", logNewCard);

const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

let currentActiveCard = 0;
const cardsEl = [];
let cards = JSON.parse(localStorage.getItem("cards")) || [];

function createCards() {
  cards.forEach((cardData, index) => createCard(cardData, index));
  updateCurrentText();
}
function createCard(cardData, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (index == 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
        <div class="inner-card">    
            <div class="inner-card-front">
                <p>${cardData.question}</p>
            </div>
            <div class="inner-card-back">
                <p>${cardData.answer}</p>
            </div>
        </div>
    `;
  card.addEventListener("click", () => {
    card.classList.toggle("show-answer");
  });
  cardsEl.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}
// createCards();
nextBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card left";
  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }
  cardsEl[currentActiveCard].className = "card active";
  updateCurrentText();
});
prevBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card right";
  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }
  cardsEl[currentActiveCard].className = "card active";
  updateCurrentText();
});
addCardBtn.addEventListener("click", () => {
  const question = questionEl.value;
  const answer = answerEl.value;
  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };
    createCard(newCard);
    addContainer.classList.remove("show");
    cards.push(newCard);
    setCardsData(cards);
    questionEl.value = "";
    answerEl.value = "";
  }
});
showBtn.addEventListener("click", () => {
  addContainer.classList.add("show");
});
hideBtn.addEventListener("click", () => {
  addContainer.classList.remove("show");
});
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardsContainer.innerHTML = "";
  window.location.reload();
});
function setCardsData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
}
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
  if (cardsEl.length === 0) {
    currentEl.innerText = "no cards available please add a card";
  }
}
// Initial call to set the current text
updateCurrentText();

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toogle("bookmark--active");
});

const cardAnswer = document.querySelector('[data-js="card-answer"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card-answer-button"]'
);

cardAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer");
});

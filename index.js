//TASK 1 Toggle functionality

const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const cardAnswer = document.querySelector('[data-js="card-answer"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card-answer-button"]'
);

cardAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});

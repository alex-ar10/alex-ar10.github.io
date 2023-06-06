const questionsForm = document.querySelector('[data-js="questionsForm"]');
const main = document.querySelector('[data-js="main"]');

questionsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const newCard = document.createElement("article");
  newCard.classList.add("form-card");
  main.append(newCard);

  const newQuestion = document.createElement("p");
  newQuestion.textContent = `Your Question: ${data.yourQuestion}`;
  newCard.append(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.textContent = `Your Answer: ${data.yourAnswer}`;
  newCard.append(newAnswer);

  const newTag = document.createElement("p");
  newTag.textContent = `Your Tags: ${data.yourTags}`;
  newCard.append(newTag);
});

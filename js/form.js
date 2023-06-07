const questionsForm = document.querySelector('[data-js="questionsForm"]');
const main = document.querySelector('[data-js="main"]');

const yourQuestionInput = document.querySelector('[data-js="yourQuestion"]');
const yourAnswerInput = document.querySelector('[data-js="yourAnswer"]');
const yourTagsInput = document.querySelector('[data-js="yourTags"]');

const questionCharLeft = document.querySelector('[data-js="questionCharLeft"]');
const answerCharLeft = document.querySelector('[data-js="answerCharLeft"]');
const tagsCharLeft = document.querySelector('[data-js="tagsCharLeft"]');

questionsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const newCard = document.createElement("article");
  newCard.classList.add("new-card");
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

yourQuestionInput.addEventListener("input", () => {
  let questionLength = 150 - parseInt(yourQuestionInput.value.length);
  if (questionLength > 1) {
    console.log(questionLength);
    questionCharLeft.textContent = `${questionLength} characters left`;
  } else if (questionLength < 2 && questionLength > 0) {
    console.log(questionLength);
    questionCharLeft.textContent = `${questionLength} character left`;
  } else if (questionLength < 1) {
    console.log(questionLength);
    questionCharLeft.textContent = `${questionLength} characters left`;
  } else {
    return;
  }
});

yourAnswerInput.addEventListener("input", () => {
  let answerLength = 150 - parseInt(yourAnswerInput.value.length);
  if (answerLength > 1) {
    console.log(answerLength);
    answerCharLeft.textContent = `${answerLength} characters left`;
  } else if (answerLength < 2 && answerLength > 0) {
    console.log(answerLength);
    answerCharLeft.textContent = `${answerLength} character left`;
  } else if (answerLength < 1) {
    console.log(answerLength);
    answerCharLeft.textContent = `${answerLength} characters left`;
  } else {
    return;
  }
});

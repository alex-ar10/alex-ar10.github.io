const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkImage1 = document.querySelector('[data-js="bookmark-img1"]');
const bookmarkImage2 = document.querySelector('[data-js="bookmark-img2"]');

const quizButton = document.querySelector('[data-js="quiz-button"]');
const answerState = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkImage1.style.display === "none") {
    bookmarkImage1.style.display = "inline";
    bookmarkImage2.style.display = "none";
  } else {
    bookmarkImage1.style.display = "none";
    bookmarkImage2.style.display = "inline";
  }
});

quizButton.addEventListener("click", () => {
  if (answerState.classList.contains("hidden")) {
    quizButton.textContent = "Hide answer";
    answerState.classList.remove("hidden");
  } else {
    quizButton.textContent = "Show answer";
    answerState.classList.add("hidden");
  }
});

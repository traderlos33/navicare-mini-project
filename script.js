const startBtn = document.getElementById("startBtn");
const closeBtn = document.getElementById("closeBtn");
const scenario = document.getElementById("scenario");
const choices = document.querySelectorAll(".choice");
const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", () => {
  scenario.classList.remove("hidden");
  feedback.classList.add("hidden");
  scenario.scrollIntoView({ behavior: "smooth", block: "start" });
});

closeBtn.addEventListener("click", () => {
  scenario.classList.add("hidden");
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const score = Number(choice.dataset.score);

    if (score === 3) {
      feedbackTitle.textContent = "Strong response";
      feedbackText.textContent =
        "Great choice. You showed empathy and asked a question that helps uncover the real barrier.";
    } else if (score === 2) {
      feedbackTitle.textContent = "Helpful, but incomplete";
      feedbackText.textContent =
        "Offering to reschedule is useful, but it solves only the immediate task. First explore why appointments have been difficult so the support plan addresses the real barrier.";
    } else {
      feedbackTitle.textContent = "Try a more patient-centered approach";
      feedbackText.textContent =
        "This response may sound corrective before you understand the patient's situation. Start with empathy and discovery, then move into problem-solving.";
    }

    feedback.classList.remove("hidden");
    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

resetBtn.addEventListener("click", () => {
  feedback.classList.add("hidden");
  document.querySelector(".choices").scrollIntoView({ behavior: "smooth" });
});

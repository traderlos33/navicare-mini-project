const startBtn = document.getElementById("startBtn");
const closeBtn = document.getElementById("closeBtn");
const devlinSection = document.getElementById("devlinSection");

startBtn.addEventListener("click", () => {
  devlinSection.classList.remove("hidden");

  devlinSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

closeBtn.addEventListener("click", () => {
  devlinSection.classList.add("hidden");
});

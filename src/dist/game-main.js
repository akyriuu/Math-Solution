//this first section's made to control the game
import { generateQuestion, formatQuestion } from "./game.js";
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitEl = document.getElementById("submit");
const ops = ["+", "-", "*"];
let current = generateQuestion(ops[Math.floor(Math.random() * ops.length)]);
let errorCount = 0; //just to keep track, but dont give it much thought
function renderQuestion() {
    questionEl.textContent = formatQuestion(current);
    answerEl.value = "";
    answerEl.focus();
}
function nextQuestion() {
    const op = ops[Math.floor(Math.random() * ops.length)];
    current = generateQuestion(op);
    renderQuestion();
}
function checkAnswer() {
    const typed = parseInt(answerEl.value, 10);
    if (isNaN(typed))
        return; //nothing typed
    if (typed === current.answer) {
        //if the answer is correct it will automatically go next, so it can be fast
        nextQuestion();
    }
    else {
        //if the answer is wrong, it will stay the same, only input will be cleared.
        errorCount++;
        answerEl.value = "";
        answerEl.classList.add("shake"); //visual feedback
        answerEl.addEventListener("animationend", () => {
            answerEl.classList.remove("shake");
        }, { once: true });
    }
}
//trying to make it so key "Enter" count as a "ready" button to count the answer.
answerEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        checkAnswer();
});
submitEl.addEventListener("click", checkAnswer);
renderQuestion();
//# sourceMappingURL=game-main.js.map
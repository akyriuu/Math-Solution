function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function generateQuestion(op) {
    const a = randomInt(1, 12);
    const b = randomInt(1, 12);
    const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;
    return { a, b, op, answer };
}
export function formatQuestion(q) {
    return `${q.a} ${q.op} ${q.b} = ?`;
}
//control the "game"
//# sourceMappingURL=game.js.map
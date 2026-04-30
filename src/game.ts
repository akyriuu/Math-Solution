export type Operation = "+" | "-" | "*" | "/";

export interface Question {
  a: number;
  b: number;
  op: Operation;
  answer: number;
}
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateQuestion(op: Operation): Question {
  const a = randomInt(1, 12);
  const b = randomInt(1, 12);

  const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;

  return { a, b, op, answer };
}

export function formatQuestion(q: Question): string {
  return `${q.a} ${q.op} ${q.b} = ?`;
}

//control the "game"

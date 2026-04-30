export type Operation = "+" | "-" | "*" | "/";
export interface Question {
    a: number;
    b: number;
    op: Operation;
    answer: number;
}
export declare function generateQuestion(op: Operation): Question;
export declare function formatQuestion(q: Question): string;
//# sourceMappingURL=game.d.ts.map
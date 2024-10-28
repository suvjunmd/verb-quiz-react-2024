export type StatusProps = {
    remainingCount: number;
    doneCount: number;
    correctCount: number;
};

export const Status = ({
    remainingCount,
    doneCount,
    correctCount,
}: StatusProps) => (
    <div>
        <hr />
        Remaining: {remainingCount}, Done: {doneCount}, Correct: {correctCount},
        Wrong: {doneCount - correctCount}
        <hr />
    </div>
);

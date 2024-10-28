import './quiz.css';
import { QuizResult, Verb } from '../constants';
import { useState } from 'react';
import { ResultTable } from './result-table';
import { Status } from './status';
import { Input } from './input';

export type QuizProps = {
    verbs: Verb[];
};

export function Quiz({ verbs }: QuizProps) {
    const [results, setResults] = useState<QuizResult[]>([]);

    const correctCount = results.filter(
        (item) => item.input_b === item.verb.b && item.input_c === item.verb.c,
    ).length;

    const isCompleted = results.length === verbs.length;

    const handleSubmit = (result: QuizResult) => {
        setResults((prev) => [result, ...prev]);
    };

    return (
        <div className='wrapper'>
            {isCompleted ? (
                <div>COMPLETED</div>
            ) : (
                <Input verb={verbs[results.length]} onSubmit={handleSubmit} />
            )}

            <Status
                remainingCount={verbs.length - results.length}
                doneCount={results.length}
                correctCount={correctCount}
            />

            <ResultTable results={results} />
        </div>
    );
}

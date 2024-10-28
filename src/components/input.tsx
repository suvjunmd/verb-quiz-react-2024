import './input.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { QuizResult, Verb } from '../constants';

export type InputProps = {
    verb: Verb;
    onSubmit: (result: QuizResult) => void;
};

export function Input({ verb, onSubmit }: InputProps) {
    const [text, setText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const answers = text.split(',');

        const b =
            answers.length >= 1 && answers[0] !== ''
                ? answers[0].trim()
                : '???';

        const c = answers.length >= 2 ? answers[1].trim() : '???';

        onSubmit({
            verb,
            input_b: b,
            input_c: c,
        });

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className='input-wrapper'>
            <span>{verb.a}</span>

            <input
                type='text'
                autoFocus
                placeholder='simple past, past participle'
                value={text}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    );
}

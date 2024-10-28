import { QuizResult } from '../constants';

export type ResultTableProps = {
    results: QuizResult[];
};

export function ResultTable({ results }: ResultTableProps) {
    const errorStyle = { backgroundColor: 'HotPink' };
    const successStyle = { backgroundColor: 'Lime' };

    return (
        <table>
            <tbody>
                {results.map((item, index) => (
                    <tr key={index}>
                        <td>{item.verb.a}</td>

                        <td
                            style={
                                item.input_b === item.verb.b
                                    ? successStyle
                                    : errorStyle
                            }
                        >
                            {item.input_b}
                        </td>

                        <td>{item.verb.b}</td>

                        <td
                            style={
                                item.input_c === item.verb.c
                                    ? successStyle
                                    : errorStyle
                            }
                        >
                            {item.input_c}
                        </td>

                        <td>{item.verb.c}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

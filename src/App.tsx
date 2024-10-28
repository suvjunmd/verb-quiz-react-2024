import { Quiz } from './components/quiz';
import { VERBS } from './constants';
import { shuffleArray } from './helpers';

function App() {
    const shuffledVerbs = shuffleArray(VERBS);

    return <Quiz verbs={shuffledVerbs} />;
}

export default App;

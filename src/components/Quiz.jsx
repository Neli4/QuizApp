import {useState, useCallback} from 'react';
import QUESTIONS from '../question';
import Question from './Question';
import Summary from './Summary';


export default function Quiz (){
    const [userAnswers, setUserAnswers] = useState([])

    
    const activeQuestion = userAnswers.length;
    const quizIsComplete = activeQuestion === QUESTIONS.length;

    const handleSelectAnswer = useCallback (function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }, 
    []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers} />
    }

    return(
        <div id="quiz">
            <Question
            key={activeQuestion}
            index={activeQuestion}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}    
            />
        </div>
    );    
}
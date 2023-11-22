import { useState } from 'react';

import QuestionTimer from "./QuestionTimer";
import Answers from "./answers";
import QUESTION from "../question"

export default function Question({
    index,
    onSelectAnswer, 
    onSkipAnswer}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrcet: null
    });
   

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }
    if(answer.isCorrcet !== null){
        timer = 2000;

    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrcet: null
        })

        setTimeout(() => {
            setAnswer({
            selectedAnswer: answer,
            isCorrcet: QUESTION[index].answers[0] === answer
        })

        setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);

    }

    let answerState = '';
    
    if(answer.selectedAnswer && answer.isCorrcet !== null){
        answerState = answer.isCorrcet ? 'correct' : 'wrong';
    }else if(answer.selectedAnswer){
        answerState = "answered";
    }
    
    
    return(
        <div id="quiz">
            <div id="question">
            <QuestionTimer
            key={timer}
            timeout={10000} 
            onTimeout={answer.onSelectAnswer === '' ? onSkipAnswer : null}
            mode={answerState}
            />
            <h2>{QUESTION[index].text}</h2>;
           <Answers
           answers={QUESTION[index].answers} 
           selectedAnswer={answer.selectedAnswer}
           answerState={answerState}
           onSelect={handleSelectAnswer}
           />
        </div>
        </div>
    );    

    
}
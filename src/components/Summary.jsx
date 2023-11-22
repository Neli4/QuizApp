import quizComplete from '../assets/quizComplete.png';
import QUESTIONS from '../question';

export default function Summary({userAnswers}){
    const skippedAnswers = userAnswers.filter(answers => answers === null);
    const corretAnswers = userAnswers.filter((answers, index) => answers === QUESTIONS[index].answers[0]);

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    
    const correctAnswersShare = Math.round((corretAnswers.length / userAnswers.length) * 100);

    const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;
    return(
        <div id="summary">
        <img src={quizComplete} alt="trophy" />
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedAnswersShare}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{correctAnswersShare}%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">{wrongAnswerShare}%</span>
                <span className="text">answered incorrectly</span>
            </p>
        </div>
        <ol>
        {userAnswers.map((answer, index) => {
            let cssClass = 'user-answer';

            if(answer === null){
                cssClass += ' skipped';            
            }else if(answer === QUESTIONS[index].answers[0]){
                cssClass += ' correct';
            }else {
                cssClass += ' wrong';
            }
            return(
                <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'skipped'}</p>
            </li>
            );
        })}
            
        </ol>
        </div>
    );
}
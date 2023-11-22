import logoImg from '../assets/QuizLogo.png';

export default function Header(){
    return (
    <header>
        <img src={logoImg} alt="Quiz logo"/>
        <h1>NeliQuiz</h1>
    </header>
    );
}
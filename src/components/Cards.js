import styled from "styled-components";
import setaPlay from "../assets/seta_play.png"

export default function Cards(){
    return (
        <>
        <CardContainer>
            <QuestionCard>
                <p>Pergunta1</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta2</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta3</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta4</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta5</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta6</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta7</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta8</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
            <QuestionCard>
                <p>Pergunta1</p>
                <img src={setaPlay} alt="Play"/> 
            </QuestionCard>
        </CardContainer>
        </>
    );
}

const CardContainer = styled.ul`
    width: 300px;
    height: calc(100vh - 210px);
    margin: 0 auto;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const QuestionCard = styled.li`
    width: 300px;
    height: 65px;
    margin: 25px 0;
    padding: 0 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;


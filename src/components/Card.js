import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import forgotIcon from "../assets/icone_erro.png";
import almostIcon from "../assets/icone_quase.png";
import zapIcon from "../assets/icone_certo.png";
import { useState } from "react";

export default function Card({index,question,answer,incrementFinished,queuePushIcon}){
    const [layer,setLayer] = useState(0);
    const [answerd,setAnswerd] = useState(false);
    const [status,setStatus] = useState(setaPlay);

    function selectForgot(){
        setAnswerd(true);
        setStatus(forgotIcon);
        setLayer(4);
        incrementFinished();
        queuePushIcon(0);
    }

    function selectAlmost(){
        setAnswerd(true);
        setStatus(almostIcon);
        setLayer(4);
        incrementFinished();
        queuePushIcon(1);
    }

    function selectZap(){
        setAnswerd(true);
        setStatus(zapIcon);
        setLayer(4);
        incrementFinished();
        queuePushIcon(2);
    }
    
    return(
        <QuestionCard data-test="flashcard">
                <Face layer = {layer} status = {status}>
                    <p data-test="flashcard-text">Pergunta{index+1}</p>
                    <img
                        data-test="play-btn" 
                        src={status} 
                        alt="Play" 
                        onClick={() => {
                            if(!answerd)
                                setLayer(1);
                            }
                        }
                    />
                </Face>
                <Question layer = {layer}>
                    <p data-test="flashcard-text" >{question}</p>
                    <img data-test="turn-btn" src={setaVirar} alt="Virar" onClick={() => setLayer(2)}/>
                </Question>
                <Answer layer = {layer}>
                    <p data-test="flashcard-text">{answer}</p>
                    <Buttons>
                        <Forgot data-test="no-btn" onClick = {selectForgot}>Não Lembrei</Forgot>
                        <Almost data-test="partial-btn" onClick = {selectAlmost}>Quase não lembrei</Almost>
                        <Zap data-test="zap-btn" onClick = {selectZap}>Zap!</Zap>
                    </Buttons>
                </Answer>
                <Finished layer= {layer} status = {status}>
                    <p data-test="flashcard-text">Pergunta{index+1}</p>
                    <ForgotIcon data-test="no-icon" src = {forgotIcon} status={status}/>
                    <AlmostIcon data-test="partial-icon" src = {almostIcon} status={status}/>
                    <ZapIcon data-test="zap-icon" src = {zapIcon} status={status}/>
                </Finished>
        </QuestionCard>
    );
}

const QuestionCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        font-family: 'Recursive', sans-serif;
    }
`;

const Face = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin: 12px 0;
    padding: 0 15px;
    border-radius: 5px;
    display: ${(props) => props.layer === 0 ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;

const Question = styled.div`
    min-width: 300px;
    height: 131px;
    margin: 12px 0;
    padding: 10px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    display: ${(props) => props.layer === 1 ? "initial" : "none"};
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img{
        width: 30px;
        height: 20px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
`;

const Answer = styled.div`
    width: 300px;
    min-height: 131px;
    margin: 12px 0;
    padding: 10px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${(props) => props.layer === 2 ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
        color: #333333;
    }
`;

const Buttons = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
    button{
        width: 86px;
        height: 38px;
        border-radius: 5px;
        border: none;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
    }
`;

const Forgot = styled.button`
    background: #FF3030;
`;

const Almost = styled.button`
    background: #FF922E;
`;

const Zap = styled.button`
    background: #2FBE34
`;

const Finished = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin: 12px 0;
    padding: 0 15px;
    border-radius: 5px;
    display: ${(props) => props.layer === 4 ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => {
            if(props.status === zapIcon)
                return "#2FBE34"//green
            if(props.status === almostIcon)
                return "#FF922E"//orange
            if(props.status === forgotIcon)
                return "#FF3030"//red
        }};
        text-decoration: ${(props) => props.status !== setaPlay ? "line-through" : "none"};
        text-decoration-color: ${(props) => {
            if(props.status === zapIcon)
                return "#2FBE34"//green
            if(props.status === almostIcon)
                return "#FF922E"//orange
            if(props.status === forgotIcon)
                return "#FF3030"//red
        }};
    }
`;

const AlmostIcon = styled.img`
    display: ${(props) => props.status === almostIcon ? "initial": "none"};
`;

const ForgotIcon = styled.img`
    display: ${(props) => props.status === forgotIcon ? "initial": "none"};
`;

const ZapIcon = styled.img`
    display: ${(props) => props.status === zapIcon ? "initial": "none"};
`;

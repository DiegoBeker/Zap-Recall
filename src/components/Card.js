import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import forgotIcon from "../assets/icone_erro.png";
import almostIcon from "../assets/icone_quase.png";
import zapIcon from "../assets/icone_certo.png";
import { useState } from "react";

export default function Card({index,question,answer}){
    const [layer,setLayer] = useState(0);
    const [answerd,setAnswerd] = useState(false);
    const [status,setStatus] = useState(setaPlay);

    function selectForgot(){
        setAnswerd(true);
        setStatus(forgotIcon);
        setLayer(0);
    }

    function selectAlmost(){
        setAnswerd(true);
        setStatus(almostIcon);
        setLayer(0);
    }

    function selectZap(){
        setAnswerd(true);
        setStatus(zapIcon);
        setLayer(0);
    }
    
    return(
        <QuestionCard>
                <Face layer = {layer} status = {status}>
                    <p>Pergunta{index+1}</p>
                    <img 
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
                    <p>{question}</p>
                    <img src={setaVirar} alt="Virar" onClick={() => setLayer(2)}/>
                </Question>
                <Answer layer = {layer}>
                    <p>{answer}</p>
                    <Buttons>
                        <Forgot onClick = {selectForgot}>Não Lembrei</Forgot>
                        <Almost onClick = {selectAlmost}>Quase não lembrei</Almost>
                        <Zap onClick = {selectZap}>Zap!</Zap>
                    </Buttons>
                </Answer>
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
    margin: 25px 0;
    padding: 0 15px;
    border-radius: 5px;
    display: ${(props) => props.layer === 0 ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => {
            if(props.status == zapIcon)
                return "green"
            if(props.status == almostIcon)
                return "orange"
            if(props.status == forgotIcon)
                return "red"
            if(props.status == setaPlay)
                return "#333333"
            }
        }};
        text-decoration: ${(props) => props.status != setaPlay ? "line-through" : "none"};
        text-decoration-color: ${(props) => {
            if(props.status == zapIcon)
                return "green"
            if(props.status == almostIcon)
                return "orange"
            if(props.status == forgotIcon)
                return "red"
        }};
`;

const Question = styled.div`
    min-width: 300px;
    height: 131px;
    margin: 25px 0;
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
    margin: 25px 0;
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
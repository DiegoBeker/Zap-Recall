import styled from "styled-components"
import cards from "../mock"
import party from "../assets/party.png"
import sad from "../assets/sad.png"

export default function Footer({finished,answerQueue,wrong,end}){
    return(
        <>
        <Contador data-test="footer">
            <Message end={end} data-test="finish-text">
                <div>
                    <img src={wrong ? sad : party} alt=""/>
                    <p><span>{wrong ? "Putz..." : "Parabéns!"}!</span></p>
                </div>
                <p>{wrong ? "Ainda faltam alguns...Mas não desanime!" : "Você não esqueceu de nenhum flashcard!"}</p>
            </Message>
            <p>{finished}/{cards.length} CONCLUÍDOS</p>
            <Icons>
                {answerQueue.map((a,index) => (<img data-test={a.data} key={index} src={a.icon} alt=""/>))}
            </Icons>
        </Contador>
        </>
    )
}

const Contador = styled.footer`
    width: 100%;
    min-height: 70px;
    position: fixed;
    bottom: 0;
    right: 0;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin: 5px 0;
    }
`;

const Icons = styled.div`
    img{
        margin: 0 2px;
    }
`;

const Message = styled.div`
    width: 222px;
    display: ${(props) => props.end ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    text-align: center;
    div{
        display: flex;
        margin: 15px 0;
    }
    img{
        width: 23px;
        height: 23px;
        margin-right: 12px;
    }
    span{
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
`;
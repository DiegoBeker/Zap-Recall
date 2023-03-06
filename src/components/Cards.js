import styled from "styled-components";
import Card from "./Card";
import cards from "../mock"

export default function Cards({incrementFinished,queuePushIcon}){
    
    return (
        <>
        <CardContainer>
            {cards.map((c,index) => (
                <Card 
                    key = {index} 
                    index = {index} 
                    question = {c.question} 
                    answer = {c.answer} 
                    incrementFinished={incrementFinished}
                    queuePushIcon = {queuePushIcon}
                />))
            }
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



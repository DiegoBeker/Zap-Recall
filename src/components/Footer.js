import styled from "styled-components"
import cards from "../mock"

export default function Footer({finished}){
    return(
        <>
        <Contador>
            <p data-test="footer">{finished}/{cards.length} CONCLUÍDOS</p>
        </Contador>
        </>
    )
}

const Contador = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    right: 0;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`
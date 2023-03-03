import { useState } from "react";
import styled from "styled-components"
import logo from "./assets/logo.png"
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import GlobalStyle from "./globalStyles";


export default function App() {
    const [finished,setFinished] = useState(0);

    function incrementFinished(){
        setFinished(finished+1);
    }

    return (
        <>
        <GlobalStyle/>
        <Container>
            <Header> 
                <img src={logo} alt="Logo"/>
                <h1>ZapRecall</h1>
            </Header>
            <Cards incrementFinished = {incrementFinished}/>
            <Footer finished = {finished}/>
        </Container>
        </>
    )
}

const Container = styled.div`
	width: 100%;
	height: 100%;
    padding: 40px;
	background: #FB6B6B;
`;

const Header = styled.header`
    width: 256px;
    margin: 0 auto;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    h1{
        width: 204px;
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    }
    img{
        width: 52px;
        height: 60px;
    }
`;
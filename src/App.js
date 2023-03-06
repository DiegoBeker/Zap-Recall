import { useState } from "react";
import styled from "styled-components"
import logo from "./assets/logo.png"
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import GlobalStyle from "./globalStyles";


export default function App() {
    const [finished,setFinished] = useState(0);
    const [initied,setInitied] = useState(false);

    function incrementFinished(){
        setFinished(finished+1);
    }

    return (
        <>
        <GlobalStyle/>
        <WelcomePage initied = {initied}>
            <img src={logo} alt="Logo"/>
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={() => setInitied(true)}>Iniciar Recall!</button>
        </WelcomePage>
        <AppContainer initied = {initied}>
            <Header> 
                <img src={logo} alt="Logo"/>
                <h1>ZapRecall</h1>
            </Header>
            <Cards incrementFinished = {incrementFinished}/>
            <Footer finished = {finished}/>
        </AppContainer>
        </>
    )
}

const AppContainer = styled.div`
    display: ${(props) => props.initied ? "flex" : "none"};
    flex-direction: column;
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
    }
    img{
        width: 52px;
        height: 60px;
    }
`;

const WelcomePage = styled.div`
    height: 100vh;
    display: ${(props) => props.initied ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: #FB6B6B;
    img{
        width: 136px;
        height: 161px;
        margin: 13px;
    }
    h1{
        width: 204px;
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color: #FFFFFF;
    }
    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin: 45px 0;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
    }
`;
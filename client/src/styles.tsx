import styled, { createGlobalStyle } from "styled-components"

interface Props {
    transition?: string;
    displayLogin?: string;
    displaySignup?: string;
}

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0; 
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        --primary-color: #005bb5;
    }
    body{
        background-color: #f0f0f0;
    }
`;

export const Card = styled.div`
    position: absolute;
    left: 10vw;
    top: 7vh;
    width: 80vw;
    height: 86vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    
    border-radius: 20px;
    box-shadow: 2px 2px 15px #b8b8b8;

    @media (max-width: 800px) {
        justify-content: center;
    }

    @media (max-width: 400px) {
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        border-radius: 0;
        box-shadow: none;
    }
`;

export const CardTransitor = styled.div<Props>`
    position: absolute;
    left: 10vw;
    top: 7vh;
    height: 86vh;
    width: 40vw;
    z-index: 2;
    background: rgb(0,128,255);
    background: linear-gradient(267deg, rgba(0,128,255,1) 0%, rgba(0,91,181,1) 100%);
    background-color: var(--primary-color);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    animation-name: ${props => props.transition};
    animation-duration: .8s;
    animation-fill-mode: forwards;

    @media (max-width: 800px) {
        display: none;
    }

    @keyframes CardTransitionSignup {
        from{
            margin-left: 0;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
        to{
            margin-left: 40vw;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 20px;
            border-top-right-radius: 20px;
        }
    }

    @keyframes CardTransitionLogin {
        from{
            margin-left: 40vw;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 20px;
            border-top-right-radius: 20px;
        }
        to{
            margin-left: 0;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
`;

export const Login = styled.div<Props>`
    display: flex;
    width: 50%;
    order: 2;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    h6{
        font-size: 13px;
    }

    h6 span{
        color: var(--primary-color);
        cursor: pointer;
        font-weight: bolder;
    }

    @media (max-width: 800px) {
        display: ${props => props.displayLogin};
        width: 100%;
    }
`;

export const Signup = styled.div<Props>`
    display: flex;
    width: 50%;
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h6{
        font-size: 13px;
    }

    h6 span{
        color: var(--primary-color);
        cursor: pointer;
        font-weight: bolder;
    }

    @media (max-width: 800px) {
        display: ${props => props.displaySignup};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    h1{
        margin-bottom: 1.5rem;
        text-align: center;
    }

    input{
        border-radius: 10px;
        border: none;
        padding: 1rem 2rem;
        background-color: #f1f1f1;
        margin-bottom: 1rem;
        width: 17rem;
    }

    button{
        cursor: pointer;
        width: 17rem;
        height: 3rem;
        border-radius: 10px;
        border: none;
        color: white;
        background: rgb(0,128,255);
        background: linear-gradient(267deg, rgba(0,128,255,1) 0%, rgba(0,91,181,1) 100%);
    }

    a{
        text-decoration: none;
        text-align: right;
        font-weight: bold;
        color: #9b9b9b;
        font-size: 12px;
        margin-bottom: 20px;
    }

`;

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

export const BtnTask = styled.button`
    cursor: pointer;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    background: rgb(0,128,255);
    background: linear-gradient(267deg, rgba(0,128,255,1) 0%, rgba(0,91,181,1) 100%);
    color: white;
    padding: 1rem 3rem;
    border-radius: 5px;
    border: none;
    box-shadow: 2px 2px 15px #b8b8b8;
`;

export const WorkSpace = styled.main`
    position: relative;
    max-width: calc(100vw - 8rem);
    margin-left: 4rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;

export const TaskArea = styled.section`
    max-width: calc(100vw - 10rem);
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const TaskToDo = styled.div`
    cursor: pointer;
    display: flex;
    width: 10rem;
    height: 10rem;
    box-shadow: 1px 1px 7px #b8b8b8;
    background-color: #fabfb7;
`;

export const TaskInProgress = styled.div`
    cursor: pointer;
    display: flex;
    width: 10rem;
    height: 10rem;
    box-shadow: 1px 1px 7px #b8b8b8;
    background-color: #fdf9c4;
`;

export const TaskDone = styled.div`
    cursor: pointer;
    display: flex;
    width: 10rem;
    height: 10rem;
    box-shadow: 1px 1px 7px #b8b8b8;
    background-color: #b2e2f2;
`;

export const TaskDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: black;
    margin: 1rem;

    h1{
        text-align: center;
        font-weight: 700;
        font-size: 16px;
    }
    h2{
        font-weight: 100;
        font-size: 12px;
    }
    p{
        text-align: left;
        font-size: 12px;
    }
`;

export const FilterBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 4rem;
    height: 100vh;
    background: rgb(0,128,255);
    background: linear-gradient(267deg, rgba(0,128,255,1) 0%, rgba(0,91,181,1) 100%);
    box-shadow: 2px 2px 15px #b8b8b8;
`;

export const FundoForm = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: .5;
    z-index: 2;
`;

export const TaskForm = styled.form`
    position: fixed;
    width: 50vw;
    height: 80vh;
    left: 25vw;
    top: 10vh;
    background-color: white;
    border-radius: 5px;
    z-index: 3;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    h1{
        text-align: center;
    }
    
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div input{
        border-radius: 10px;
        border: none;
        padding: 1rem 2rem;
        background-color: #f1f1f1;
        margin-bottom: 1rem;
        width: 49%;
    }

    textarea{
        border-radius: 10px;
        border: none;
        padding: 1rem 2rem;
        background-color: #f1f1f1;
        margin-bottom: 2rem;
        resize: none;
        width: 100%;
        align-self: center;
    }
    
    div button{
        cursor: pointer;
        border-radius: 10px;
        border: none;
        padding: 1rem 2rem;
        background: rgb(0,128,255);
        background: linear-gradient(267deg, rgba(0,128,255,1) 0%, rgba(0,91,181,1) 100%);
        width: 49%;
        color: white;
    }
`;
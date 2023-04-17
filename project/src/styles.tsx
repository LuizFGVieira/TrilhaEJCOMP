import styled, { createGlobalStyle } from "styled-components"

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: white;
    width: 80vw;
    height: 86vh;
    margin: 7vh 10vw;
    border-radius: 20px;
    box-shadow: 2px 2px 15px #b8b8b8;

    div{
        height: 100%;
        width: 50%;
        background-color: var(--primary-color);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    @media (max-width: 600px) {
        justify-content: center;
        div{
            display: none;
        }
    }

    @media (max-width: 350px) {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 1rem;

    input{
        border-radius: 10px;
        border: none;
        padding: 1rem 2rem;
        background-color: #f1f1f1;
        margin-bottom: 1rem;
        width: 17rem;
    }

    button{
        width: 17rem;
        height: 3rem;
        border-radius: 10px;
        border: none;
        color: white;
        background-color: var(--primary-color);
    }
`;
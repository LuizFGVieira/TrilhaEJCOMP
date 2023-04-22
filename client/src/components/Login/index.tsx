import { useState } from "react";
import { Form, Login } from "../../styles";
import { Link } from "react-router-dom";

type LoginFormProps = {
    TogglePage: () => void;
    Display: string;
};

function LoginForm({ TogglePage, Display }: LoginFormProps) {
    return (
        <Login displayLogin={Display}>
            <Form>
                <h1>Login</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <Link to={""}>Esqueci minha senha</Link>
                <button type="submit">Logar</button>
            </Form >
            <h6>É novo por aqui? <span onClick={() => TogglePage()}>Cadastre-se</span></h6>
        </Login>
    );
}

export default LoginForm;
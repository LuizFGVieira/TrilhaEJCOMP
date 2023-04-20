import { useState } from "react";
import { Form, Login } from "../../styles";

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
                <button type="button" onClick={() => TogglePage()}>Logar</button>
            </Form >
        </Login>
    );
}

export default LoginForm;
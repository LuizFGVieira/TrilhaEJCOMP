import React from "react";
import { Form } from "../../../styles";

function LoginForm() {
    return (
        <Form>
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Logar</button>
        </Form>
    );
}

export default LoginForm;
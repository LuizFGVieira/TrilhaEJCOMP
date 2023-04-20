import React from "react";
import { Form, Signup } from "../../styles";

type SignupFormProps = {
    TogglePage: () => void;
    Display: string;
};

function SignupForm({ TogglePage, Display }: SignupFormProps) {
    return (
        <Signup displaySignup={Display}>
            <Form>
                <h1>Sign Up</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="button" onClick={() => TogglePage()}>Logar</button>
            </Form>
        </Signup>
    );
}


export default SignupForm;
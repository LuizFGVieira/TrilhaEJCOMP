import React, { useState, useReducer } from "react";
import { Form, Signup } from "../../styles";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SignupFormProps = {
    TogglePage: () => void;
    Display: string;
};

function SignupForm({ TogglePage, Display }: SignupFormProps) {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formValues.password !== formValues.confirmPassword) {
            toast.error("As senhas devem ser iguais!");
        } else {
            await axios.post("http://localhost:8800", {
                name: formValues.name,
                email: formValues.email,
                password: formValues.password
            })
                .then(({ data }) => toast.success(data))
            TogglePage();
        }
        Promise.resolve();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <Signup displaySignup={Display}>
            <Form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Repita a senha"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleInputChange}
                />
                <button type="submit">Cadastrar-se</button>
            </Form>
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <h6>
                Ja tem uma conta?{" "}
                <span onClick={() => TogglePage()}>Entrar</span>
            </h6>
        </Signup>
    );
}

export default SignupForm;

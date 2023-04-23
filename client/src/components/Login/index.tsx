import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import { Form, Login } from "../../styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LoginFormProps = {
    TogglePage: () => void;
    Display: string;
};

function LoginForm({ TogglePage, Display }: LoginFormProps) {
    const { setAuth }: any = useContext(AuthContext);

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios.post("http://localhost:8800/login", {
            email: formValues.email,
            password: formValues.password,
        })
            .then(({ data }) => {
                if (data !== null) {
                    console.log(data);
                    toast.success("Logado com Sucesso");
                    setAuth({ data });
                    navigate("/home");
                } else {
                    toast.error("Credenciais Invalidas!");
                }
            })
        Promise.resolve();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <Login displayLogin={Display}>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange} />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange} />

                <Link to={""}>Esqueci minha senha</Link>
                <button type="submit">Logar</button>
            </Form >
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <h6>É novo por aqui? <span onClick={() => TogglePage()}>Cadastre-se</span></h6>
        </Login>
    );
}

export default LoginForm;
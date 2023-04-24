import { useState } from "react";
import LoginForm from "../Login";
import { Card, CardTransitor } from "../../styles";
import SignupForm from "../Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/img/EJBRANCO.png'

function LoginCard() {
    const [transition, setTransition] = useState("");
    const [pageAtiva, setPageAtiva] = useState("Login");

    function togglePage() {
        if (pageAtiva === "Login") {
            setTransition("CardTransitionSignup");
            setPageAtiva("Signup");
        } else {
            setTransition("CardTransitionLogin");
            setPageAtiva("Login");
        }
    }

    return (
        <>
            <CardTransitor transition={transition} >
                <img src={logo} alt="" id="logo1" />
            </CardTransitor>
            <Card>
                <SignupForm TogglePage={togglePage} Display={pageAtiva === "Login" ? "none" : "flex"} />
                <LoginForm TogglePage={togglePage} Display={pageAtiva === "Signup" ? "none" : "flex"} />
            </Card>
        </>

    );
}

export default LoginCard;
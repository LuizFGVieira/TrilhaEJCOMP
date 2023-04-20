import { useState } from "react";
import LoginForm from "../Login";
import { Card, CardTransitor } from "../../styles";
import SignupForm from "../Signup";

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
            <CardTransitor transition={transition} />
            <Card>
                <SignupForm TogglePage={togglePage} Display={pageAtiva === "Login" ? "none" : "flex"} />
                <LoginForm TogglePage={togglePage} Display={pageAtiva === "Signup" ? "none" : "flex"} />
            </Card>
        </>

    );
}

export default LoginCard;
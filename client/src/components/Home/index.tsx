import React, { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

function Home() {
    const { auth }: any = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth === undefined) {
            navigate("/");
        }
    }, [])
    return (
        <>
            <h1>ENTROUUU</h1>
        </>)
}

export default Home;
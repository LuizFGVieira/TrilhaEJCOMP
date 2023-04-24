import React, { useState, useContext } from "react";
import { FundoForm, TaskForm } from "../../../styles";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../../context/AuthProvider";

type FormProps = {
    TogglePage: () => void;
    getTasks: () => void;
};

function FormTask({ TogglePage, getTasks }: FormProps) {
    const { auth }: any = useContext(AuthContext);
    const [formValues, setFormValues] = useState({
        title: "",
        deadLine: "",
        description: "",
        color: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios.post("http://localhost:8800/tasks", {
            title: formValues.title,
            deadLine: formValues.deadLine,
            description: formValues.description,
            userId: auth.data.id,
            color: formValues.color,
        })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))

        TogglePage();
        getTasks();

        Promise.resolve();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <>
            <FundoForm onClick={() => TogglePage()} />
            <TaskForm onSubmit={handleSubmit}>
                <h1>Tarefa</h1>
                <div>
                    <input type="text" placeholder="Título" name="title" onChange={handleInputChange} />
                    <input type="date" name="deadLine" id="" onChange={handleInputChange} />
                    <input type="color" name="color" onChange={handleInputChange} id="color" />
                </div>
                <textarea name="description" id="" cols={30} rows={10} placeholder="Descrição" onChange={handleTextAreaChange}></textarea>
                <div>
                    <button type="button" onClick={() => TogglePage()}>Cancelar</button>
                    <button type="submit">Enviar</button>
                </div>

            </TaskForm>
        </>
    );
}

export default FormTask;
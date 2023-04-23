import React, { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { BtnTask, TaskArea, TaskDescription, TaskDone, TaskInProgress, TaskToDo, WorkSpace } from "../../styles";
import SideBar from "./SideBar";
import FormTask from "./FormTask";
import axios from "axios";

function Home() {
    const { auth }: any = useContext(AuthContext);
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false);
    const [tasks, setTasks] = useState([]);

    async function getTasks() {
        const result = await axios.get("http://localhost:8800/tasks");
        setTasks(result.data);
    }

    useEffect(() => {
        async function fetchTasks() {
            await getTasks();
        }
        fetchTasks();
        if (auth.data === undefined) {
            navigate("/");
        }
    }, []);

    function handleClickBtn(): void {
        setDisplay(!display);
    }

    return (
        <>
            <SideBar />
            {display && (<FormTask TogglePage={handleClickBtn} getTasks={getTasks} />)}
            <WorkSpace>
                <TaskArea>
                    {tasks.map((task: any) => (
                        <TaskToDo>

                            <TaskDescription key={task.id}>
                                <h1>{task.title}</h1>
                                <p>{task.description}</p>
                                <h2>Entrega: {task.deadline}</h2>
                            </TaskDescription>

                        </TaskToDo>
                    ))}
                </TaskArea>

                <TaskArea>
                    <TaskInProgress>
                        <TaskDescription>
                            <h1>Título da Task</h1>
                            <h2>23/04/2023</h2>
                        </TaskDescription>
                    </TaskInProgress>
                </TaskArea>

                <TaskArea>
                    <TaskDone>
                        <TaskDescription>
                            <h1>Título da Task</h1>
                            <h2>23/04/2023</h2>
                        </TaskDescription>
                    </TaskDone>
                </TaskArea>

            </WorkSpace>
            <BtnTask onClick={handleClickBtn}>+ Nova Tarefa</BtnTask>
        </>
    )
}

export default Home;

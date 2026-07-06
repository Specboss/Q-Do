import React from 'react';
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import { Spacing,Text,Button,Div} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";
import Task from "./Task"
import api from "../api";
import {Icon20ListPlusOutline} from "@vkontakte/icons";
import ViewTask from "./ViewTask";
import AddFolderTask from "./AddFolderTask";
const AddTaskToFolder = ({folderId, setAddTask, setBack, back}) => {
    setBack("addTaskToFolder")
    if (back === "backAddTaskToFolder"){
        setAddTask(false)
    }

    const [tasks, setTasks] = useState(null);




    useEffect(() => {
        async function getTasks() {
            const tasks = await api.get("/tasks")
            if (tasks.data.length !== 0){
                setTasks(tasks.data)
            }else{
                setTasks(null)
            }

        }

        getTasks();
    }, );
    return(<>
            {tasks? <>
                    {tasks.map((task)=>(
                        <AddFolderTask key={task.id} task={task} folderId={folderId} setAddTask={setAddTask} />

                    ))}
                    <Div style={{height:"11vh"}}/></>

                :
                <Div  style={{
                    height: "80vh",
                    display:"flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center"

                }}>

                    <Icon20ListPlusOutline width={58} height={46} color={"#2688EB"}/>
                    <Spacing size={10} />

                    <Text  style={{
                        fontSize:"20px",
                        weight:"500"
                    }}>У Вас нет заметок</Text>
                </Div>
            }
        </>
    )};


export default AddTaskToFolder;
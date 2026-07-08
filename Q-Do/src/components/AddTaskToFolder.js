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
                <Div className="qdo-empty">
                    <div className="qdo-empty__icon">
                        <Icon20ListPlusOutline width={42} height={42} color={"#5AC8FA"}/>
                    </div>
                    <Text className="qdo-empty__title">Нет заметок для добавления</Text>
                    <Text className="qdo-empty__sub">Сначала создайте заметку во вкладке «Заметки»</Text>
                </Div>
            }
        </>
    )};


export default AddTaskToFolder;
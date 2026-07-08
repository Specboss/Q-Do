import React from 'react';
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import { Spacing,Text,Button,Div} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";
import Task from "./Task"
import api from "../api";
import {Icon20ListPlusOutline} from "@vkontakte/icons";
import ViewTask from "./ViewTask";
import FolderTask from "./FolderTask";
import AddTaskToFolder from "./AddTaskToFolder";
import classes from "../style/viewFolder.module.css";
const ViewFolder = ({folder, setFolder ,setBack, back}) => {
    setBack("viewFolder")
    if (back === "backFolder"){
        setFolder(null)
        setBack(null)
    }


    const [tasks, setTasks] = useState(null);
    const [task, setTask] = useState(null)
    const [addTask,setAddTask] = useState(false)




    useEffect(() => {
        async function getTasks() {
            const tasks = await api.get(`/folders/${folder.id}`)
            if (tasks.data.tasks.length !== 0){
                setTasks(tasks.data.tasks)
            }else{
                setTasks(null)
            }
            if (!task) setTask(null)


        }

        getTasks();
    },[task,addTask] );
    return(<><Div className={classes.topPosition}>
            <Div className={classes.top}>
                <Text className={classes.folderText}>Папка: {folder.name}</Text>
                {(!task && tasks && !addTask)?<Button className={classes.button} mode={"secondary"} onClick={() => {
                    setAddTask(true);
                }}><Icon20ListPlusOutline color={"#E1E3E6"} width={25} height={25}/>
                </Button>:null}
            </Div>

        </Div>
            {addTask? <AddTaskToFolder folderId={folder.id} setAddTask={setAddTask} setBack={setBack} back={back}/>:
                tasks? task? <ViewTask task={task} setTask={setTask} setBack={setBack} back={back}/>:
                        <>
                    {tasks.map((task)=>(
                        <FolderTask key={task.id} task={task}  setTask={setTask} />

                    ))}
                            <Div style={{height:"11vh"}}/>
                </>

                :
                <Div className="qdo-empty">
                    <div className="qdo-empty__icon">
                        <Icon20ListPlusOutline width={42} height={42} color={"#5AC8FA"}/>
                    </div>
                    <Text className="qdo-empty__title">В папке пусто</Text>
                    <Text className="qdo-empty__sub">Добавьте сюда существующие заметки</Text>
                    <Button size={'l'} className="qdo-empty__btn" onClick={() => {
                        setAddTask(true);
                    }}>Добавить заметку</Button>
                </Div>

            }
        </>
    )};


export default ViewFolder;
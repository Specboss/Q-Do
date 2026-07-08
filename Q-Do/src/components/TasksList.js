import React from 'react';
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import { Spacing,Text,Button,Div} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";
import Task from "./Task"
import api from "../api";
import {Icon20ListPlusOutline} from "@vkontakte/icons";
import ViewTask from "./ViewTask";
const TasksList = ({setSelected, popout,setBack,back}) => {



    const [tasks, setTasks] = useState(null);
    const [task, setTask] = useState(null)




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
    },[popout, task] );
    return(<>
            {tasks? task? <ViewTask task={task} setTask={setTask} setBack={setBack} back={back}/>:<>
                    {tasks.map((task)=>(
                        <Task key={task.id} task={task}  setTask={setTask} />

                    ))}<Div style={{height:"11vh"}}/></>

                :
                <Div className="qdo-empty">
                    <div className="qdo-empty__icon">
                        <Icon20ListPlusOutline width={42} height={42} color={"#5AC8FA"}/>
                    </div>
                    <Text className="qdo-empty__title">Заметок пока нет</Text>
                    <Text className="qdo-empty__sub">Создайте первую заметку — и она появится здесь</Text>
                    <Button size={'l'} className="qdo-empty__btn" onClick={() => {
                        setSelected('create');
                    }}>Добавить заметку</Button>
                </Div>
            }
        </>
    )};


export default TasksList;
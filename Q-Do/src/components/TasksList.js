import React from 'react';
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import { Spacing,Text,Button,Div} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";
import Task from "./Task"
import axios from "axios";
import {Icon20ListPlusOutline} from "@vkontakte/icons";
import ViewTask from "./ViewTask";
const TasksList = ({setSelected, popout,setBack,back}) => {



    const [tasks, setTasks] = useState(null);
    const [task, setTask] = useState(null)




    useEffect(() => {
        async function getTasks() {
            const tasks = await axios.get("https://qretex.site/tasks",{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}})
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
                    <Spacing size={32} />
                    <Button size={'l'} onClick={() => {
                        setSelected('create');
                    }}>
                        <Text weight={'1'}   style={{
                            fontSize:"14px",


                        }}>Добавить</Text>
                    </Button>
                </Div>
            }
        </>
    )};


export default TasksList;
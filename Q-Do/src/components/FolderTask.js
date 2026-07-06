import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/task.module.css"
import {Icon20ArrowRightOutline, Icon20CheckCircleOutline,Icon20FolderSimpleArrowUpOutline} from "@vkontakte/icons";
import api from "../api";
const FolderTask = ({task,setTask}) => {
    let loading = false
    const [displayTask,setDisplayTask] = useState("flex")
    const [completed,setCompleted] = useState(task.completed)

    async function removeTaskFromFolder(){
        if (loading) return
        loading = true
        await api.delete(`/folders/task/${task.id}`);
        setDisplayTask("none")
        setTask(false)
        loading = false
    }

    async function completeTask(){
        if (loading) return
        loading = true
        const taskComplete = await api.patch(`/tasks/complete/${task.id}`,{});
        setCompleted(taskComplete.data.completed)
        loading = false
    }



    return(

        <Div className={classes.task} style={{
            display: displayTask
        }}>
            <Div className={classes.taskTop} onClick={()=>setTask(task)}>
                <Text style={{
                    textDecoration: completed? "line-through": "none"
                }}  className={classes.taskTitle}>{task.title}</Text>
                <Spacing size={7} />
                <Text style={{
                    textDecoration: completed? "line-through": "none"
                }} className={classes.taskText}>{task.text}</Text>
            </Div>
            <Spacing size={10} />
            <Div className={classes.taskButtons}>
                <Button mode={"secondary"} className={classes.taskButton} onClick={()=>completeTask()}><Icon20CheckCircleOutline color={completed?"#ACACAC":"#26EB51"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.taskButton} onClick={removeTaskFromFolder} ><Icon20FolderSimpleArrowUpOutline color={"#E1E3E6"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.taskButton} onClick={()=>setTask(task)}><Icon20ArrowRightOutline color={"#E1E3E6"} width={25} height={25}/></Button>
            </Div>
        </Div>
    )


}
export default FolderTask;
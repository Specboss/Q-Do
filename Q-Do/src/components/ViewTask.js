import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/task.module.css"
import {Icon20WriteOutline, Icon20DeleteOutline} from "@vkontakte/icons";
import EditTask from "./EditTask";
import axios from "axios";
const ViewTask = ({task, setTask}) => {
    let loading = false

    const [edit,setEdit] = useState(false)
    async function deleteTask(){
        if (loading) return
        loading = true
        await axios.delete(`https://qretex.site/tasks/${task.id}`,{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setTask(null)
        loading = false
    }



    return(edit? <EditTask task={task} setEdit={setEdit} setTask={setTask}/>:

        <Div className={classes.task}>
            <Text  className={classes.taskTitle}>{task.title}</Text>
            <Div className={classes.taskTop}>
                <Spacing size={10} />
                <Text className={classes.taskText}>{task.text}</Text>
            </Div>
            <Spacing size={10} />
            <Div className={classes.taskButtons}>
                <Button mode={"secondary"} className={classes.taskButton} onClick={deleteTask}><Icon20DeleteOutline color={"#EB2626"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.taskButton} onClick={()=>setEdit(true)}><Icon20WriteOutline color={"#E1E3E6"} width={25} height={25}/></Button>
            </Div>
        </Div>
    )


}
export default ViewTask;
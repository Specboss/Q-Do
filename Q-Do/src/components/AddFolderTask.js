import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/task.module.css"
import {Icon20ListPlusOutline} from "@vkontakte/icons";
import axios from "axios";
const AddFolderTask = ({task, folderId,setAddTask}) => {
    let loading = false

    async function addTaskToFolder(){
        if (loading) return
        loading = true
        await axios.get(`https://qretex.site/folders/${folderId}/task/${task.id}`,{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setAddTask(false)
        loading = false
    }



    return(

        <Div className={classes.task} >
            <Div className={classes.taskTop}>
                <Text  className={classes.taskTitle}>{task.title}</Text>
                <Spacing size={7} />
                <Text className={classes.taskText}>{task.text}</Text>
            </Div>
            <Spacing size={10} />
            <Div className={classes.taskButtons} style={{justifyContent:"center"}}>

                <Button mode={"secondary"} className={classes.taskButton} onClick={addTaskToFolder} ><Icon20ListPlusOutline color={"#E1E3E6"} width={25} height={25}/></Button>

            </Div>
        </Div>
    )


}
export default AddFolderTask;
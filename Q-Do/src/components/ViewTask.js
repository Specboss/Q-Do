import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/viewTask.module.css"
import {Icon20WriteOutline, Icon20DeleteOutline} from "@vkontakte/icons";
import EditTask from "./EditTask";
import api from "../api";
import Modal from "./Modal";
import DeletConfirmationModal from "./DeletConfirmationModal";
import ModalForFolder from "./ModalForFolder";
const ViewTask = ({task, setTask,setBack, back}) => {
    setBack("viewTask")
    if (back === "backView"){
        setTask(null)
        setBack(null)
    }
    const [modal, setModal] = useState(false)
    let loading = false

    const [edit,setEdit] = useState(false)
    async function deleteTask(){
        if (loading) return
        loading = true
        await api.delete(`/tasks/${task.id}`);
        setModal(false)
        const tabs = await document.getElementById("tabs")
        document.body.style.overflow = 'auto'
        tabs.style.display = 'flex'
        setTask(null)
        setBack(null)
        loading = false
    }



    return(edit? <EditTask task={task} setEdit={setEdit} setTask={setTask} setBack={setBack} back={back}/>:
        <>
            {modal && <Modal setModal={setModal}><DeletConfirmationModal deleteFunc={deleteTask} />}</Modal>}
        <Div className={classes.task}>
            <Text  className={classes.taskTitle}>{task.title}</Text>
            <Div className={classes.taskTextDiv}>
                <Text className={classes.taskText}>{task.text}</Text>
            </Div>
            <Spacing size={10} />
            <Div className={classes.taskButtons}>
                <Button mode={"secondary"} className={classes.taskButton} onClick={()=>setModal(true)}><Icon20DeleteOutline color={"#EB2626"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.taskButton} onClick={()=>setEdit(true)}><Icon20WriteOutline color={"#E1E3E6"} width={25} height={25}/></Button>
            </Div>
        </Div>
            </>
    )


}
export default ViewTask;
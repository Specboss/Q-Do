import {Button, Div, FormItem, Input, Spacing, Textarea} from "@vkontakte/vkui";
import {Icon16CheckDoubleOutline,Icon20DeleteOutline,Icon20ArrowUturnLeftOutline} from "@vkontakte/icons";
import React from "react";
import {useState} from "react";
import classes from "../style/editTask.module.css";
import api from "../api";
import Modal from "./Modal";
import DeletConfirmationModal from "./DeletConfirmationModal";

const EditTask = ({task, setEdit, setTask, setBack, back}) => {
    setBack("editTask")
    if (back === "backEdit"){
        setEdit(null)
    }
    const defaultTitle = task.title
    const defaultText = task.text
    const [modal, setModal] = useState(false)
    const [inputText,setInputText] = useState(task.title)
    const [textareaText,setTextareaText] = useState(task.text)
    let loading = false

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

    async function updateTask(){
        if (loading) return
        loading = true
        console.log(task)
        await api.patch(`/tasks/${task.id}`,{
            title: inputText,
            text: textareaText
        });
        setTask({
            ...task,
            title:inputText,
            text: textareaText,

        })
        setEdit(null)
        loading = false
    }
    return (<>
        {modal && <Modal setModal={setModal}><DeletConfirmationModal deleteFunc={deleteTask} />}</Modal>}
        <Div  className={classes.editTask}>




        <FormItem
            className={classes.formTitle}
            htmlFor="inputName"
        >
            <Input
                className={classes.input}
                id="inputName"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                type="text"
                placeholder="Название заметки"

            />
            {/*{successful && <FormStatus header="Задача добавлена успешно" >*/}
            {/*</FormStatus>}*/}

        </FormItem>

        <FormItem htmlFor="inputTask">
            <Textarea
                className={classes.input}
                rows={15}

                id="inputTask"
                value={textareaText}
                onChange={(event) => setTextareaText(event.target.value)}
                type="text"
                placeholder="Описание..."

            />
            {/*{successful && <FormStatus header="Задача добавлена успешно" >*/}
            {/*</FormStatus>}*/}

        </FormItem>


        <FormItem>
        <Div  className={classes.buttons} >
            <Button className={classes.button} onClick={()=>setModal(true)}  mode={"secondary"} ><Icon20DeleteOutline  width={25} height={25} color={"#EB2626"}/></Button>
            <Button className={classes.button} onClick={updateTask} mode={"secondary"} disabled={!inputText || !textareaText}><Icon16CheckDoubleOutline  width={25} height={25} color={(inputText && textareaText) ? "#26EB51": "#ACACAC"}/></Button>
            <Button className={classes.button} onClick={()=> {
                setInputText(defaultTitle);
                setTextareaText(defaultText);
            }} mode={"secondary"} ><Icon20ArrowUturnLeftOutline  width={25} height={25} color={"#E1E3E6"}/></Button>
        </Div>
        </FormItem>
    </Div>
    </>)

}
export default EditTask;
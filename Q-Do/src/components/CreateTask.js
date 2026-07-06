import {Button, Div, FormItem, Input, Spacing, Textarea} from "@vkontakte/vkui";
import {Icon16CheckDoubleOutline} from "@vkontakte/icons";
import React from "react";
import {useState} from "react";
import classes from "../style/editTask.module.css";
import api from "../api";

const CreateTask = ({setSelected}) => {
    const [inputText,setInputText] = useState('')
    const [textareaText,setTextareaText] = useState('')
    let loading = false

    async function createTask(){
        if (loading) return
        loading = true
        await api.post("/tasks",{
            title: inputText,
            text: textareaText
        });
        setSelected('list')
        loading = false
    }
    return (<Div className={classes.editTask}>

        <Spacing size={20} />


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


        </FormItem>

        <FormItem
            htmlFor="inputTask"

        >
            <Textarea
                className={classes.input}
                rows={15}

                id="inputTask"
                value={textareaText}
                onChange={(event) => setTextareaText(event.target.value)}
                type="text"
                placeholder="Описание..."

            />


        </FormItem>
        <Button className={classes.button} onClick={createTask} mode={"secondary"} disabled={!inputText || !textareaText}><Icon16CheckDoubleOutline  width={25} height={25} color={(inputText && textareaText) ? "#26EB51": "#ACACAC"}/></Button>



    </Div>)

}
export default CreateTask;
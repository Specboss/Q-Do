import {Button, Div, FormItem, Input, Spacing, Textarea} from "@vkontakte/vkui";
import {Icon16CheckDoubleOutline} from "@vkontakte/icons";
import React from "react";
import {useState} from "react";
import axios from "axios";

const CreateTask = ({}) => {
    const [inputText,setInputText] = useState('')
    const [textareaText,setTextareaText] = useState('')
    let loading = false

    async function createTask(){
        if (loading) return
        loading = true
        await axios.post("https://qretex.site/tasks",{
            title: inputText,
            text: textareaText
        },{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setInputText('')
        setTextareaText('')
        loading = false
    }
    return (<Div  style={{
        height: "80vh",
        display:"flex",
        alignItems: "center",
        flexDirection: "column",

    }}>

        <Spacing size={20} />


        <FormItem
            style={{
                paddingBottom: "0",
            }}
            htmlFor="inputName"

        >
            <Input
                style={{
                    width: "85vw",



                }}

                id="inputName"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                type="text"
                placeholder="Название заметки"

            />
            {/*{successful && <FormStatus header="Задача добавлена успешно" >*/}
            {/*</FormStatus>}*/}

        </FormItem>

        <FormItem
            htmlFor="inputTask"

        >
            <Textarea
                style={{
                    width: "85vw",



                }}
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
        {/*<Div  style={{*/}
        {/*	paddingRight:"0",*/}
        {/*	display:"flex",*/}
        {/*	alignItems: "flex-end",*/}
        {/*	flexDirection: "column",*/}

        {/*}}>*/}
        <Button onClick={createTask} mode={"secondary"} disabled={!inputText || !textareaText}><Icon16CheckDoubleOutline  width={16} height={16} color={(inputText && textareaText) ? "#26EB51": "#ACACAC"}/></Button>


        {/*</Div>*/}
    </Div>)

}
export default CreateTask;
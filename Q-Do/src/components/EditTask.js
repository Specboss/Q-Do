import {Button, Div, FormItem, Input, Spacing, Textarea} from "@vkontakte/vkui";
import {Icon16CheckDoubleOutline,Icon20DeleteOutline,Icon20ArrowUturnLeftOutline} from "@vkontakte/icons";
import React from "react";
import {useState} from "react";
import axios from "axios";

const EditTask = ({task, setEdit, setTask}) => {
    const [inputText,setInputText] = useState(task.title)
    const [textareaText,setTextareaText] = useState(task.text)
    let loading = false

    async function deleteTask(){
        if (loading) return
        loading = true
        await axios.delete(`https://qretex.site/tasks/${task.id}`,{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setTask(null)
        loading = false
    }

    async function updateTask(){
        if (loading) return
        loading = true
        console.log(task)
        await axios.patch(`https://qretex.site/tasks/${task.id}`,{
            title: inputText,
            text: textareaText
        },{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setTask({
            ...task,
            title:inputText,
            text: textareaText,

        })
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
        <Div  style={{
        	paddingRight:"0",
        	display:"flex",
        	justifyContent:"space-between",
            width: "90vw"


        }}>
            <Button onClick={deleteTask}  mode={"secondary"} ><Icon20DeleteOutline  width={16} height={16} color={"#EB2626"}/></Button>
            <Button onClick={updateTask} mode={"secondary"} disabled={!inputText || !textareaText}><Icon16CheckDoubleOutline  width={16} height={16} color={(inputText && textareaText) ? "#26EB51": "#ACACAC"}/></Button>
            <Button onClick={()=>setEdit(false)} mode={"secondary"} disabled={!inputText || !textareaText}><Icon20ArrowUturnLeftOutline  width={16} height={16} color={(inputText && textareaText) ? "#26EB51": "#ACACAC"}/></Button>


        </Div>
    </Div>)

}
export default EditTask;
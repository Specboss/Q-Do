import {Button, Div, FormItem, Input, Spacing, Textarea} from "@vkontakte/vkui";
import {Icon16CheckDoubleOutline} from "@vkontakte/icons";
import React from "react";
import classes from "../style/createFolder.module.css"
import {useState} from "react";
import axios from "axios";

const CreateFolder = ({}) => {
    const [inputText,setInputText] = useState('')
    let loading = false

    async function createTask(){
        if (loading) return
        loading = true
        await axios.post("https://qretex.site/folders",{
            name: inputText
        },{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setInputText('')
        loading = false
    }
    return (<Div  className={classes.createFolder}>



        <FormItem htmlFor="inputName" >
            <Div className={classes.folderImg}>

            <Input
                className={classes.folderInput}
                id="inputName"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                type="text"
                placeholder="Название папки..."

            />
            </Div>
            {/*{successful && <FormStatus header="Задача добавлена успешно" >*/}
            {/*</FormStatus>}*/}

        </FormItem>


        {/*<Div  style={{*/}
        {/*	paddingRight:"0",*/}
        {/*	display:"flex",*/}
        {/*	alignItems: "flex-end",*/}
        {/*	flexDirection: "column",*/}

        {/*}}>*/}
        <Button onClick={createTask} mode={"secondary"} disabled={!inputText}><Icon16CheckDoubleOutline  width={16} height={16} color={(inputText) ? "#26EB51": "#ACACAC"}/></Button>


        {/*</Div>*/}
    </Div>)

}
export default CreateFolder;
import {Text, Div, Button, Spacing, Input} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/folder.module.css"
import {
    Icon16CheckDoubleOutline,
    Icon20ArrowUturnLeftOutline,
    Icon20DeleteOutline,
    Icon20WriteOutline
} from "@vkontakte/icons";
import axios from "axios";
const Folder = ({folder,setFolder}) => {
    const defaultName = folder.name
    const [inputText,setInputText] = useState(folder.name)
    const [edit, setEdit] = useState(false)

    let loading = false
    async function deleteFolder(){
        if (loading) return
        loading = true
        await axios.delete(`https://qretex.site/folders/${folder.id}`,{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setFolder(false)
        loading = false
    }

    async function updateTask(){
        if (loading) return
        loading = true
        await axios.patch(`https://qretex.site/folders/${folder.id}`,{
            name: inputText
        },{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setFolder(false)
        setEdit(false)
        loading = false
    }



    return(

        <Div className={classes.folder} >
            <Div className={classes.folderImg} onClick={()=> {if (!edit)setFolder(folder)}}>
                {edit? <Input
                    className={classes.folderInput}
                    id="inputName"
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                    type="text"
                    placeholder="Название папки..."

                />:<Text className={classes.folderName}>{folder.name}</Text>}
            </Div>
            <Div className={classes.folderButtons}>
                {edit?<><Button className={classes.folderButton} onClick={updateTask} mode={"secondary"} disabled={!inputText}><Icon16CheckDoubleOutline  width={25} height={25} color={(inputText) ? "#26EB51": "#ACACAC"}/></Button>
                <Button className={classes.folderButton} onClick={()=> {setInputText(defaultName);}} mode={"secondary"} ><Icon20ArrowUturnLeftOutline  width={25} height={25} color={"#E1E3E6"}/></Button></>
                    :<><Button mode={"secondary"} className={classes.folderButton} onClick={()=>deleteFolder()}><Icon20DeleteOutline color={"#EB2626"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.folderButton} onClick={()=>setEdit(true)}><Icon20WriteOutline color={"#E1E3E6"} width={25} height={25}/></Button></>}
            </Div>
        </Div>
    )


}
export default Folder;
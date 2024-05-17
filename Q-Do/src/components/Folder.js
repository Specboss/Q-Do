import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/folder.module.css"
import {Icon20DeleteOutline, Icon20WriteOutline} from "@vkontakte/icons";
import axios from "axios";
const Folder = ({folder,setFolder}) => {

    let loading = false
    async function deleteFolder(){
        if (loading) return
        loading = true
        await axios.delete(`https://qretex.site/folders/${folder.id}`,{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setFolder(false)
        loading = false
    }



    return(

        <Div className={classes.folder} >
            <Div className={classes.folderImg} onClick={()=>setFolder(folder)}>
                <Text className={classes.folderName}>{folder.name}</Text>
            </Div>
            <Div className={classes.folderButtons}>
                <Button mode={"secondary"} className={classes.folderButton} onClick={()=>deleteFolder()}><Icon20DeleteOutline color={"#EB2626"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.folderButton} ><Icon20WriteOutline color={"#E1E3E6"} width={25} height={25}/></Button>
            </Div>
        </Div>
    )


}
export default Folder;
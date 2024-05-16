import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/folder.module.css"
import {Icon20DeleteOutline, Icon20WriteOutline} from "@vkontakte/icons";
const Folder = ({folder,setFolder}) => {



    return(

        <Div className={classes.folder} onClick={()=>setFolder(folder)}>
            <Div className={classes.folderImg}>
                <Text className={classes.folderName}>{folder.name}</Text>
            </Div>
            <Div className={classes.folderButtons}>
                <Button mode={"secondary"} className={classes.folderButton}><Icon20DeleteOutline color={"#EB2626"} width={25} height={25}/></Button>
                <Button mode={"secondary"} className={classes.folderButton} ><Icon20WriteOutline color={"#E1E3E6"} width={25} height={25}/></Button>
            </Div>
        </Div>
    )


}
export default Folder;
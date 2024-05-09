import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/task.module.css"
const Folder = ({folder,setFolder}) => {



    return(

        <Div className={classes.task} onClick={()=>setFolder(folder)}>
            <Div className={classes.taskTop}>
                <Text className={classes.taskText}>{folder.name}</Text>
            </Div>
        </Div>
    )


}
export default Folder;
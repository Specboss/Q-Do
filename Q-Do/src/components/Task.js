import { Text,Div,Button,Spacing} from "@vkontakte/vkui";
import React,{useRef, useState} from 'react';
import classes from "../style/task.module.css"
import {Icon20ArrowRightOutline, Icon20CheckCircleOutline} from "@vkontakte/icons";
const Task = ({task,setTask}) => {



    return(

  <Div className={classes.task}>
  <Div className={classes.taskTop}>
    <Text  className={classes.taskTitle}>{task.title}</Text>
    <Spacing size={10} />
    <Text className={classes.taskText}>{task.text}</Text>
  </Div>
    <Spacing size={10} />
    <Div className={classes.taskButtons}>
      <Button mode={"secondary"} className={classes.taskButton} ><Icon20CheckCircleOutline color={"#26EB51"} width={25} height={25}/></Button>
      <Button mode={"secondary"} className={classes.taskButton}  onClick={()=>setTask(task)}><Icon20ArrowRightOutline color={"#E1E3E6"} width={25} height={25}/></Button>
    </Div>
  </Div>
    )


}
export default Task;
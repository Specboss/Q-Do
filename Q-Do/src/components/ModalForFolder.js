import classes from "../style/modalForFolder.module.css"
import {Text, Div, Button, Spacing, Input} from "@vkontakte/vkui";
import {Icon20DeleteOutline, Icon20WriteOutline} from "@vkontakte/icons";
const ModalForFolder = ({setEdit,setConfirmDeleteModal}) => {

    return (
    <Div  className={classes.menu}>
        <Div className={classes.menu_item}  onClick={()=>setEdit(true)}>
            <Icon20WriteOutline className={classes.menu_icon}  color={"#E1E3E6"} width={25} height={25}/>
            <Text className={classes.text} >Переименовать</Text>
        </Div>
        <Div className={classes.menu_item} onClick={()=>setConfirmDeleteModal(true)}>
            <Icon20DeleteOutline className={classes.menu_icon} color={"#EB2626"} width={25} height={25}/>
            <Text className={classes.text} >Удалить</Text>
        </Div>
    </Div>
    )
}

export default ModalForFolder;
import classes from "../style/deletConfirmationModal.module.css"
import {Text, Div, Button, Spacing, Input} from "@vkontakte/vkui";
const DeletConfirmationModal = ({deleteFunc}) => {


    return (
        <Div className={classes.menu}>
            <Div className={classes.menu_item} >
                <Text className={classes.text}>Точно удалить?</Text>
            </Div>
            <Div className={classes.menu_item}>
                <Div id={'cancel'}  className={classes.button} >
                    <Text id={'cancel'}  className={classes.text}>Отмена</Text>
                </Div>
                <Div  className={classes.button} onClick={deleteFunc}>
                    <Text  className={classes.text_del}>Удалить</Text>
                </Div>
            </Div>
        </Div>
    )
}

export default DeletConfirmationModal;
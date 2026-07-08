import classes from "../style/modal.module.css"
import {Text, Div, Button, Spacing, Input} from "@vkontakte/vkui";
const Modal = ({setModal,children}) => {
     function closeModal(e){
         if (e.target.id === "modal" || e.target.id === "cancel"){
             document.body.style.overflow = 'auto'
             tabs.style.display = 'flex'
             setModal(false)
         }


    }

    const tabs = document.getElementById("tabs")
    tabs.style.display = 'none'
    document.body.style.overflow = 'hidden'
    return(
 <Div className={classes.modal} id={'modal'} onClick={closeModal}>{children}</Div>)
}

export default Modal;
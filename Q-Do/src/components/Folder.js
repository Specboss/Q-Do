import {Text, Div, Button, Spacing, Input} from "@vkontakte/vkui";
import React, {useEffect, useRef, useState} from 'react';
import classes from "../style/folder.module.css"
import {
    Icon16CheckDoubleOutline,
    Icon20ArrowUturnLeftOutline,
    Icon20DeleteOutline, Icon20More,
    Icon20WriteOutline
} from "@vkontakte/icons";
import axios from "axios";
import Modal from "./Modal";
import ModalForFolder from "./ModalForFolder";
import DeletConfirmationModal from "./DeletConfirmationModal";
const Folder = ({folder,setFolder}) => {
    const defaultName = folder.name
    const [inputText,setInputText] = useState(folder.name)
    const [edit, setEdit] = useState(false)
    const [modal, setModal] = useState(false)
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
    useEffect(()=>{
        if (!modal){
            setEdit(false)
            setConfirmDeleteModal(false)
        }
    },[modal])

    let loading = false
    async function deleteFolder(){
        if (loading) return
        loading = true
        await axios.delete(`https://qretex.site/folders/${folder.id}`,{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
        setModal(false)
        const tabs = await document.getElementById("tabs")
        document.body.style.overflow = 'auto'
        tabs.style.display = 'flex'
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
        setModal(false)
        const tabs = await document.getElementById("tabs")
        document.body.style.overflow = 'auto'
        tabs.style.display = 'flex'
        loading = false
    }

    async function showModal(){
        setModal(true)
    }



    return(
        <>
        {modal && <Modal setModal={setModal}>{confirmDeleteModal? <DeletConfirmationModal deleteFunc={deleteFolder} />: edit ? null:<ModalForFolder setEdit={setEdit} setConfirmDeleteModal={setConfirmDeleteModal}/>}</Modal>}
        <Div className={classes.folder} style={{zIndex: modal ? "101" : "auto"}} >
            {modal ? null: <Div className={classes.folderModal} onClick={showModal}><Icon20More/></Div>}
            <Div className={classes.folderImg} onClick={()=> {if (!edit && !modal)setFolder(folder)}}>

                {edit?<><Input
                    className={classes.folderInput}
                    id="inputName"
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                    type="text"
                    placeholder="Название папки..."

                />
                    <Button className={classes.folderButton} onClick={updateTask}  mode={"secondary"} disabled={!inputText}><Icon16CheckDoubleOutline  width={25} height={25} color={(inputText) ? "#26EB51": "#ACACAC"}/></Button>
                    </>
                    :<Text className={classes.folderName}>{folder.name}</Text>}
            </Div>

        </Div>
        </>
    )


}
export default Folder;
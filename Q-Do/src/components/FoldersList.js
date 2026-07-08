import React, {useEffect, useState} from "react";
import api from "../api";
import ViewTask from "./ViewTask";
import {Button, Div, Spacing, Text} from "@vkontakte/vkui";
import {Icon20FolderSimplePlusOutline} from "@vkontakte/icons";
import Folder from "./Folder";
import ViewFolder from "./ViewFolder";

const FolderList = ({setSelected, setBack, back}) => {


    const [folders, setFolders] = useState(null);
    const [folder, setFolder] = useState(null)




    useEffect(() => {
        async function getFolders() {
            const folders = await api.get("/folders")
            if (folders.data.length !== 0) {
                setFolders(folders.data)
            }else {
                setFolders(null)
            }
            if (!folder) setFolder(null)//Костыль
        }

        getFolders();
    },[folder] );
    return(<>
            {folders? folder? <ViewFolder folder={folder} setFolder={setFolder} setBack={setBack} back={back}/>:<>
                    {folders.map((folder)=>(
                        <Folder key={folder.id} folder={folder}  setFolder={setFolder} />

                    ))}
                    <Div className="qdo-spacer"/>
                </>

                :
                <Div className="qdo-empty">
                    <div className="qdo-empty__icon">
                        <Icon20FolderSimplePlusOutline width={42} height={42} color={"#5AC8FA"}/>
                    </div>
                    <Text className="qdo-empty__title">Папок пока нет</Text>
                    <Text className="qdo-empty__sub">Сгруппируйте заметки — создайте первую папку</Text>
                    <Button size={'l'} className="qdo-empty__btn" onClick={() => {
                        setSelected('create');
                    }}>Создать папку</Button>
                </Div>
            }
        </>
    )};


export default FolderList;
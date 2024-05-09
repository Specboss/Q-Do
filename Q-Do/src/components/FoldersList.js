import React, {useEffect, useState} from "react";
import axios from "axios";
import ViewTask from "./ViewTask";
import {Button, Div, Spacing, Text} from "@vkontakte/vkui";
import {Icon20FolderSimplePlusOutline} from "@vkontakte/icons";
import Folder from "./Folder";
import ViewFolder from "./ViewFolder";

const FolderList = ({setSelected}) => {


    const [folders, setFolders] = useState(null);
    const [folder, setFolder] = useState(null)




    useEffect(() => {
        async function getFolders() {
            const folders = await axios.get("https://qretex.site/folders",{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}})
            if (folders.data.length !== 0) setFolders(folders.data)

        }

        getFolders();
    },[] );
    return(<>
            {folders? folder? <ViewFolder folder={folder}/>:<>
                    {folders.map((folder)=>(
                        <Folder key={folder.id} folder={folder}  setFolder={setFolder} />

                    ))}</>

                :
                <Div  style={{
                    height: "80vh",
                    display:"flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center"

                }}>

                    <Icon20FolderSimplePlusOutline width={58} height={46} color={"#2688EB"}/>
                    <Spacing size={10} />

                    <Text  style={{
                        fontSize:"20px",
                        weight:"500"
                    }}>У Вас нет папок</Text>
                    <Spacing size={32} />
                    <Button size={'l'} onClick={() => {
                        setSelected('create');
                    }}>
                        <Text weight={'1'}   style={{
                            fontSize:"14px",


                        }}>Добавить</Text>
                    </Button>
                </Div>
            }
        </>
    )};


export default FolderList;
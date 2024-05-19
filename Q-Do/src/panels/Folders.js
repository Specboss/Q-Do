import React, { useState,} from 'react';
import PropTypes from 'prop-types';

import {
    Panel,
    PanelHeader,
    Tabs,
    TabsItem,
    PanelHeaderBack
} from '@vkontakte/vkui';
import FoldersList from "../components/FoldersList";
import CreateFolder from "../components/CreateFolder";

const Folders = ({ id }) =>{



    const [selected, setSelected] = useState('list');
    const [back, setBack] = useState(null)


    return(

        <Panel id={id}>
            <PanelHeader before={back ? <PanelHeaderBack onClick={()=>{
                if (back ==="viewFolder") setBack("backFolder");
                if (back ==="viewTask") setBack("backView");
                if (back ==="editTask") setBack("backEdit");
                if (back ==="addTaskToFolder") setBack("backAddTaskToFolder")}} /> : null} >Q-Do</PanelHeader>
            <Tabs>
                <TabsItem
                    selected={selected==="list"}
                    onClick={() => {
                        setSelected('list');
                    }}
                >
                    Папки
                </TabsItem>
                <TabsItem
                    selected={selected==="create"}
                    onClick={() => {
                        setSelected('create');
                        setBack(null)
                    }}
                >
                    Создать
                </TabsItem>
            </Tabs>

            {selected === 'list' &&(
                <FoldersList setSelected={setSelected} setBack={setBack} back={back}/>
            )}
            {selected === 'create' &&(

                <CreateFolder/>
            )}


        </Panel>
    );}

Folders.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Folders;

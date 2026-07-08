import React, { useState,} from 'react';
import PropTypes from 'prop-types';

import {
    Panel,
    PanelHeader,
    Button,
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
                if (back ==="addTaskToFolder") setBack("backAddTaskToFolder")}} /> : null} >Note2B</PanelHeader>
            <div className="qdo-head">
                <h2 className="qdo-head__title">Папки</h2>
                {selected === 'list'
                    ? <Button size="s" onClick={() => { setSelected('create'); setBack(null); }}>Создать</Button>
                    : <Button size="s" mode="secondary" onClick={() => setSelected('list')}>Отмена</Button>}
            </div>

            {selected === 'list' &&(
                <FoldersList setSelected={setSelected} setBack={setBack} back={back} />
            )}
            {selected === 'create' &&(

                <CreateFolder setSelected={setSelected}/>
            )}


        </Panel>
    );}

Folders.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Folders;

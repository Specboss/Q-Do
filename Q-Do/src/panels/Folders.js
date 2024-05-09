import React, {useRef, useState,} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,Tabs,TabsItem,Text,Spacing, View, Input, FormItem,IconButton,FormStatus ,Textarea } from '@vkontakte/vkui';
import FoldersList from "../components/FoldersList";
import CreateFolder from "../components/CreateFolder";

const Folders = ({ id, popout }) =>{



    const [selected, setSelected] = useState('list');


    return(

        <Panel id={id}>
            <PanelHeader>Q-Do</PanelHeader>
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
                    }}


                >
                    Создать
                </TabsItem>
            </Tabs>

            {selected === 'list' &&(
                <FoldersList setSelected={setSelected} />
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

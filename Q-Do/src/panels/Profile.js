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

const Profile = ({ id }) =>{




    return(

        <Panel id={id}>
            <PanelHeader >Q-Do</PanelHeader>




        </Panel>
    );}

Profile.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Profile;
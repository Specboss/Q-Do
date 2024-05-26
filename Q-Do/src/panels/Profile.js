import React, {useEffect, useState,} from 'react';
import PropTypes from 'prop-types';
import classes from "../style/profile.module.css";

import {
    Panel,
    PanelHeader,
    Text,
    Avatar,
    Div,
    ScreenSpinner,
} from '@vkontakte/vkui';
import FoldersList from "../components/FoldersList";
import CreateFolder from "../components/CreateFolder";
import bridge from "@vkontakte/vk-bridge";

const Profile = ({ id }) =>{
    const [user, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null)

        }
        fetchData();
    }, []);



    return(

        <Panel id={id}>
            <PanelHeader >Q-Do</PanelHeader>
            <Div className={classes.profile}>
                {popout? popout:<>
                    <Text>Профиль</Text>
                    <Avatar size={96} src={user.photo_200} />
                    <Text>{user.first_name} {user.last_name}</Text>
                </>
                }
            </Div>



        </Panel>
    );}

Profile.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Profile;
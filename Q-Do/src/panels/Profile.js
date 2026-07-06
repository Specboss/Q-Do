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
    Image,
} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";
import api from "../api";

const Profile = ({ id }) =>{
    const [user, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
    const [userStats, setUserStats] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            const userStats = await api.get("/users")
            setUserStats(userStats.data)
            setUser(user);
            setPopout(null)

        }
        fetchData();
    }, []);
    const heart = '\u{1F499}'
    return(

        <Panel id={id}>
            <PanelHeader >Q-Do</PanelHeader>
            <Div className={classes.profile}>
                {popout? popout:<>
                    <Text className={classes.titletest}>Профиль</Text>
                    <Avatar size={96} src={user.photo_200} />
                    <Text className={classes.profile__name}>{user.first_name} {user.last_name}</Text>
                    <Text className={classes.profile__username}>@{user.id}</Text>

                    <Div className={classes.profile__stats}>
                        <Text>Ваши заметки: {userStats.tasks}</Text>
                        <Text>Выполненные заметки: {userStats.completedTasks}</Text>
                        <Text>Количество папок: {userStats.folder}</Text>
                    </Div>

                    <Text className={classes.profile__signature}>with {heart} by Qretex</Text>
                </>
                }
            </Div>



        </Panel>
    );}

Profile.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Profile;
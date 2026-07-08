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
            <PanelHeader >Note2B</PanelHeader>
            <Div className={classes.profile}>
                {popout? popout:<>
                    <div className={classes.avatarWrap}>
                        <Avatar size={104} src={user.photo_200} />
                    </div>
                    <Text className={classes.profile__name}>{user.first_name} {user.last_name}</Text>
                    <Text className={classes.profile__username}>@{user.id}</Text>

                    <Div className={classes.profile__stats}>
                        <div className={classes.stat}>
                            <span className={classes.statNum}>{userStats.tasks}</span>
                            <span className={classes.statLabel}>Заметки</span>
                        </div>
                        <div className={classes.stat}>
                            <span className={classes.statNum}>{userStats.completedTasks}</span>
                            <span className={classes.statLabel}>Выполнено</span>
                        </div>
                        <div className={classes.stat}>
                            <span className={classes.statNum}>{userStats.folder}</span>
                            <span className={classes.statLabel}>Папки</span>
                        </div>
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
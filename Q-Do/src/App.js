import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider,Div} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import classes from "./style/tabsBottom.module.css"

import Home from './panels/Home';
import Persik from './panels/Persik';
import {Icon16FolderOutline, Icon16ListBulletOutline,Icon20UserCircleOutline} from "@vkontakte/icons";
import axios from "axios";

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

    useEffect(() => {
        async function fetchData() {
            const token = await axios.post("http://localhost:3000/auth/login",{
                url: window.location.href
            });
            localStorage.setItem("token",token.data);
            setPopout(null);
        }

        fetchData();
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };
    console.log(window.location.href)
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <View activePanel={activePanel}>
                        <Home id='home' go={go}/>
                        <Persik id='persik' go={go}/>

                    </View>
                    <Div className={classes.tabsBottom}>
                    <Div className={classes.tabsBottomVisible}>
                        <Div  onClick={go} data-to="home" >
                            <Icon16ListBulletOutline width={30} height={30} color={activePanel ==="home" ? "#F2F2F2": "#545454"}/>
                        </Div>
                        <Div  onClick={go} data-to="persik">
                            <Icon16FolderOutline width={30} height={30} color={activePanel ==="persik" ? "#F2F2F2": "#545454"}/>
                        </Div>
                        <Div  onClick={go} data-to="profile">
                            <Icon20UserCircleOutline width={30} height={30} color={activePanel ==="profile" ? "#F2F2F2": "#545454"}/>
                        </Div>
                    </Div>
                    </Div>


                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;

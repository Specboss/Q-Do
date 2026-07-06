import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider,Div,SplitLayout, ModalCard,ModalPage,ModalRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import classes from "./style/tabsBottom.module.css"

import Home from './panels/Home';
import {Icon16FolderOutline, Icon16ListBulletOutline,Icon20UserCircleOutline} from "@vkontakte/icons";
import api from "./api";
import Folders from "./panels/Folders";
import Profile from "./panels/Profile";
import Modal from "./components/Modal";

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    useEffect(() => {
        async function fetchData() {
            const token = await api.post("/auth/login",{
                url: window.location.href
            });
            localStorage.setItem("token",token.data.access_token);
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
                        <Home id='home' popout={popout}/>
                        <Folders id='folders' />
                        <Profile id='profile' />

                    </View>

                    <Div id={'tabs'} className={classes.tabsBottom} >
                    <Div className={classes.tabsBottomVisible}>
                        <Div  onClick={go} data-to="home" >
                            <Icon16ListBulletOutline width={30} height={30} color={activePanel ==="home" ? "#F2F2F2": "#545454"}/>
                        </Div>
                        <Div  onClick={go} data-to="folders">
                            <Icon16FolderOutline width={30} height={30} color={activePanel ==="folders" ? "#F2F2F2": "#545454"}/>
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

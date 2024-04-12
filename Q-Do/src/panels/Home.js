import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,Tabs,TabsItem,Text } from '@vkontakte/vkui';
import {Icon12Articles, Icon28ArticlesOutline} from "@vkontakte/icons";

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Q-Do</PanelHeader>
		<Tabs>
			<TabsItem
				selected={true}
				id="tab-news"
				aria-controls="tab-content-news"
			>
				Заметки
			</TabsItem>
			<TabsItem

				id="tab-recommendations"
				aria-controls="tab-content-recommendations"
			>
				Создать
			</TabsItem>
		</Tabs>
		<Div style={{
			display:"flex",
			alignItems: "center",
			flexDirection: "column"

		}}>

			<Icon12Articles width={58} height={46} color={"#2688EB"}/>
			<Text  style={{
				fontSize:"20px",
				weight:"500"
			}}>У Вас нет заметок</Text>
			<Button size={'l'}>
				<Text weight={'1'}   style={{
				fontSize:"14px",


			}}>Добавить</Text>
			</Button>
		</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

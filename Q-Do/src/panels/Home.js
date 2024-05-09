import React, {useRef, useState,} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,Tabs,TabsItem,Text,Spacing, View, Input, FormItem,IconButton,FormStatus ,Textarea } from '@vkontakte/vkui';
import {Icon12Articles, Icon20ListPlusOutline, Icon28ArticlesOutline,Icon16CheckDoubleOutline} from "@vkontakte/icons";
import Task from "../components/Task";
import TasksList from "../components/TasksList";
import CreateTask from "../components/CreateTask";

const Home = ({ id, popout }) =>{



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
				Заметки
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
			<TasksList setSelected={setSelected} popout={popout}/>
			)}
		{selected === 'create' &&(

			<CreateTask/>
			)}


	</Panel>
);}

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;

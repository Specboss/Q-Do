import React, {useRef, useState,} from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	Header,
	Button,
	Group,
	Cell,
	Div,
	Avatar,
	Tabs,
	TabsItem,
	Text,
	Spacing,
	View,
	Input,
	FormItem,
	IconButton,
	FormStatus,
	Textarea,
	PanelHeaderBack
} from '@vkontakte/vkui';
import {Icon12Articles, Icon20ListPlusOutline, Icon28ArticlesOutline,Icon16CheckDoubleOutline} from "@vkontakte/icons";
import Task from "../components/Task";
import TasksList from "../components/TasksList";
import CreateTask from "../components/CreateTask";

const Home = ({ id, popout }) =>{
	const [selected, setSelected] = useState('list');
	const [back, setBack] = useState(null)

	return(

	<Panel id={id}>
		<PanelHeader before={back ? <PanelHeaderBack onClick={()=>{back ==="viewTask"? setBack("backView"): setBack("backEdit")}} /> : null} >Q-Do</PanelHeader>
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
			<TasksList setSelected={setSelected} popout={popout} setBack={setBack} back={back}/>
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

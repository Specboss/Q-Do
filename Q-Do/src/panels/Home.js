import React, {useRef, useState,} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,Tabs,TabsItem,Text,Spacing, View, Input, FormItem,IconButton,FormStatus ,Textarea } from '@vkontakte/vkui';
import {Icon12Articles, Icon20ListPlusOutline, Icon28ArticlesOutline,Icon16CheckDoubleOutline} from "@vkontakte/icons";
import Task from "../components/Task";
import TasksList from "../components/TasksList";

const Home = ({ id, go, popout }) =>{

	const [inputText,setInputText] = useState('')

	const [selected, setSelected] = useState('list');
	const [textareaText,setTextareaText] = useState('')

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


			<Div  style={{
				height: "80vh",
				display:"flex",
				alignItems: "center",
				flexDirection: "column",

			}}>

				<Spacing size={20} />


				<FormItem
					style={{
						paddingBottom: "0",
					}}
					htmlFor="inputName"

				>
					<Input
						style={{
							width: "85vw",



						}}

						id="inputName"
						value={inputText}
						onChange={(event) => setInputText(event.target.value)}
						type="text"
						placeholder="Название заметки"

					/>
					{/*{successful && <FormStatus header="Задача добавлена успешно" >*/}
					{/*</FormStatus>}*/}

				</FormItem>

				<FormItem
					htmlFor="inputTask"

				>
					<Textarea
						style={{
							width: "85vw",



						}}
						rows={15}

						id="inputTask"
						value={textareaText}
						onChange={(event) => setTextareaText(event.target.value)}
						type="text"
						placeholder="Описание..."

					/>
					{/*{successful && <FormStatus header="Задача добавлена успешно" >*/}
					{/*</FormStatus>}*/}

				</FormItem>
				{/*<Div  style={{*/}
				{/*	paddingRight:"0",*/}
				{/*	display:"flex",*/}
				{/*	alignItems: "flex-end",*/}
				{/*	flexDirection: "column",*/}

				{/*}}>*/}
					<Button style={{
						width: "10px",
					}} mode={"secondary"}><Icon16CheckDoubleOutline  width={16} height={16} color={(inputText && textareaText) ? "#26EB51": "#ACACAC"}/></Button>


				{/*</Div>*/}
			</Div>)}


	</Panel>
);}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;

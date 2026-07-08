import React, { useState,} from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	Button,
	PanelHeaderBack
} from '@vkontakte/vkui';
import TasksList from "../components/TasksList";
import CreateTask from "../components/CreateTask";

const Home = ({ id, popout }) =>{
	const [selected, setSelected] = useState('list');
	const [back, setBack] = useState(null)

	return(

	<Panel id={id}>
		<PanelHeader before={back ? <PanelHeaderBack onClick={()=>{back ==="viewTask"? setBack("backView"): setBack("backEdit")}} /> : null} >Note2B</PanelHeader>
		<div className="qdo-head">
			<h2 className="qdo-head__title">Заметки</h2>
			{selected === 'list'
				? <Button size="s" onClick={() => { setSelected('create'); setBack(null); }}>Создать</Button>
				: <Button size="s" mode="secondary" onClick={() => setSelected('list')}>Отмена</Button>}
		</div>

		{selected === 'list' &&(
			<TasksList setSelected={setSelected} popout={popout} setBack={setBack} back={back}/>
			)}
		{selected === 'create' &&(

			<CreateTask setSelected={setSelected} />
			)}


	</Panel>
);}

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;

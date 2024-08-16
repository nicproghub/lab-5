import { useState } from 'react';

function Task(props) {
	console.log(props);

	function onChange(){
		//find the task we want to update and update it
		props.setTasks(tasks=> tasks.map(t => {
			if (t.id === props.id) {
				return{
					id: t.id,
					description: t.description,
					completed: !t.completed
				};
			} else {
				return t;
			}
		}
		)
		);

	}

	function o_Click(){
		//find the task we want to update and update it
		props.setTasks(tasks=> tasks.filter(t => t.id !== props.id)
		);

	}

	return (
		<li>
			<button 
				type="button" onClick={o_Click}>Del</button>
			{ props.description } 
			<input 
				type="checkbox" 
				checked={props.completed} 
				onChange={onChange} 
			/>
		</li>
	);
}

function List(props) {
	const [newTask, setNewTask] = useState("");
	function text_Change(event)
	{
		setNewTask(event.target.value);
	}
	function add_Click()
	{
		props.setTasks(tasks=>[...tasks,{
									id:tasks.length+1,
									description:newTask,
									completed:false
										}]

		);
	}
	return (
		<div>
			<h1>{ props.heading }</h1>
			<b>Add Task</b>
			<input type="text"
					placeholder="Add a new task here..."
					onChange={text_Change}/>
			<button type="button" onClick={add_Click}>Add</button>
			<ul>
				{ props.tasks.map(t => 
					<Task
						setTasks={props.setTasks} 
						id={t.id}
						description={t.description} 
						completed={t.completed} 
				/>) }
			</ul>
		</div>
	);
}

export default List;

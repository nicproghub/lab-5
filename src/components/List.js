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

	return (
		<div>
			<h1>{ props.heading }</h1>
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

import { useState } from 'react';
import List from './components/List';
import './App.css';

function App() {

    const [c_tasks, c_setTasks] = useState([
        { id:1, description: 'Learn React', completed: true },
        { id:2, description: 'Learn JSX', completed: false },
        { id:3, description: 'Build a React App', completed: false }
    ]);

    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={c_tasks} setTasks={c_setTasks}/>
        </div>
    );
}

export default App;

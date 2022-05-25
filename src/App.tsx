import React, { FC, ChangeEvent, useState} from 'react';
import { ITask } from './Interfaces'
import './App.css';
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  let [task, setTask] = useState<string>('');
  let [deadline, setDeadline] = useState<number>(0);
  let [todoList, setTodoList]=useState<ITask[]>([]);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) :void=> { 
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else { 
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {taskName:task, deadline: deadline}
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);

  }
  const completeTask = (taskToDelete:string):void => { 
    setTodoList(todoList.filter((task)=> { 
      return task.taskName!=taskToDelete
    }))
  }


  return (
    <div className="app-wrapper">
      <div className="header-wrapper">
        <hr />
        <button className="header-btn btn-t">T</button>
        <button className="header-btn btn-o">O</button>
        <button className="header-btn btn-d">D</button>
        <button className="header-btn btn-o2">O</button>
      </div>

      <div className="input-wrapper">

        <input
          type="text"
          placeholder="what to do......"
          name="task"
          onChange={handleChange}
          value={task}
        />
        <input
          type="number"
          placeholder="how many days left?"
          name="deadline"
          value={deadline}
          onChange={handleChange}
        />
        <button onClick={addTask} className='add-btn'>+</button>
      </div>
      <div className="todo-lists">
        {todoList.map((task:ITask, key:number) => { 
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    
    </div>
  );
}

export default App;

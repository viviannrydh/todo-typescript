import React from 'react'
import { ITask } from '../Interfaces';

interface Props { 
  task: ITask;
  completeTask(taskToDelete:string): void;
}



const TodoTask = ({ task,completeTask }:Props) => {
  return (
    <div className="todo-list">
      <button className="todo-name">{task.taskName}</button>
      <button className="todo-deadline">{task.deadline}</button>
      <button className="close-btn" onClick={()=>completeTask(task.taskName)}>X</button>
      <hr />
    </div>
  )
}

export default TodoTask

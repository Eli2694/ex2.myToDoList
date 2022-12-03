import React from 'react'
import { useState } from 'react'
import { AddWorkItem } from '../addWorkItem/addWorkItem.component'
import { WorkItem } from '../workItem/workItem.component';


export const ToDoList = () => {
  const [message,setMessage] = useState('');
  const [todoArr,setTodoArr] = useState([])

  const handleAddTask = () =>{
    let newTask = {id:todoArr.length + 1,task: message };
    let newToDoArr = [...todoArr,newTask];
    setTodoArr(newToDoArr); 
  }

  const handleDelete = (id) =>{
    let arrAfterDelete = todoArr.filter((t) => t.id !== id);
    setTodoArr(arrAfterDelete);
  }

  const handleChangeEvent = (event) => {
    //Get input value from event
    setMessage(event.target.value);
  }
  return (
    <>
    <AddWorkItem handleClick={handleAddTask} handleChange={handleChangeEvent}></AddWorkItem>
    {todoArr.map((t) => {
      return <WorkItem id={t.id} text={t.task} handleDelete={handleDelete}></WorkItem>
    })}
    </>
  )
}

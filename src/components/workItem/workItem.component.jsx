import React from 'react'
import './workItem.css'


export const WorkItem = ({id,text,handleDelete}) => {
  return (
    <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Task</h5>
    <p className="card-text">{text}</p>
    <button onClick={() => handleDelete(id)} className="btn btn-primary">Done</button>
  </div>
</div>
  )
}

import React from 'react'
import './addWorkItem.css'


export const AddWorkItem= ({handleChange,handleClick}) => {
  return (
    <div className="input-group mb-3">
  <input type="text" 
  className="form-control" 
  placeholder="Enter Task..." 
  aria-label="Enter Task..." 
  aria-describedby="button-addon2" 
  onChange={handleChange}
  />
  <button onClick={handleClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Add Task</button>
</div>
  )
}

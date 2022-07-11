import React, { useState } from 'react';
import useInputHook from './Hooks/UseInputHook';

const TodoItem = ({todo, deleteTodo, toggleTodo, completed, editTodo}) => {
  const [isEditMode, setIsEdit] = useState(false);

  const [value, handleChange] = useInputHook(todo.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEdit(false);
    editTodo(todo.id, value);
  }
  
  return (
    <div className="list-item">
        <div className="box-input">
          <input 
          onChange={() => toggleTodo(todo.id)} 
          type="checkbox" 
          defaultChecked={completed}
          />
          {isEditMode ? 
          <form 
          onSubmit={handleSubmit}
          className="edit-form">
            <input value={value} onChange={handleChange} type="text" autoFocus/>
            <div>
              <button type="submit" className="save">Save</button>
            </div>
          </form> 
          : 
          (  <div style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {todo.text}
        </div>)
          }
        
        </div>
    
      <div>
         <button onClick={() => setIsEdit(!isEditMode)} className="edit">Edit</button>
         <button onClick={() => window.confirm('Are you sure you wish to delete this todo?') ? deleteTodo(todo.id) : ''} className="delete">Delete</button>
      </div>

    </div>
  );
};

export default TodoItem;

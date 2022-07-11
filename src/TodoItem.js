import React, { useState } from 'react';

const TodoItem = ({todo, deleteTodo}) => {
 
  const [completed, setCompleted] = useState(todo.completed);
 
  return (
    <div className="list-item">
        <div className="box-input">
          <input type="checkbox" defaultChecked={completed}/>
          <div style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {todo.text}
          </div>
        </div>
    
      <div>
         <button className="edit">Edit</button>
         <button onClick={() => deleteTodo(todo.id)} className="delete">Delete</button>
      </div>

    </div>
  );
};

export default TodoItem;

import React from 'react';
import useInputHook from './Hooks/UseInputHook'

const TodoForm = ({addTodo}) => {
  
  const [value, handleChange, resetValue] = useInputHook('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    resetValue();
    addTodo(value);
  }
  
  return (
    <div className="info">
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={value} autoFocus />
      </form>
    </div>
  );
};

export default TodoForm;

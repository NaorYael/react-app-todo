import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const InitialTodos = [
   {id: 1, text: 'Learn React', completed: true},
   {id: 2, text: 'Learn Flutter', completed: false},
   {id: 3, text: 'Learn Node js', completed: false}
];

const TodoApp = () => {
  const [todos, setTodos] = useState(InitialTodos);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), text: todo, completed: false }])
  }

  const deleteTodo = (todoId) => {
    // filter todo that we want to delete
    const filterdTodos = todos.filter((todo) => todoId !== todo.id);

    // set todos after the delete change
    setTodos(filterdTodos);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </div>
  ); 
};

export default TodoApp;

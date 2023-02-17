import React, { useState } from 'react';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === '') {
      return;
    }
    setTodoList([...todoList, newTodo.trim()]);
    setNewTodo('');
  };

  function removeItem(index) {
    setTodoList(todoList.filter((_, i) => i !== index));
  }
  

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button type="submit">Add</button>
        
      </form>
      <ul>
        {todoList.map((todo, index) => (
            <>
          <li key={index}>{todo}</li>
          <button onClick={() => removeItem(index)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

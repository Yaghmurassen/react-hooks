import React, { Fragment, useState, useEffect } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo.."
        onChange={e => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Ma bite ton cul",
      isCompleted: false
    },
    {
      text: "Ma bite ton cul",
      isCompleted: false
    },
    {
      text: "Ma bite ton cul",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );

  //////////////////// EQUIVALENT ///////////////
  // return (
  //   <div className="app">
  //     <div className="todo-list">
  //       {todos.map((todo, index) => (
  //         <div key={index} index={index} className="todo">
  //           {todo.text}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default App;

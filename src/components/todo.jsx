import { useState } from 'react';

const Todoapp = () => {

  const [todos, setTodos] = useState([ 
    { value: "mariyam" },  
    { value: "fatima" }
  ]);
  
  const [value, setValue] = useState(""); // Initialize value for the input field

  const addTodo = () => {
    // Only add todo if the input value is not empty
    if (value.trim()) {
      setTodos([...todos, { value }]);
      setValue(""); // Clear the input field after adding the todo
    } else {
      alert("Todo cannot be empty!"); // Optional: show an alert if the todo is empty
    }
  }

  return (
    <div className="container">
      <input
        type="text"
        value={value} // Bind input field value to state
        onChange={(e) => setValue(e.target.value)} // Update the value state on change
      />
      <button onClick={addTodo}>Add todo</button>
      <br />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.value}</li> // Render each todo value
        ))}
      </ul>
    </div>
  );
}

export default Todoapp;
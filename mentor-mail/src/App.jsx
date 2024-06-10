import React from 'react';
import './App.css'; // Importing CSS for styling
import TodoList from './components/TodoList'; // Importing the TodoList component
import Login from './components/Login'; // Importing the Login component
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Rendering the Login component */}
      {/* Uncomment the following line to render TodoList after successful login */}
      <Login/>
    </div>
  );
}

export default App;

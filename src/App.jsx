import React, { useState } from "react";

import "./App.css"

import { Tasks } from "./components/tasks"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false, 
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
])

  return (
  <div className="container">
    <Tasks tasks={tasks}/>
  </div>  
)
};

export default App
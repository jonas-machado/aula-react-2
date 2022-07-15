import React, { useState } from "react";

import "./App.css"

import { Task } from "./components/tasks"
import { AddTask } from "./components/AddTask";

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
    <AddTask />
    <Task tasks={tasks}/>
  </div>  
)
};

export default App
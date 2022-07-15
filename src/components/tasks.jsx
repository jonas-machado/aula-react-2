import React from "react";
import './Task.css'

export function Tasks({ task }) {
    return (
    <div className="task-container">
    <h1>{task.title}</h1>
    </div>
    
    )
};


export function Task({ tasks }) {
    return (
    <>
    {tasks.map((task) =>(
    <Tasks task={task} />)
    )}
    </>
    
    )
};

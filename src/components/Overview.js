import React from "react";

const Overview = ({tasks, removeTask}) => {
    return (
        <ul>
            {tasks.map((task)=>{
                return <li key = {task.id}>{task.text} <button onClick = {()=>{removeTask(task.id)}}>Delete</button></li>;
            })}
        </ul>
    );
};
export default Overview;
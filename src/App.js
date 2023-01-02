import React, {useState} from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

function App() {
  const [task, setTask] = useState({text:'', id: uniqid()});
  const [tasks, setTasks] = useState([]);
  const handleChange = (e)=>{
    setTask({text: e.target.value, id: task.id});
  };
  const onSubmitTask = (e)=>{
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({text: '', id: uniqid()});
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    console.log("Removing " + taskId);
  }

 
  return (
    <div className="App">
      
      <form onSubmit = {onSubmitTask}>
        <label htmlFor = "taskInput">Enter task</label>
        <input onChange = {handleChange} value = {task.text} type = "text" id = "taskInput"/>
        <button type = "submit">
          Add Task
        </button>
      </form>
      <Overview tasks={tasks} removeTask = {removeTask}/>
    </div>
  );
}

export default App;

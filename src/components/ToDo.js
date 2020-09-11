import React, { useState } from "react";
 



export default function ToDo() {
    const [newTask, setNewTask] = useState();
// in  useState() is the default value for this state.
    const [toDos, setToDos] = useState([
        {
            task: "Buy Milk"
        },
        {
            task: "Learn React"
        },
        {
            task: "Find out what React is"
        }
    ].map((toDo,index) => <li key={index}>{toDo.task}</li>))
    return (
        <>
            <form>
                <label htmlFor="task">New Task:</label>
                <input
                    type="text"
                    id="task"
                    onChange={e => { setNewTask(e.target.value) }}
                    value={newTask} />
             
                <input type="submit" value="Add To-Do" />
                <p>
                    <strong>Task:</strong>
                        <input value={newTask}/>
                    
                </p>
            </form>
            <ul>
              {toDos}
            </ul>
        </>
    );
}
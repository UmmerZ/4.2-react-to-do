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
    ])
    //
    const addNewTask = event => {
        event.preventDefault();
        // add to do list 
        // we can use ... spread operrator to break up an array
        //so that each item inside is treated (value sepated by commas)
        //if we were to write it manually'
        const newToDoList = [...toDos];
        //renenber we never update the stte variable directly.
    
        newToDoList.push({ task: newTask });

        //update the state
        setToDos(newToDoList);
        setNewTask('');
    }
    return (
        <>
            <form onSubmit={addNewTask}>
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
              {toDos.map((toDo,index) => <li key={index}>{toDo.task}</li>)}
            </ul>
        </>
    );
}
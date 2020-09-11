import React from 'react';

export default function ToDo()
{
    return (
        <>
            <form>
                <label htmlFor="task">New Task:</label>
                <input type="text" id="task" />
                <input type="submit" value="Add To-Do"/>
            </form>
            <ul>
                
            </ul>
        </>
    );
}
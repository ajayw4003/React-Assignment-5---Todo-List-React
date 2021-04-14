import React from 'react';
import "./../styles/App.css";

const Input = ({handleInput, addToDo, todo}) => {
    return (
        <div className = "form">
            <textarea 
                className ="task"
                id ="task" 
                placeholder = "Add To Do" 
                onChange = {(event) => handleInput(event.target.value)}
                value = {todo}
                />

            <button 
                className = "btn" 
                type = "submit" 
                onClick = {() => addToDo()}>ADD</button>
        </div>
    );
};

export default Input;
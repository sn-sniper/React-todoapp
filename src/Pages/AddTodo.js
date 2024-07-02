import React, { useRef, useContext } from 'react';
import { TodoContext } from './TodoContext';
import { useNavigate } from 'react-router-dom';
import "../Styles/AddTask.css";

const AddTodo = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const inputRef = useRef();
    const navigate = useNavigate();

    const addTodo = () => {
        const newTodo = inputRef.current.value;
        if (newTodo) {
            setTodos([...todos, newTodo]);
            navigate('/');
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };
    const GoBack = () =>{
        navigate('/')
    }
    return (
        <div className='addContainer'>
            <span className='back-arrow' onClick={GoBack}><ion-icon name="chevron-back-outline"></ion-icon></span>
            <div className='AddForm'>
                <h1>add-task</h1>
                <input type='text' onKeyDown={handleKeyPress} ref={inputRef} placeholder="New Todo"/>
                <button onClick={addTodo} className='addBtn'>Add Task</button>
            </div>
        </div>
    );
};

export default AddTodo;

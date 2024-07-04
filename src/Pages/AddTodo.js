import React, { useRef, useContext } from 'react';
import { TodoContext } from './TodoContext';
import { useNavigate } from 'react-router-dom';
import "../Styles/AddTask.css";

const AddTodo = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const TitleRef = useRef();
    const ContentRef = useRef();
    const navigate = useNavigate();

    const addTodo = () => {
        const newTitle = TitleRef.current.value;
        const newContent = ContentRef.current.value;
        if (newTitle && newContent) {
            setTodos([...todos, { Title : newTitle , Content : newContent}]);
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
                <input type='text' ref={TitleRef} placeholder="New Todo Title"/>
                <textarea type='text' onKeyDown={handleKeyPress} ref={ContentRef} placeholder='New Todo Text'/>
                <button onClick={addTodo} className='addBtn'>Add Task</button>
            </div>
        </div>
    );
};

export default AddTodo;

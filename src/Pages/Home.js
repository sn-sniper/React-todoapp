import React, { useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext';
import "../Styles/Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const navigate = useNavigate();  // Changed to lowercase

    const goToAdd = () => {  // Changed function name to camelCase
        navigate('/add-todo');
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <div>
            <h1 className='header'>To Do List</h1>
            <ul className='list-container'>
                {todos.slice().map((todo, index) => (  // Slice and reverse for immutability
                    <li className='card' key={index}>
                        <span className='stick'>{todo.Title}</span>
                        {todo.Content}
                        <span className='deleteBtn' onClick={() => deleteTodo(index)}><ion-icon name="trash-outline"></ion-icon></span>
                        <div className='card-edge'></div>
                        <div className='card-edge-tr'></div>
                    </li>
                )).reverse()}
                <div className='add-card' onClick={goToAdd}><span>+</span></div>
                
            </ul>
        </div>
    );
};

export default Home;

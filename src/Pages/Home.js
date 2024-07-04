import React, { useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext';
import "../Styles/Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { todos ,setTodos } = useContext(TodoContext);
    const Navigate = useNavigate();

    const GoToAdd = () => {
        Navigate('/add-todo')
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };


    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <React.Fragment>
            <div>
                <h1 className='header'>To Do List</h1>
                <ul className='list-container'>
                    {todos.map((todo, index) => (
                        <li className='card' key={index}>
                            <span className='stick'></span>
                            {todo}
                            <span className='deleteBtn' onClick={ () => deleteTodo(index)}><ion-icon name="trash-outline"></ion-icon></span>
                        </li>
                    )).reverse()}
                    <div className='add-card' onClick={GoToAdd}><span>+</span></div>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Home;

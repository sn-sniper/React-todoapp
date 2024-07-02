import React, { useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext';
import "../Styles/Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { todos } = useContext(TodoContext);
    const Navigate = useNavigate();

    const GoToAdd = () => {
        Navigate('/add-todo')
    }

    // const DeleteTodo = (index) => {
    //     const updatedTasks = todos.filter((element, i) => i !== index)
    // }


    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <React.Fragment>
            <div>
                <h1 className='header'>To Do List</h1>
                <ul className='list-container'>
                    {todos.map((todo, index) => (
                        <li className='card' key={index}>{todo}
                            {/* <span className='deleteBtn' onClick={DeleteTodo()}><ion-icon name="trash-outline"></ion-icon></span> */}
                        </li>
                    )).reverse()}
                    <div className='add-card' onClick={GoToAdd}><span>+</span></div>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Home;

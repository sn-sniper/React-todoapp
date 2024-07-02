import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './Pages/TodoContext';
import Home from './Pages/Home';
import AddTodo from './Pages/AddTodo';
import "./Styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;

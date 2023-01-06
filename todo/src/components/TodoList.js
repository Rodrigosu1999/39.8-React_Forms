import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import Todo from "./Todo";
import defaultTodoList from "../helpers/defaultTodoList";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const INITIAL_STATE = defaultTodoList;
    const [items, setItems] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setItems(items =>[...items, {...newTodo, id:uuid()}])
    }

    const deleteTodo= (id) =>{
        const newTodoList = items.filter((item) => item.id !== id);
        setItems(newTodoList);
    }

    return (
        <div className="TodoList">
            <h1 className="Todo-title">Todo List</h1>
            <div className="Todo-items">{items.map(item => 
                <Todo  id={item.id} task={item.task} deleteTodo={() => deleteTodo(item.id)}/>)}
            </div>
            <NewTodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoList;
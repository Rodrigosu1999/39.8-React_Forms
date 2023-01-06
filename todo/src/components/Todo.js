import React, { useState } from "react";
import defaultTodoList from "../helpers/defaultTodoList"

function Todo({id, task, deleteTodo}) {
    return (
        <div className="Todo"  id={id}>
            <span className="Todo-task">
                {task}
            </span>
            <button onClick={deleteTodo}>X</button>
        </div>
    );
}

export default Todo;
import React from 'react';
import './TodoTemplate.scss';

function TodoTemplate( { children } ){
    return(
        <div className="container">
            <div className="todo-title">
                <h1>TODO LIST</h1>
            </div>
            <div className="todo-content">
                { children }
            </div>
        </div>
    )
}
export default TodoTemplate;
import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList(props){
    return(
        <div>
            <div className="TodoList">
                <TodoListItem todos={props.todos}/>
                <TodoListItem />
                <TodoListItem />
            </div>
        </div>
    );
};

export default TodoList;
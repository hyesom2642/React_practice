import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineRemoveCircleOutline  } from "react-icons/md";
import './TodoListItem.scss';

function TodoListItem(props){
    return(
        <div>
            <div className="TodoListitem">
                <div className="TodoListitem-checkbox">
                    <MdCheckBoxOutlineBlank />
                    <div className="TodoListitem-text"> { props.todos } </div>
                </div>
                <div className="TodoListitem-remove">
                    <MdOutlineRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default TodoListItem;
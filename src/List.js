import React, { useState } from 'react';
import './List.css';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {

    const [line, setLine] = useState(false)
    const cutIt =() =>{
        setLine(true)
    }
    return (
        <div className='todo_style'>
        <span onClick={cutIt}>
            <DeleteIcon className='delete_btn' />
        </span>
            <li style={{ textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
}

export default List

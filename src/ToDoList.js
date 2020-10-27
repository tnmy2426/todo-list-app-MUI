import React, { useState } from 'react';
import './ToDoList.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List';

const ToDoList = () => {

    const [inputItem, setinputItem] = useState('')
    const inputItemHandle = (event) =>{
        setinputItem(event.target.value)
    };

    const [items, setitems] = useState([])
    const addToList = () =>{
        setitems((oldItem)=>{
            return [...oldItem, inputItem]
        });
        setinputItem("");
    };

    return (
        <>
            <input type='text' placeholder='Add an Item' value={inputItem} onChange={inputItemHandle} />
            <Button className='add_btn' onClick={addToList}>
                <AddIcon />
            </Button>
            <br/>
            <ol>
                {
                    items.map((currValue, index)=>{
                        return <List text={currValue} key={index} />
                    })
                }
            </ol>
        </>
    )
}

export default ToDoList

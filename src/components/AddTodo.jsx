import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

function AddTodo() {
    const [input,setInput] = useState('');

    const dispatch= useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            enter text: 
            <input type="text" placeholder='enter text'
                value={input}
                onChange={(e)=>(setInput(e.target.value))}
            />
        </form>
    </div>
  )
}

export default AddTodo
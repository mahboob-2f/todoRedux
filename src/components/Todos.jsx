import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../redux/slices/todoSlice';

function Todos() {

    const todos = useSelector(state=>state.todo.todos);
    const dispatch = useDispatch();

  return (
    <div>
        {
            todos.map((todo)=>(
                <div  key={todo.id}>
                    <li>id : {todo.id} -  text :<span className='text-[green] font-semibold'> {todo.text}</span></li>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
                    <button onClick={()=>dispatch(updateTodo({id:todo.id,text:"mahi"}))}>update</button>
                </div>
                
            ))  
        }
        
    </div>
  )
}

export default Todos
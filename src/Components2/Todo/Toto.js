import {React,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtodo } from '../slices/todoSlice'
import {deleteTodo} from '../slices/todoSlice'








const Toto = () => {
    const dispatch=useDispatch()
    let todos=useSelector((state)=>state.todo1)
    const [text,settext]=useState('')

    console.log(todos)

   
    const handleclick=()=>{
        dispatch(addtodo(text))
    }
const handlechange=(e)=>{
     settext(e.target.value)
    

}

const delet = (id) => {
    dispatch(deleteTodo(id)); // Assuming you have a deleteTodo action
};

  return (
    <div className='container'>

        <input type='text' id="inputtodo" onChange={handlechange}></input>
         <button onClick={handleclick}>add</button>

        <ul className='unorderlist'>
        {todos.map((todo)=>{
            return <div key={todo.id}>
                <li >{todo.text} </li>
                
                </div>
        })}

        </ul>
      
    </div>
  )
}

export default Toto

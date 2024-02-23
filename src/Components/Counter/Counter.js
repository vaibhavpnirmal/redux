import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement } from '../slices/Counterslice'


const Counter = () => {
    const count=useSelector((state)=> state.counter.value)
    const dispatch=useDispatch()

    
  return (
    <div>
      <h1>this is counter</h1>
      <h2>{count}</h2>
      <button onClick={()=> dispatch(increment())}>increase</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    </div>
  )
}

export default Counter

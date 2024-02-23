import React from 'react'
import { increment,decrement } from '../slices/counterSlice1'
import { useSelector,useDispatch } from 'react-redux'

const Counter1 = () => {

    const count=useSelector((state)=>state.counter1.value)
    const dispatch=useDispatch();
  return (
    <div>
      <h1>this is counter 2</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}> increase</button>
      <button onClick={()=>dispatch(decrement())}>decrease</button>
    </div>
  )
}

export default Counter1

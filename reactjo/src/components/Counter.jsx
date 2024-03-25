import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(1)
    const [increaseBy, setIncreaseBy] = useState(2)
    function increment(){
        setCount (count + increaseBy)
    }
    function decrement(){
        setCount (count - increaseBy)
    }
    function increaseInc(){
        setIncreaseBy (increaseBy + 2)
    }
    function decreaseInc(){
        setIncreaseBy (increaseBy - 1)
    }
    return (
      <div>
        <h1>Count value is: {count} </h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>

        <h1>We are increasing the value by: {increaseBy}</h1>
        <button onClick={increaseInc}>Increase</button>
        <button onClick={decreaseInc}>Decrease</button>
      </div>
    )
    
    
}
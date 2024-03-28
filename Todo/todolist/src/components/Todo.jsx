import { useState } from "react"
import TodoItem from "./Todoitem"
import styles from "./addbtn.module.css"

export default function Todo(){
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            onChange={(e)=>setTodo(e.target.value)} 
            value={todo}
            type="text" />
            <button className={styles.btn} type="submit">Add</button>
        </form>
        {todos.map((item)=>(
            <TodoItem key={item} item={item} />
        ))} 
    </div>
    )
}
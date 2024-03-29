import { useState } from "react"
import styles from "./form.module.css"

export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
            <input
            className={styles.input} 
            onChange={(e)=>setTodo(e.target.value)} 
            value={todo}
            type="text" 
            placeholder="Write your plans here..."
            />
            <button className={styles.btn} type="submit">Add</button>
        </form>
        </div>
    )
}
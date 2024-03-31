import Form from "./Form"
import { useState } from "react"
import Todolist from "./Todolist"


export default function Todo(){
    const [todos, setTodos] = useState([])
    return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
         <Todolist  setTodos={setTodos} todos={todos}/>
    </div>
    )
}
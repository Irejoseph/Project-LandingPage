import Form from "./Form"
import { useState } from "react"
import Todolist from "./Todolist"
import Footer from "./Footer"


export default function Todo(){
    const [todos, setTodos] = useState([])
    const complTodo = todos.filter((todo) => todo.done).length
    const totalTask = todos.length
    return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <Todolist  setTodos={setTodos} todos={todos}/>
        <Footer complTodo={complTodo} totalTask={totalTask}/>
    </div>
    )
}
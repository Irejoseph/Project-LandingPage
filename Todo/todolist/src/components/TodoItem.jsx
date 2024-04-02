import { useState } from "react"
import styles from "./todoitem.module.css"

export default function TodoItem({ item, todos, setTodos }) {
    function handleDel(item){
        console.log("I think I'm gonna go...", item)
        setTodos(todos.filter((todo) => todo !== item))
    }

    function handleClick(name) {
        setTodos(todos.map((todo) => 
            todo.name === name ? {...todo, done:!todo.done} : todo))
        console.log(todos)
    }

    const className = item.done ? styles.strikethrough : ''

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span onClick={() => handleClick(item.name)} className={className}>
                {item.name}
                </span>
                <span>
                <button onClick={() => handleDel(item)} className={styles.delBtn}>X</button>
            </span>
            </div>
            
            <hr className={styles.line}/>
        </div>
    )
}
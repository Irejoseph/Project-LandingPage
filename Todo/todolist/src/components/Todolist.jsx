import TodoItem from "./Todoitem"
import styles from "./todolist.module.css"

export default function Todolist({ todos, setTodos }){
    const sortedTask = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))
    return (
    <div className={styles.list}>
        {sortedTask.map((item)=>(
            <TodoItem 
                key={item.name} 
                item={item} 
                todos={todos} 
                setTodos={setTodos}
            />
        ))}
    </div>
    )
}
import styles from "./todoitem.module.css"

export default function TodoItem({ item, todos, setTodos }) {
    function handleDel(item){
        console.log("I think I'm gonna go...", item)
        setTodos(todos.filter((todo) => todo !== item))
    }
    function check(name){
        console.log("Buy", name)
        
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span onClick={() => check(item.name)}>
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
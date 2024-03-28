import styles from "./header.module.css"

export default function Header(){
    return (
    <div>
        <h1 className={styles.header}>Your To do List</h1>
        <p className={styles.p}>Welcome to your to do list, shall we begin making plans?</p>
    </div>
    )
}
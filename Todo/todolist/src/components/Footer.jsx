import styles from "./footer.module.css"

export default function Footer({complTodo, totalTask}){
    return (
        <div className={styles.footer}>
            <span>Completed Tasks: {complTodo} of {totalTask}</span>
        </div>
    )
}
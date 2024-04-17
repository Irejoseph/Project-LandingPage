import styles from "./innercont.module.css"

export default function Innercont({ children }){
    return <div className={styles.innerCont}>{children}</div>
}
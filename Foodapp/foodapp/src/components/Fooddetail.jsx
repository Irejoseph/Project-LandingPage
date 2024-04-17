import styles from "./fooddetail.module.css"

export default function Fooddetail({ children }){
    return <div className={styles.parentCont}>{children}</div>
}
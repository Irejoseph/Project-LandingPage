import styles from "./fooditem.module.css"

export default function FoodItem({ food }){
    return (
        <div className={styles.itemCont}>
            <img className={styles.itemImg} src={food.image} alt="" />
            <h1>{food.title}</h1>
            <button className={styles.itemBtn}>Show Recipe</button>
        </div>
    )
}
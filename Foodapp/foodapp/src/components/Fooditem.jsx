import styles from "./fooditem.module.css"

export default function FoodItem({ food, setFoodId }){
    return (
        <div className={styles.itemCont}>
            <img className={styles.itemImg} src={food.image} alt="" />
            <div className={styles.itemTitle}>
                <h1 className={styles.itemName}>{food.title}</h1>
            </div>
            <div className={styles.btnCont}>
                <button 
                    onClick={() => {
                        console.log(food.id)
                        setFoodId(food.id)}} 
                    className={styles.itemBtn}>Show Recipe</button>
            </div>
            
        </div>
    )
}
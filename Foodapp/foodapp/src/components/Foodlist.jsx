import FoodItem from "./Fooditem";

export default function FoodList({ foodData, setFoodId }){
    if (!Array.isArray(foodData)) {
        return <div>No food data available.</div>;
      }
    return (
        <div>
            {foodData.map((food) => (
                <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
            ))}
        </div>
    )
}

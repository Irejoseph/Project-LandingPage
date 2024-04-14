import FoodItem from "./Fooditem";

export default function FoodList({ foodData }){
    if (!Array.isArray(foodData)) {
        return <div>No food data available.</div>;
      }
    return (
        <div>
            {foodData.map((food) => (
                <FoodItem key={food.id} food={food}/>
            ))}
        </div>
    )
}
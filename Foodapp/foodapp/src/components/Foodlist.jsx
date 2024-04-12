import Fooditem from "./Fooditem"

export default function Foodlist({ foodData }){
    if (!Array.isArray(foodData)) {
        return <div>No data available on this food item.</div>;
      }
      
    return (
        <div>
            {foodData.map((food) => (
            <Fooditem  key={food.id} food={food}/>
            ) )}
        </div>
    )
}
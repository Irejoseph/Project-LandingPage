export default function Fooditem({ food }){
    
    return (
    <div>
        <img src={food.image} alt="" />
        <h1>{food.title}</h1>
        <button>Show Recipe</button>
    </div>
    )
}
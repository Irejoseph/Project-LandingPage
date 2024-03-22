import Fruit from "./Fruit"
export default function Fruits() {
    //const fruits =['Pineapple','Pawpaw','Agbalumo','Banana']
    const fruits = [
        {name: "Apple", price: 15, emoji: "🍏"},
        {name: "pineapple", price: 20, emoji: "🍍"},
        {name: "Cherry", price: 5, emoji: "🍒"},
        {name: "Banana", price: 12, emoji: "🍌"},
        {name: "Mango", price: 10, emoji: "🥭"},
    ]
    
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                  <Fruit key={fruit.name} 
                         name={fruit.name}
                         price={fruit.price}
                         emoji={fruit.emoji}/>
                ))}
            </ul>  
        </div>
    )
}
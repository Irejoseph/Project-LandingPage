import Fruit from "./Fruit"
export default function Fruits() {
    //const fruits =['Pineapple','Pawpaw','Agbalumo','Banana']
    const fruits = [
<<<<<<< HEAD
        {name: "Apple", price: 15, emoji: "🍏", soldout: false},
        {name: "pineapple", price: 20, emoji: "🍍", soldout: true},
        {name: "Cherry", price: 5, emoji: "🍒", soldout: false},
        {name: "Banana", price: 12, emoji: "🍌", soldout: true},
        {name: "Mango", price: 10, emoji: "🥭", soldout: false},
=======
        {name: "Apple", price: 15},
        {name: "pineapple", price: 20},
        {name: "Cherry", price: 5},
        {name: "Banana", price: 12},
>>>>>>> todolist
    ]
    
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
<<<<<<< HEAD
                  <Fruit key={fruit.name} 
                         name={fruit.name}
                         price={fruit.price}
                         emoji={fruit.emoji}
                         soldout={fruit.soldout}/>
=======
                  <Fruit key={fruit.name} name={fruit.name} price={fruit.price}/>
>>>>>>> todolist
                ))}
            </ul>  
        </div>
    )
}
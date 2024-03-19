import Fruit from "./Fruit"
export default function Fruits() {
    //const fruits =['Pineapple','Pawpaw','Agbalumo','Banana']
    const fruits = [
        {name: "Apple", price: 15},
        {name: "pineapple", price: 20},
        {name: "Cherry", price: 5},
        {name: "Banana", price: 12},
    ]
    
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                  <Fruit key={fruit.name} name={fruit.name} price={fruit.price}/>
                ))}
            </ul>  
        </div>
    )
}
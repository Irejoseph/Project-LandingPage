import { useEffect, useState } from "react"


export default function Recipedet({ foodId }){
    const [food, setFood] = useState("")
    const url = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "cf82626fdba54f06a010b8da19d965ab"

    useEffect(() => {
        async function fetchFood(){
            const res = await fetch (`${url}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
        }
        fetchFood()
    })
    return (
    <div>Yakoyo {foodId}
        {food.title}
    </div>)
}

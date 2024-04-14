import { useEffect, useState } from "react"
import styles from "./search.module.css"

const url = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "cf82626fdba54f06a010b8da19d965ab"

export default function Search({ setFoodData }){
    const [query, setQuery] = useState("")

    useEffect(()=>{
        async function fetchRecipe(){
            const ret = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`)
            const data = await ret.json()
            console.log(data.results)
            setFoodData(data.results)
        }
        fetchRecipe()
    }, [query])

    return (
    <div className={styles.searchContainer}>
        <input 
        className={styles.input}
        value={query} 
        onChange={(e)=> setQuery(e.target.value)} 
        type="text" 
        placeholder="Enter food..."/>
    </div>
    )
}
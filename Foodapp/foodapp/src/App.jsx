import { useState } from "react"
import Search from "./components/Search"
import Nav from "./components/Nav"
import FoodList from "./components/FoodList"
import "./App.css"
import Fooddetail from "./components/Fooddetail"
import Innercont from "./components/Innercont"
import Recipedet from "./components/Recipedet"



function App(){
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("782585")
  return (
  <div className="App">
    <Nav />
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Fooddetail>
      <Innercont>
        <FoodList setFoodId={setFoodId} foodData={foodData}/>
      </Innercont>
      <Innercont>
        <Recipedet foodId={foodId}/>
      </Innercont>
    </Fooddetail>
    
  </div>
  )
}


export default App

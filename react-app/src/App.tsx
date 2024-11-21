import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from "./components/Header"
import Crew from "./components/Crew"
import styles from "./components/crew.module.css"


function App() {

  return (
    <div >
      <Header />
      <Crew class={styles.crew}
            name1="Joshua" sqn1="mum" title1="Footballer x Grinder"
            name2="Idohrenyin" sqn2="48" title2="Frontend Developer"
            name3="Seviyon" sqn3="Otsutsuki" title3="Wckd Designer"
            name4="Jeremiah" sqn4="Santan" title4="Next President of Croatia"
            name5="Lami" sqn5="Slickback" title5="The Plug"
            name6="Joseph" sqn6="Hidan2active" title6="Jack of no trade"
            name7="Wesley" sqn7="Westhedev" title7="Fullstack"/>
    </div>
    
  )
}

export default App

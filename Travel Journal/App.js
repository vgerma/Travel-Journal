import React from "react"
import Header from "./components/Header"
import Tile from "./components/Tile"
import Footer from "./components/Footer"
import data from "./data"

export default function App(){
    // console.log(data)
    const card = data.map(place=>{
        return <Tile key={place.id} place = {place}/>
    })
    return(
        <div>
            <Header />
            {card}
            <Footer />
        </div>
    )
}
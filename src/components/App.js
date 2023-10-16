// create your App component here
import React, { useState, useEffect } from "react"
import { data } from "../mocks/data";

function App() {

    const [dogImg, setDogImg] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
       console.log(data.message)
        setDogImg(data.message)
        setIsLoaded(true)
    })
}, []);

if (!isLoaded) return <p>Loading...</p>



return <img src={data.message} alt="A Random Dog"/>

}


export default App
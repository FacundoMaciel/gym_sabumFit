import React from "react"
import Banner from "./components/Banner"
import DataAndPinctures from "./components/DataAndPinctures"
import Home from "./components/Home"
import Instructors from "./components/Instructors"
import NavBar from "./components/NavBar"


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Home />      
      <Instructors />
      <DataAndPinctures />
    </div>
  )
}

export default App

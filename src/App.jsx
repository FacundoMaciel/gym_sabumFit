import React from "react"
import DataAndPinctures from "./components/DataAndPinctures"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Instructors from "./components/Instructors"
import NavBar from "./components/NavBar"
import Pictures from "./components/Pictures"


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Home />      
      <Instructors />
      <DataAndPinctures />
      <Pictures />
      <Footer />
    </div>
  )
}

export default App

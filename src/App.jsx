// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main className="container">
        <Card
          image={data[0].image}
          country={data[0].country}
        />
      </main>
    </>
  )
}

export default App

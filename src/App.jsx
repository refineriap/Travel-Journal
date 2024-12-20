// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"
import './App.css'


function App() {

  const travelCard = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  
  return (
    <>
      <div className="time">
        <h3>{new Date().toLocaleTimeString()}</h3>
      </div>
      <Navbar />

      <main className="container">
        {travelCard}
      </main>
    </>
  )
}

export default App

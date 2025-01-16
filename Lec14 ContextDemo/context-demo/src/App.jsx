import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HobbiesList from './HobbiesList'
import AddHobbyComp from './AddHobbyComp'

function App(props) {

  return (
    <>
      <h1>Context Provider Demo</h1>
      <div className="card">
        <AddHobbyComp />
        <HobbiesList />
      </div>
    </>
  )
}

export default App

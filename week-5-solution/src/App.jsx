import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BuisnessCard} from './BuisnessCard'

function App() {
  const [count, setCount] = useState(0)

  const deatails = [{
    name : "Shiva",
    description : "A TA at 100xdevs Cohort",
    linkedIn : "http:/linlked.in",
    twitter : "http:/twitter.com",
    Intrests : ["Open SOurce", "App Dev", "MERN Devveloper"]
  }]

  return (
    <>
      <BuisnessCard deatails={deatails}/>
    </>
  )
}

export default App

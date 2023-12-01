import { useState } from 'react'
import Search from './components/search'
import Details from './components/details'
import { foods } from './components/data'
import './App.css'

function App() {
  
  const [foodstype, setfoods] = useState(foods)
  const [foodsearch, setSearch] = useState(foodstype)
  const[search,setsearched]=useState("")


  return (
    <>
      <Search file={foodstype} setSearch={setSearch} setsearched={setsearched}/>
      <Details file={foodsearch} search={search}/>
    </>
  )
}

export default App

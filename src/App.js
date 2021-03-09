import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import './App.css'

import CharGrid from './components/char/CharGrid'
import Search from './components/Search'


function App() {
const [Items, setItems] = useState([])
const [IsLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchItems = async()=>{
    const result = await axios('https://www.breakingbadapi.com/api/characters')

    console.log(result.data);   

    setItems(result.data)
    setIsLoading(false)
  }

  fetchItems()
}, [])

  return (  
    <div className="container">    

      <div className="center head">breaking bad tv show api</div>

    <Search/>

     <CharGrid IsLoading={IsLoading} Items={Items}/>
    </div>
  );
}

export default App;

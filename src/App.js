import React ,{useState,useEffect}from 'react'
import axios from 'axios';

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

  return (    <div className="container">

  
    ggg
    </div>
  );
}

export default App;

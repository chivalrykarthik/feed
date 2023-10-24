import React,{ useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  
  useEffect(()=>{
    (async()=>{
      const res = await axios.get('https://www.reddit.com/r/technology/hot.json');
      console.log(res.data)
    })()
  },[]);

  return (
    <>
      <div>
        Welcome
      </div>
    </>
  )
}

export default App;

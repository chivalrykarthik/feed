import { useEffect,useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [content,setContent] = useState([])
  useEffect(()=>{
    (async()=>{
      const {data:res} = await axios.get('https://www.reddit.com/r/technology/hot.json');
      console.log(res?.data)
      if(res?.data?.children){
        console.log(res.data.children)
        setContent(res.data.children)
      }
    })()
  },[]);

  return (
    <>
      <div className="container">
        <div className = "header"><h4>MyFeed</h4></div>
      </div>
      <div className='content'>
        {content.map((item:any)=>{
          const {data:{title,url}} = item;
          return <div className="item"><a href = {url} target='__blank'>{title}</a></div>
        })}
        
      </div>
    </>
  )
}

export default App;

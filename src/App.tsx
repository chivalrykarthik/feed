import { useEffect,useState } from 'react'
import axios from 'axios';
import Layout from './components/Layout'
import Content from './components/Content';
import {  SUB_R,BASE_URL,FEED_TYPE } from './constant';
import './App.css'

function App() {
  const [content,setContent] = useState([])
  useEffect(()=>{
    (async()=>{
      try{
      const requests = SUB_R.map((sub:string)=>{
        const url = BASE_URL+sub+FEED_TYPE;
        return axios.get(url);
      });

      const results = await Promise.all(requests);

      const data = results.map(result=>result.data?.data?.children);
      setContent(data as any);
      } catch(e:any){
        alert(e.message);
      }
    })()
  },[]);

  return (
    <>
      <Layout>
        <Content contents={content} />
      </Layout>
    </>
  )
}

export default App;

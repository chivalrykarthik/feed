import { useEffect,useState } from 'react'
import axios from 'axios';
import Layout from './components/Layout'
import Content from './components/Content';
import {  SUB_R,BASE_URL,FEED_TYPE } from './constant';
import Toggle from './components/Toggle'
import Loader from './components/Loader';
import { SelectedTab } from './types';
import './App.css'

function App() {
  const [content,setContent] = useState([])
  const [showInternal,setInternal] = useState(true);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('ALL');
  const [isLoading,setLoading] = useState(true);

  useEffect(()=>{
    (async()=>{
      try{
      const requests = SUB_R.map((sub:string)=>{
        const url = BASE_URL+sub+FEED_TYPE;
        setLoading(true);
        return axios.get(url);
      });

      const results = await Promise.all(requests);

      const data = results.map(result=>result.data?.data?.children);
      setContent(data as any);
      setLoading(false)
      } catch(e:any){
        setLoading(false)
        alert(e.message);
      }
    })()
  },[]);

  return (
    <>
      {!!isLoading && <Loader />}
      <Layout setSelectedTab = {setSelectedTab} selectedTab = {selectedTab}>
        <Toggle show = {showInternal} setShow={setInternal} />
        <Content contents={content} showInternal={showInternal} selectedTab = {selectedTab} />
      </Layout>
    </>
  )
}

export default App;

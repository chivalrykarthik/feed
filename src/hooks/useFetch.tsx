import {useEffect,useState} from 'react';
import axios from 'axios';
import  {  SUB_R,BASE_URL,FEED_TYPE, TABS } from '../constant';


const useFetch = (show: boolean, selectedTab:string)=>{
    const [content,setContent] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const [loadedTabs, setLoadedTabs] = useState<any>([]);
    useEffect(()=>{
      if(!show) return;
        (async()=>{
          try{
          const requests = SUB_R.map((sub:string)=>{
            if(loadedTabs.includes(selectedTab) || !TABS[selectedTab].includes(sub)) return;
            setLoadedTabs([...loadedTabs, selectedTab])
            const url = BASE_URL+sub+FEED_TYPE;
            setLoading(true);
            return axios.get(url);
          }).filter(v=>v);
          
          const results = await Promise.all(requests);
    
          const data = results.map(result=>result?.data?.data?.children);
          setContent([...data,...content] as any);
          setLoading(false)
          } catch(e:any){
            setLoading(false)
            alert(e.message);
          }
        })()
      },[show, selectedTab]);

      return {
        content,
        isLoading
      }
}



export default useFetch;

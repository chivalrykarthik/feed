import {useEffect,useState} from 'react';
import axios from 'axios';
import  {  SUB_R,BASE_URL,FEED_TYPE } from '../constant';


const useFetch = (show: boolean)=>{
    const [content,setContent] = useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect(()=>{
      if(!show) return;
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
      },[show]);

      return {
        content,
        isLoading
      }
}



export default useFetch;

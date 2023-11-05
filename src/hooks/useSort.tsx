import {useEffect,useState} from 'react';


const useSort = (sort:boolean,data:Array<any>)=>{
    const [sortedData, setSortedData] = useState(data);
    useEffect(()=>{
        if(!sort) {
            setSortedData(data);
            return;
        }

        const tmpData = JSON.parse(JSON.stringify(data));

        tmpData.sort((a:any,b:any)=>b.data.created_utc*1000 - a.data.created_utc*1000);

        setSortedData(tmpData);


    },[sort, data.length])

    return [
        sortedData
    ]
}

export default useSort;
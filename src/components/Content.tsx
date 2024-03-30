import React from 'react';
import Item from './Item';
import { processResults } from '../util';
import { SHOW_TOP_10, TABS } from '../constant';
import useSort from '../hooks/useSort';
import { SelectedTab } from '../types';

interface IContentProps{
    contents:any;
    showInternal:boolean;
    selectedTab: SelectedTab;
    sortByDate:boolean;
    showTop10:boolean;
}

const Content:React.FC<IContentProps> = ({contents,showInternal, selectedTab,sortByDate, showTop10})=>{
    const [results] = processResults(contents);
    const [sortedData] = useSort(sortByDate,results);
    const subredditCount:Record<string, number> = {};
    return(
        <>
        
        
        <div className='content'>
            {
                !!sortedData.length && sortedData.map((item:any)=>{
                        if(!item?.data) return null;
                        
                        const {data} = item;
                        const {subreddit} = data;
                        subredditCount[subreddit] = (subredditCount[subreddit] || 0) + 1;
                        if(selectedTab !== 'ALL' && !TABS[selectedTab].includes(subreddit)) return null;
                        if(showTop10 && subredditCount[subreddit] > SHOW_TOP_10) return null;
                        return <Item 
                                    data = {data}
                                    showInternal={showInternal}
                                />
                    })
                
                
            }
            
        </div>
        </>
    )

}

export default Content;
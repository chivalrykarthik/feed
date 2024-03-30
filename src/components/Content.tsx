import React from 'react';
import Item from './Item';
import { processResults } from '../util';
import { SHOW_TOP_10, TABS } from '../constant';
import useSort from '../hooks/useSort';
import { SelectedTab } from '../types';
import { EXCLUDE } from '../constant';

interface IContentProps{
    contents:any;
    showInternal:boolean;
    selectedTab: SelectedTab;
    sortByDate:boolean;
    showTop10:boolean;
}

const isExternal = (url:string) =>!url.includes('https://www.reddit.com')

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
                        const {subreddit, url} = data;
                        const external = isExternal(url);
                        subredditCount[subreddit] = (subredditCount[subreddit] || 0);
                        
                        if(selectedTab !== 'ALL' && !TABS[selectedTab].includes(subreddit)) return null;
                        
                        if(showTop10 && subredditCount[subreddit] > SHOW_TOP_10) return null;

                        if(!EXCLUDE.includes(subreddit) && !external) return null;

                        subredditCount[subreddit] = (subredditCount[subreddit] || 0) + 1;
                        return <Item 
                                    data = {data}
                                    showInternal={showInternal}
                                    external ={external}
                                />
                    })
                
                
            }
            
        </div>
        </>
    )

}

export default Content;
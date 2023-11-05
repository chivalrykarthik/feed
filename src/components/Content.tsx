import React from 'react';
import Item from './Item';
import { processResults } from '../util';
import { TABS } from '../constant';
import useSort from '../hooks/useSort';
import { SelectedTab } from '../types';

interface IContentProps{
    contents:any;
    showInternal:boolean;
    selectedTab: SelectedTab;
    sortByDate:boolean;
}

const Content:React.FC<IContentProps> = ({contents,showInternal, selectedTab,sortByDate})=>{
    const results:any[] = processResults(contents);
    const [sortedData] = useSort(sortByDate,results);
    
    return(
        <>
        
        
        <div className='content'>
            {
                !!sortedData.length && sortedData.map((item:any)=>{
                        if(!item?.data) return null;
                        const {data:{title,url,subreddit,created_utc}} = item;
                        if(selectedTab !== 'ALL' && !TABS[selectedTab].includes(subreddit)) return null;
                        return <Item 
                                    title={title} 
                                    url = {url} 
                                    subreddit={subreddit}
                                    created={created_utc}
                                    showInternal={showInternal}
                                />
                    })
                
                
            }
            
        </div>
        </>
    )

}

export default Content;
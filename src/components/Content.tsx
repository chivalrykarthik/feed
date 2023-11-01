import React from 'react';
import Item from './Item';
import { processResults } from '../util';
import { TABS } from '../constant';
import { SelectedTab } from '../types';

interface IContentProps{
    contents:any;
    showInternal:boolean;
    selectedTab: SelectedTab;
}

const Content:React.FC<IContentProps> = ({contents,showInternal, selectedTab})=>{
    const results:any[] = processResults(contents);
    
    return(
        <>
        
        
        <div className='content'>
            {
                results.map((item:any)=>{
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
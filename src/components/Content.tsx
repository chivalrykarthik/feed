import React from 'react';
import Item from './Item';
import { processResults } from '../util';


const Content:React.FC<any> = ({contents})=>{
    const results:any[] = processResults(contents);
    return(
        <>
        <div className='content'>
            {
                results.map((item:any)=>{
                        const {data:{title,url,subreddit}} = item;
                        return <Item title={title} url = {url} subreddit={subreddit} />
                    })
                
                
            }
            
        </div>
        </>
    )

}

export default Content;
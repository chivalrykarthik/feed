import React, {useState} from 'react';
import Item from './Item';
import { processResults } from '../util';
import Toggle from './Toggle'

const Content:React.FC<any> = ({contents})=>{
    const results:any[] = processResults(contents);
    const [showInternal,setInternal] = useState(true);
    return(
        <>
        <div className="toggle">
            <Toggle show = {showInternal} setShow={setInternal} />
        </div>
        <div className='content'>
            {
                results.map((item:any)=>{
                        const {data:{title,url,subreddit,created_utc}} = item;
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
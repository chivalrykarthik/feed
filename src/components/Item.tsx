import React from 'react';
import { EXCLUDE } from '../constant';
const isExternal = (url:string) =>!url.includes('https://www.reddit.com')

const Item:React.FC<any>=({title,url,subreddit})=>{
    return(
        <>
        {EXCLUDE.includes(subreddit) || isExternal(url) ? (<div className="item">
            <div className="itemHeading">
                <h6>{subreddit.toUpperCase()}</h6>
                {!isExternal(url) && <span>Internal</span>} 
            </div>
                <a href = {url} target='__blank'>{title}</a>
            </div>):null}
        </>
    )
}

export default Item;
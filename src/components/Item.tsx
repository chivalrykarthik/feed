import React from 'react';
import { EXCLUDE } from '../constant';
import { calculateTimeDifference } from '../util';
const isExternal = (url:string) =>!url.includes('https://www.reddit.com')

const Item:React.FC<any>=({title,url,subreddit,created, showInternal})=>{
    const {diff, period} = calculateTimeDifference(created);
    if((period === 'days' && diff > 3) || (!showInternal && !isExternal(url))){
        return null;
    }

    return(
        <>
        {EXCLUDE.includes(subreddit) || isExternal(url) ? (<div className="item">
            <div className="itemHeading">
                <h6>{subreddit.toUpperCase()}</h6>
                {!isExternal(url) && <span>Internal</span>} 
            </div>
            <div className = "itemInfo">
                <a href = {url} target='__blank'>{title}</a>
                <span>{`${diff} ${period}`}</span>
            </div>
            </div>):null}
        </>
    )
}

export default Item;
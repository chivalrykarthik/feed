import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EXCLUDE } from '../constant';
import { calculateTimeDifference } from '../util';
const isExternal = (url:string) =>!url.includes('https://www.reddit.com')

const Item:React.FC<any>=({data, showInternal})=>{
    const {title,url,subreddit,created_utc:created, ups, downs, score, domain} = data;
    const {diff, period} = calculateTimeDifference(created);
    if((period === 'days' && diff > 3) || (!showInternal && !isExternal(url))){
        return null;
    }

    return(
        <>
        {EXCLUDE.includes(subreddit) || isExternal(url) ? (<div className="item">
            <div className="itemHeading" key = {uuidv4()}>
                <h6>{subreddit.toUpperCase()}</h6>
                {!isExternal(url) && <span>Internal</span>}
                {!!domain && <span>{domain}</span>} 
            </div>
            <div className = "itemInfo">
                <a href = {url} target='__blank'>{title}</a>
                <div className='item-tags'>
                    <span>{`${diff} ${period}`}</span>
                    <span>{`Up: ${ups}`}</span>
                    <span>{`Down: ${downs}`}</span>
                    <span>{`Score: ${score}`}</span>
                </div>
            </div>
            </div>):null}
        </>
    )
}

export default Item;
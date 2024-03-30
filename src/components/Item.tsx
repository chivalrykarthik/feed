import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculateTimeDifference } from '../util';


const Item:React.FC<any>=({data, showInternal,external})=>{
    const {title,url,subreddit,created_utc:created, score, domain} = data;
    const {diff, period} = calculateTimeDifference(created);
    if((period === 'days' && diff > 3) || (!showInternal && !external)){
        return null;
    }

    return(
        <>
        <div className="item">
            <div className="itemHeading" key = {uuidv4()}>
                <h6>{subreddit.toUpperCase()}</h6>
                {!external && <span>Internal</span>}
                {!!domain && <span>{domain}</span>} 
            </div>
            <div className = "itemInfo">
                <a href = {url} target='__blank'>{title}</a>
                <div className='item-tags'>
                    <span>{`${diff} ${period}`}</span>
                    <span>{`Score: ${score}`}</span>
                </div>
            </div>
            </div>
        </>
    )
}

export default Item;
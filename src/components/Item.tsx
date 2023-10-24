import React from 'react';

const isExternal = (url:string) =>!url.includes('https://www.reddit.com')

const Item:React.FC<any>=({title,url,subreddit})=>{
    return(
        <>
        {isExternal(url) ? (<div className="item">
            <h6>{subreddit.toUpperCase()}</h6>
                <a href = {url} target='__blank'>{title}</a>
            </div>):null}
        </>
    )
}

export default Item;
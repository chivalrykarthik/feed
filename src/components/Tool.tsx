import React from 'react';

const Tool:React.FC<any>=({text,show,setShow})=>{
        const handleClick = ()=>setShow(!show);
        return(
            <>
                <div className="toggle">
                    <span>{text}:<button onClick = {handleClick}>{show ? 'On':'Off'}</button></span>
                </div>
            </>
        )

}

export default Tool;
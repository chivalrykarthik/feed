import React from 'react';

const Toggle:React.FC<any>=({show,setShow})=>{
        const handleClick = ()=>setShow(!show);
        return(
            <>
                <div className="toggle">
                    <span>Show Internal:<button onClick = {handleClick}>{show ? 'On':'Off'}</button></span>
                </div>
            </>
        )

}

export default Toggle;
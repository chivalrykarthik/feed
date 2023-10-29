import React from 'react';

const Toggle:React.FC<any>=({show,setShow})=>{
        const handleClick = ()=>setShow(!show);
        return(
            <>
                <span>Show Internal:<button onClick = {handleClick}>{show ? 'On':'Off'}</button></span>
            </>
        )

}

export default Toggle;
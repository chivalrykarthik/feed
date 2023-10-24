import React from 'react';


const Layout:React.FC<any> = ({children})=>{
    return(
        <>
        <div className="container">
            <div className = "header"><h4>MyFeed</h4></div>
            {children}
        </div>
        
      </>
    )
}

export default Layout;
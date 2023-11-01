import React from 'react';
import Tabs from './Tabs';

const Layout:React.FC<any> = ({setSelectedTab, selectedTab, children})=>{
    return(
        <>
        <div className="container">
            <div className = "header"><h4>MyFeed</h4></div>
            <Tabs setSelectedTab = {setSelectedTab} selectedTab={selectedTab} />
            {children}
        </div>
        
      </>
    )
}

export default Layout;
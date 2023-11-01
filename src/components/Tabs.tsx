import React from 'react';
import { TABS } from '../constant';


const Item:React.FC<any> = ({tab,setSelectedTab,selectedTab})=>{
    const handleSelect = ()=>setSelectedTab(tab);
    return <div className={`tabItem ${selectedTab===tab ? 'active':''}`} onClick = {handleSelect}>{tab}</div>
}

const Tabs:React.FC<any> = ({setSelectedTab,selectedTab})=>{
    const tabs = Object.keys(TABS);
    
    return (
        <div className="tabHeader">
            {
                tabs.map(tab=>{
                    return <Item tab = {tab} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />;
                })
            }
        </div>
    )
}

export default Tabs;
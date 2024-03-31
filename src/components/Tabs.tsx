import React from 'react';
import { TABS,TAB_DISPALY } from '../constant';

interface ItemProps {
    tab:string;
    setSelectedTab:(tab:string)=>void;
    selectedTab:string;
}
const Item:React.FC<ItemProps> = ({tab,setSelectedTab,selectedTab})=>{
    const handleSelect = ()=>setSelectedTab(tab);
    return <div className={`tabItem ${selectedTab===tab ? 'active':''}`} onClick = {handleSelect}>{TAB_DISPALY?.[tab] || tab}</div>
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
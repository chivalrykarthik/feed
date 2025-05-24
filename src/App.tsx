import { useState } from 'react'
import Layout from './components/Layout'
import Content from './components/Content';
import { TOOL_HEADING } from './constant';
import Tool from './components/Tool'
import Loader from './components/Loader';
import useFetch from './hooks/useFetch';
import { SelectedTab } from './types';
import './App.css'
import LoadingScrollProgress from './components/LoadingScrollProgress';

function App() {
  const [showInternal,setInternal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('TECH');
  const [sortByDate, setSortByDate]= useState(false);
  const [showTop10, setShowTop10]= useState(true);
  const [show, setShow] = useState(true);
  const [cnt, setCnt] = useState(0);
  const {content,isLoading} = useFetch(show, selectedTab);
  const handleClick = ()=>{
    const newCnt = cnt+1;
    setCnt(newCnt);
    if(newCnt > 12)
      setShow(true);
  }

  return (
    <>
      {!!isLoading && <Loader />}
      {show ? <>
      <LoadingScrollProgress />
      <Layout setSelectedTab = {setSelectedTab} selectedTab = {selectedTab}>
        <div className ="tools">
          <Tool show = {showInternal} setShow={setInternal} text = {TOOL_HEADING.INTERNAL}/>
          <Tool show = {sortByDate} setShow={setSortByDate} text = {TOOL_HEADING.SORT}/>
          <Tool show = {showTop10} setShow={setShowTop10} text = {TOOL_HEADING.SHOW_TOP_10}/>
        </div>
        <Content 
          contents={content} 
          showInternal={showInternal} 
          selectedTab = {selectedTab} 
          sortByDate = {sortByDate} 
          showTop10 = {showTop10} 
        />
      </Layout>
      </>:
      <button type="button" onClick={handleClick}>Click</button>
}
    </>
  )
}

export default App;

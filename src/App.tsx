import { useState } from 'react'
import Layout from './components/Layout'
import Content from './components/Content';
import { TOOL_HEADING } from './constant';
import Tool from './components/Tool'
import Loader from './components/Loader';
import useFetch from './hooks/useFetch';
import { SelectedTab } from './types';
import './App.css'

function App() {
  const [showInternal,setInternal] = useState(true);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('ALL');
  const [sortByDate, setSortByDate]= useState(false);
  const {content,isLoading} = useFetch();

 

  return (
    <>
      {!!isLoading && <Loader />}
      <Layout setSelectedTab = {setSelectedTab} selectedTab = {selectedTab}>
        <div className ="tools">
          <Tool show = {showInternal} setShow={setInternal} text = {TOOL_HEADING.INTERNAL}/>
          <Tool show = {sortByDate} setShow={setSortByDate} text = {TOOL_HEADING.SORT}/>
        </div>
        <Content contents={content} showInternal={showInternal} selectedTab = {selectedTab} sortByDate = {sortByDate} />
      </Layout>
    </>
  )
}

export default App;

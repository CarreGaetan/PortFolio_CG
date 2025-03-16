import './App.css'
import { useState } from 'react'
import Header from './Components/Header'
import AsideBar from './Components/AsideBar'
import Explorer from './Components/Explorer'
import MainPanel from './Components/MainPanel'

function App() {

  const [selectedTab, setSelectedTab] = useState('home')

  return (
    <>
      <div>
        <Header />
        <div className="mainLayout">
          <AsideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <Explorer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <MainPanel selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
      </div>
    </>
  )
}

export default App

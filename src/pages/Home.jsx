import React from 'react'
import Sidebar from '../HomeComponent/Sidebar'
import Chat from '../HomeComponent/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
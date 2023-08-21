import React from 'react'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'
import Questions from './components/Questions'
import RightSideSection from './components/RightSideSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='flex w-full '>
        <SideMenu />
        <div className='w-full'>
          <Questions />
        </div>
        <RightSideSection />
      </div>
      <Footer/>
    </div>
  )
}

import React from 'react'
import HomeComp from '../components/HomeComp/HomeComp'
import Layout from '../components/Layout/Layout'
// import Banner from '../components/Banner/Banner'
// import Navbar from '../components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Layout children={<HomeComp/>}/>
    </div>
  )
}

export default Home
import React from 'react'
import HomeComp from '../components/HomeComp/HomeComp'
import Layout from '../components/Layout/Layout'

function Home() {
  return (
    <div>
      <Layout children={<HomeComp/>}/>
    </div>
  )
}

export default Home
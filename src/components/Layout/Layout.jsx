import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

function Layout(props) {
  return (
    <>
      <div className='app'>
        <Banner />
        <div style={{ color: 'white' }}>
          {props.children}
        </div>
        <Navbar />

      </div>
    </>
  )
}

export default Layout
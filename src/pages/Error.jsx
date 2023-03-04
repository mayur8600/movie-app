import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
  return (
    <>
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent:'center'}} ><img src={require('../Images/errorImage.jpg')} alt='err'/>
    </div>
    <div style={{width: '100%', display: 'flex', justifyContent:'center', marginTop: '-60px'}}>
    <button onClick={() => navigate('/')} style={{display: 'flex', justifyContent:'center', alignItems: 'center', background:'#FD7175', fontSize:'18px', color:'white', padding:'10px 5px', borderRadius:'6px'}} >Go to Home</button>
    </div>
    </>
  )
}

export default Error
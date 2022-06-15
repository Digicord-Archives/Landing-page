import React from 'react'
import Text1 from '../components/Text1/Text1'
import Text2 from '../components/Text2/Text2'
import Handles from '../components/Handles/Handles'
// import Newsletter from '../components/NewsLetter/Newsletter'
import Timer from '../components/Timer/Timer'
import logo from '../assets/images/logo.png'
import './Landing.css'


const Landing = () => {
  return (
    <div className='Container'>
      <div className='page'>
        <div className='container-div div1'>
          {/* Logo  */}
          <div className='logo'>
            <img src={logo} alt='Logo'></img>
          </div>

          {/* Text1  */}
          <div className='Text1'>
            <Text1></Text1>
          </div>

          {/* Timer  */}
          <div className='Timer'>
            <Timer></Timer>
          </div>

          {/* Text2  */}
          <div className='Text2'>
            <Text2></Text2>
          </div>

          {/* Handles  */}
          <div className='Handles'>
            <Handles></Handles>
          </div>

          {/* NewsLetter 
          <div className='Newsletter'>
            <Newsletter></Newsletter>
          </div> */}
        </div>

        <div className='container-div div2'>
          <div className='div3'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
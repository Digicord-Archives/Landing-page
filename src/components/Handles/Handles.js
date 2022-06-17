import React from 'react'
import '../Handles/Handles.css'
import { Instagram,
        Facebook,
        Linkedin,
        Twitter } from 'react-bootstrap-icons'
const Handles = () => {
  return (
    <div className='social__media--icons'>
      <a href='https://www.instagram.com/invites/contact/?i=188vqiv9ez55j&utm_content=ogv8vk5'>
        <Instagram className='icon'/>
      </a>
      <a href='https://www.facebook.com/digicord4/'>
        <Facebook className='icon'/>
      </a>
      <a href='https://www.linkedin.com/in/digicord-nig'>
        <Linkedin className='icon'/>
      </a>
      <a href='https://twitter.com/DIGI_CORD?s=09'>
        <Twitter className='icon'/>
      </a>
      {/*  */}
    </div>
  )
}

export default Handles
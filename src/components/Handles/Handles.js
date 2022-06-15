import React from 'react'
import '../Handles/Handles.css'
import { Instagram,
        Facebook,
        Youtube,
        Twitter,
        Whatsapp} from 'react-bootstrap-icons'
const Handles = () => {
  return (
    <div className='social__media--icons'>
      <div>
        <Instagram/>
      </div>
      <div>
        <Facebook />
      </div>
      <div>
        <Youtube/>
      </div>
      <div>
        <Twitter />
      </div>
      <div>
        <Whatsapp />
      </div>
    </div>
  )
}

export default Handles
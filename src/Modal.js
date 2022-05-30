import React from 'react'
import './Modal.css'

const Modal = ({open,onClose}) => {
    if(!open) return null
  return (
      <div className='modal_overlay' onClick={onClose}>
        <div className='modal_container'>
        Sweetheart, this is a very advanced 
        feature for me to pull off,
       <p>It is still under construction</p>
       <h2>You can try other available features like the tweet functionality at the top of the home section</h2>
       <p>Go to <a href='https://twitter.com'>this link</a> if you really want to see how this feature works</p>
       <button className='modal_btn'
       onClick={onClose}
       >Close</button>
    </div>
    </div>
    
  )
}

export default Modal
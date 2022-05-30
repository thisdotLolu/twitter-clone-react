import React from 'react'
import './Nothing.css'
import {Link} from'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter'


const Nothing = () => {
  return (
    <div className='nothing'>
      <TwitterIcon 
      className='icon_nothing'
      style={{color:'#50b7f5',top:'0px',position:'absolute', fontSize:'100px'}}
      />
    <div className='nothing_two'
    >Nothing to see here - yet
    <Link to='/'>Go back to Home Page</Link>
    </div>
    </div>
  )
}

export default Nothing;
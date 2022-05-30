import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = () => {
  return (
    <>
    <div className='outer-most'>
    <h1>Profile</h1>
    <div className='below-profile'>
        <div className='cover-photo'></div>
        <Avatar/>
        <hr />
        <div className='note_profile'>
        Authentication functionality is required to view your profile and
        unfortunately, it has not been set-up yet    
        <Link to='/'><p>Go back to Home</p></Link>
        </div>
    </div>
    </div>
    
    </>


  )
}

export default Profile
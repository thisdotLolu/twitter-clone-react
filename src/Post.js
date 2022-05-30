import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubble'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder' 
import PublishIcon from '@mui/icons-material/Publish'
import Modal from './Modal'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const Post = ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {

    const[openModal,setOpenModal]=useState(false)

    const onClose=()=>{
        setOpenModal(false)
    }
    
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={avatar}
            style={{zIndex:'-999'}}
            />
        </div>
        <div className="post__body">
        <div className="post__header">
            <div className="post__headerText">
                <h3 className='username_post'>
                <Link to='/profile'
                style={{textDecoration:'none',color:'black'}}
                >{displayName}{" "}</Link>
                <span className='post__headerSpecial'>
                    {verified && <VerifiedUserIcon className='post__badge'/>}
                    @{username}
                </span>
                </h3>
            </div>
            <div className='post__headerDescription'>
                <p>{text}</p>
             </div>
            </div>
            {image? (<img 
            src={image} alt="tweetImage"/>):''}
            <div className="post__footer">
                <ChatBubbleOutlineIcon
                style={{cursor:'pointer'}}
                onClick={()=>setOpenModal(true)}
                
                />
                <RepeatIcon
                style={{cursor:'pointer'}}
                onClick={()=>setOpenModal(true)}
                />
                <Modal open={openModal}
                onClose={onClose}
                />
                <FavoriteBorderIcon fontSize='small'
                style={{cursor:'pointer'}}
                onClick={()=>setOpenModal(true)}
                />
                <PublishIcon fontSize='small'
                style={{cursor:'pointer'}}
                onClick={()=>setOpenModal(true)}
                />
            </div>
        </div>
    </div>
  )
}

export default Post
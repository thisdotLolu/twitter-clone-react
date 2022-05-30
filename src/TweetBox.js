import React from 'react'
import './TweetBox.css';
import {Avatar, Button} from '@mui/material'
import { useState } from 'react';
import db from './firebase';


const TweetBox = () => {
  const[tweetMessage,setTweetMessage]=useState('')
  const[tweetImage,setTweetImage]=useState('')
  const[displayName,setDisplayName]=useState('')
  const [handle,setHandle]=useState('')



  const sendTweet =(e)=>{
    e.preventDefault()
    
    const avatars=['https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
    'https://cdn-icons-png.flaticon.com/512/194/194938.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWR4AiQMzmQ-CPtcnOOAmBtBuOHNHMQDVsTLcyT3U253ya5uw9mT5l7Xe7X7AWix9Gp4&usqp=CAU', 
    'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png','https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg',
    'https://as1.ftcdn.net/v2/jpg/02/42/45/90/1000_F_242459076_53ffNaKxcGS1ioScWiSt50e9ltwvynqt.jpg',
    'https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU',
    'https://cdn3.vectorstock.com/i/1000x1000/31/77/beautiful-latin-woman-avatar-character-icon-vector-33983177.jpg'
  ]
    const avataridx= Math.floor(Math.random()*avatars.length)

    if(displayName && handle && tweetMessage){
      db.collection('posts').add({
        displayName:displayName,
        username:handle,
        verified:true,
        text:tweetMessage,
        image:tweetImage,
        avatar:avatars[avataridx]
      })
      setDisplayName('')
      setTweetImage('')
      setHandle('')
      setTweetMessage('')
    }else{
      alert('Enter details before tweet can be made')
    }

  }
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__otheruser">
                {/* <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LgF0Bkn-NPbsG4KVrTeZ-yWSkwVk57NaUg&usqp=CAU'/> */}
                <input placeholder='Enter your display name' 
                type='text'
                value={displayName}
                onChange={(e)=>setDisplayName(e.target.value)}
                />
                <input placeholder='Enter your your @' 
                type='text'
                value={handle}
                onChange={(e)=>setHandle(e.target.value)}
                />
            </div>
            <div className="tweetBox__input">
                <Avatar src='https://www.pinpng.com/pngs/m/5-52141_avatar-images-png-default-user-image-jpg-transparent.png'/>
                <input placeholder="What's happening?" type='text'
                value={tweetMessage}
                onChange={(e)=>setTweetMessage(e.target.value)}
                />
            </div>
            <input 
            value={tweetImage}
            type="text" 
            className='tweetBox__imageinput'
            placeholder='Enter Image URL'
            onChange={(e)=>setTweetImage(e.target.value)}
          />
            <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox
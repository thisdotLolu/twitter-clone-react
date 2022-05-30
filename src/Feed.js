import React, { useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import { useState } from 'react'
import db from './firebase'

// import {Button} from '@mui/material'

import NavbarBottom from './NavbarBottom'



const Feed = () => {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])
  return (
    <div className='feed'>
        {/* Heeader */}
        <div className="feed__header">
        <h2>Home</h2>
        </div>
        <h3 style={{textAlign:'center'}}>Make A Tweet Below :)</h3>

        {/* TweetBox */}

        <TweetBox/>
        {posts.map((post)=>(
        // {/* Post */}
        <Post displayName={post.displayName}
        username={post.username}
        verified ={true}
        text= {post.text}
        avatar={post.avatar}
        image={post.image}
        />
        )
        )}
      <NavbarBottom/>
    
    
    </div>
  )
}

export default Feed
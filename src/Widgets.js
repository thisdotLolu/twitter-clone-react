import React from 'react'
import './Widgets.css'
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import Search from '@mui/icons-material/Search'




const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon'/>
            <input placeholder ='Search Twitter' type='text'/>
        </div>

        <div className="widgets__widgetContainer">
            <h2>Trends For  You</h2>
            {/* <TwitterTweetEmbed tweetId={'933354946111705097'}/> */}
            
        </div>
    </div>
  )
}

export default Widgets
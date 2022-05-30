import React from 'react'
import './Feed.css'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import MailOutlineicon from '@mui/icons-material/MailOutline';
import BookMarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Link } from 'react-router-dom';



const NavbarBottom = () => {
  return (
    <div>
      <div className="feed_links">
      <div className='eachfeedlink'>
      <Link to='/'><HomeIcon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
      <div className='eachfeedlink'>
      <Link to='/error'><SearchIcon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
      <div className='eachfeedlink'>
      <Link to='/profile'><PermIdentityIcon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
      <div className='eachfeedlink'>
      <Link to='/error'><NotificationsNone
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>   
      <div className='eachfeedlink'>
      <Link to='/error'><MailOutlineicon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
      <div className='eachfeedlink' style={{color:'#50b7f5'}}>
      <Link to='/error'><BookMarkBorderIcon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
      <div className='eachfeedlink'>
      <Link to='/error'><ListAltIcon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
      
      <div className='eachfeedlink'>
      <Link to='/error'><MoreHorizIcon
      className='icon_nav'
      style={{color:'black'}}
      /></Link>
      </div>
    </div>
    </div>
  )
}

export default NavbarBottom
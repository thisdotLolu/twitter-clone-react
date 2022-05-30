import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import MailOutlineicon from '@mui/icons-material/MailOutline';
import BookMarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';



function Sidebar(){
    return(
    <div className='sidebar'>
    <TwitterIcon className='sidebar__twittericon'/>
    <Link
    style={{textDecoration:'none'}}
    to='/'><SidebarOption active text='Home' Icon={<HomeIcon style={{color:'#50b7f5'}}/>}/></Link>
    <Link 
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/error'><SidebarOption text='Explore' Icon={<SearchIcon style={{color:'#50b7f5'}}/>}/></Link>
    <Link 
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/error'><SidebarOption text='Notifications' Icon={<NotificationsNone style={{color:'#50b7f5'}}/>}/></Link>
    <Link 
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/error'><SidebarOption text='Messages' Icon={<MailOutlineicon style={{color:'#50b7f5'}}/>}/></Link>
    <Link 
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/error'><SidebarOption text='BookMarks' Icon={<BookMarkBorderIcon style={{color:'#50b7f5'}}/>}/></Link>
    <Link 
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/error'><SidebarOption text='Lists' Icon={<ListAltIcon style={{color:'#50b7f5'}}/>}/></Link>
    <Link
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/profile'><SidebarOption text='Profile' Icon={<PermIdentityIcon style={{color:'#50b7f5'}}/>}/></Link>
    <Link
    style={{textDecoration:'none',color:'#50b7f5'}}
    to='/error'><SidebarOption text='More' Icon={<MoreHorizIcon style={{color:'#50b7f5'}}/>}/></Link>

    <Button variant='outlined' className='sidebar__tweet' fullWidth >Made By Lolu</Button>
    </div>
    )
}

export default Sidebar;
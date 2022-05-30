import React from 'react'
import './SidebarOption.css'




const SidebarOption = ({active,text,Icon}) => {
  return (
    <div className={`sidebarOption ${active && 
    'sidebarOption--active'}`}>
        {Icon}
        <h2 style={{textDecoration:'none'}}>{text}</h2>
    </div>
  )
}

export default SidebarOption;
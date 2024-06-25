import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'


const Header = () => {
  return (
    <div className='header'>
       <Link to="/">
      <div className="logo">Movie App</div>
       </Link>
   <div className="user-image">
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
   </div>
    </div>
  )
}

export default Header
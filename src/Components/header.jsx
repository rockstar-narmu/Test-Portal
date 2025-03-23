import React from 'react'
import "../styles/header.css"

export const Header = () => {
  return (
    <div className='header-container'>
      <p className='logo'>Logo</p>
      <img src="/assets/icons/user.png" height={75} width={75} alt='user-icon'  className='user-icon'/>
    </div>
  )
}

export default Header;

import React from 'react'
import Button from '../UI/Button'
import List from './List'
import Logo from '../../assets/logo.png';

function Menu() {
  return (
    <div className='menu'>
        <div className='logo_container'>
            <img src={Logo} alt="logo" style={{width: "100%"}}  />
        </div>
        
        <List />

        <div className='menu_bottom'>
            <Button content="SITE WEB" />
            <p className='version'>version 1.0.0</p>
        </div>

    </div>
  )
}

export default Menu
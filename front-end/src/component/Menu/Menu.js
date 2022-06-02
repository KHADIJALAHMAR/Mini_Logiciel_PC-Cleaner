import React from 'react'
import Button from '../UI/Button'
import List from './List'

function Menu() {
  return (
    <div className='menu'>
        <div className='logo_container'>
            Logo
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
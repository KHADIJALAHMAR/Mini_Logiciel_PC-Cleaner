import React from 'react'

function Item({title, Icon ,handleClick} ) {
  return (
    <button className='menu_item' onClick={handleClick} >
        <div className='item_icon'>
          {
            <Icon />
          }
        </div>
        <p className='item_text'>{title} </p>
    </button>
  )
}

export default Item
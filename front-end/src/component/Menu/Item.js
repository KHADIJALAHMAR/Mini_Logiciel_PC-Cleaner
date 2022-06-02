import React from 'react'

function Item({title, Icon}) {
  return (
    <button className='menu_item'>
        <div className='item_icon'>
          {
            <Icon />
          }
        </div>

        <p className='item_text'>{title}</p>
    </button>
  )
}

export default Item
import React from 'react'

function Item({title}) {
  return (
    <button className='menu_item'>
        <div className='item_icon'>
            I
        </div>

        <p className='item_text'>{title}</p>
    </button>
  )
}

export default Item
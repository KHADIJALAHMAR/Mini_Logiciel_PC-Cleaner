import React from 'react'

function ActionPressable({title, Icon,handleClick}) {
  return (
    <button className='action_pressable' onClick={handleClick}>
      <Icon />
      <p>{title}</p>
    </button>
  )
}

export default ActionPressable
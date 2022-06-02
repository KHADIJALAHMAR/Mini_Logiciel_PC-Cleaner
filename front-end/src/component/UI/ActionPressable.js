import React from 'react'

function ActionPressable({title, Icon}) {
  return (
    <button className='action_pressable'>
      <Icon />
      <p>{title}</p>
    </button>
  )
}

export default ActionPressable
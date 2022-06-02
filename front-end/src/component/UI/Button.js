import React from 'react'

function Button({button_style, content}) {
  return (
    <button className={button_style === 'bordered' ? 'btn_bordered btn' : 'btn_simple btn'}>
        {content}
    </button>
  )
}

export default Button
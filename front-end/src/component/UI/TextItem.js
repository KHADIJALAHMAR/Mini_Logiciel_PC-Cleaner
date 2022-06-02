import React from 'react'

function TextItem({title, content}) {
  return (
    <p className='header_text'>{title} <span>{content}</span></p>
  )
}

export default TextItem
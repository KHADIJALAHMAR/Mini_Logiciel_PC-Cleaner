import React from 'react'
import Item from './Item'

function List() {
  return (
    <div className='menu_list'>
        <Item title="VUE D'ENSEMBLE" />
        <Item title="ANALYSER" />
        <Item title="HISTORIQUE" />
        <Item title="OPTIONS" />
    </div>
  )
}

export default List
import React from 'react'
import Item from './Item'
import {ReactComponent as MonitorIcon} from '../../assets/icons/monitor.svg'
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'
import {ReactComponent as HistoryIcon} from '../../assets/icons/history.svg'
import {ReactComponent as SettingIcon} from '../../assets/icons/setting.svg'


function List() {
  return (
    <div className='menu_list'>
        <Item title="VUE D'ENSEMBLE" Icon={MonitorIcon} />
        <Item title="ANALYSER" Icon={SearchIcon} />
        <Item title="HISTORIQUE" Icon={HistoryIcon} />
        <Item title="OPTIONS" Icon={SettingIcon} />
    </div>
  )
}

export default List
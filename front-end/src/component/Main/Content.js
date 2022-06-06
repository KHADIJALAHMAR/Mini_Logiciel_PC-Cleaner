import React from 'react'
import ActionPressable from '../UI/ActionPressable'
import {ReactComponent as HistoryBigIcon} from '../../assets/icons/historyBig.svg'
import {ReactComponent as EraserIcon} from '../../assets/icons/eraser.svg'
import {ReactComponent as UpdateIcon} from '../../assets/icons/update.svg'

function Content() {


  return (
    <div className='content'>
        <ActionPressable title="NETTOYER" Icon={EraserIcon} />
        <ActionPressable title="HISTORIQUE" Icon={HistoryBigIcon} />
        <ActionPressable title="METTRE À JOUR" Icon={UpdateIcon} />
    </div>
  )
}

export default Content
import React from 'react'
import ActionPressable from '../UI/ActionPressable'
import {ReactComponent as HistoryBigIcon} from '../../assets/icons/historyBig.svg'
import {ReactComponent as EraserIcon} from '../../assets/icons/eraser.svg'
import {ReactComponent as UpdateIcon} from '../../assets/icons/update.svg'
import axios from 'axios'
const URL= 'http://localhost:5000/Analyse'
function Content() {
  const nettoyer = async ()=>{
    const history =await axios.get(`${URL}/nettoyer`)
    console.log(history);
  }

  return (
    <div className='content'>
        <ActionPressable title="NETTOYER" handleClick={nettoyer} Icon={EraserIcon} />
        <ActionPressable title="HISTORIQUE"  Icon={HistoryBigIcon} />
        <ActionPressable title="METTRE À JOUR" Icon={UpdateIcon} />
    </div>
  )
}

export default Content
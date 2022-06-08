import React,{useEffect,useState} from 'react'
import ActionPressable from '../UI/ActionPressable'
import {ReactComponent as HistoryBigIcon} from '../../assets/icons/historyBig.svg'
import {ReactComponent as EraserIcon} from '../../assets/icons/eraser.svg'
import {ReactComponent as UpdateIcon} from '../../assets/icons/update.svg'
import axios from 'axios'
const URL= 'http://localhost:5000/Analyse'
function Content() {
  const[data,setData]=useState([]);

  const nettoyer = async ()=>{
    const history =await axios.get(`${URL}/nettoyer`)
    console.log(history);
  }
  useEffect(()=>{
    axios.get(`${URL}/allhistory`).then(
      res=>{
        setData(res.data);
      }
    ).catch(err=>{
      console.log(err)
    })
  },[])
 
  return (
    <div className='content'>
        <ActionPressable title="NETTOYER" handleClick={nettoyer} Icon={EraserIcon} />
        <ActionPressable title="HISTORIQUE"   handleClick={function() { alert('clic'); }} Icon={HistoryBigIcon} />
        <ActionPressable title="METTRE À JOUR" Icon={UpdateIcon} />
    </div>
  )
}

export default Content
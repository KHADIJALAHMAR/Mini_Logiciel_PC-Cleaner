import React,{useEffect,useState} from 'react'
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg'
import {ReactComponent as MinimizeIcon} from '../../assets/icons/minimize.svg'
import ActionButton from '../UI/ActionButton'
import TextItem from '../UI/TextItem'
import Button from '../UI/Button'
import axios from 'axios'
const URL= 'http://localhost:5000/Analyse'

function Header() {
  const [data,setData] =useState ({});
  const analyse = async ()=>{
    const data =await axios.get(`${URL}/getsize`)
    console.log(data);
}
  return (
    <div className='header'>
      <div className='header_top'>
        <ActionButton Icon={MinimizeIcon} />
        <ActionButton Icon={CloseIcon} />
      </div>

      <div className='header_content'>
        <div style={{color: "#fefefe"}} className='header_texts'>
          <h2 style={{fontWeight: 500, marginBottom: 20}}>Analyse du PC nécessaire</h2>
          <TextItem title="Espace à nettoyer :" content="À déterminer par analyse" />
          <TextItem title="Dernière analyse :" content="08/06/2020" />
          <TextItem title="Dernière MAJ :" content="08/06/2020" />
        </div>
        <div className='button_container'>
          <Button button_style='bordered' content="ANALYSER" />
        </div>
      </div>

    </div>
  )
}

export default Header
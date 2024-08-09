'use client'

import '../Button/ButtonClean.css'
import { Button } from "@mui/material"
import { MdOutlineCleaningServices } from 'react-icons/md'

const ButtonClean = ({onClick}) => {
  return (
    <div className='button'>
    <Button variant="contained" className='btn' onClick={onClick}><MdOutlineCleaningServices /></Button>
    </div>
  )
}

export default ButtonClean
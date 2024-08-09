'use client'

import '../Button/ButtonSubmit.css'
import { Button } from "@mui/material"
import { MdLibraryAddCheck } from "react-icons/md"

const ButtonSubmit = ({onClick}) => {
  return (
    <div className='button'>
  <Button variant="contained" className='btn' onClick={onClick}><MdLibraryAddCheck /></Button>
  </div>
  )
}

export default ButtonSubmit
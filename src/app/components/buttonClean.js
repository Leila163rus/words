'use client'

import { Button } from "@mui/material"
import { MdOutlineCleaningServices } from 'react-icons/md'
import styles from '../page.module.css'

const ButtonClean = ({onClick}) => {
  return (
    <div className={styles.button}>
    <Button variant="contained" className={styles.btn} onClick={onClick}><MdOutlineCleaningServices /></Button>
    </div>
  )
}

export default ButtonClean
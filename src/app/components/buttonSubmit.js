'use client'

import { Button } from "@mui/material"
import { MdLibraryAddCheck } from "react-icons/md"
import styles from '../page.module.css'

const ButtonSubmit = ({onClick}) => {
  return (
    <div className={styles.button}>
  <Button variant="contained" className={styles.btn} onClick={onClick}><MdLibraryAddCheck /></Button>
  </div>
  )
}

export default ButtonSubmit
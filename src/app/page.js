'use client'

import React, { useEffect, useState } from 'react'
import Table from './components/Table/Table'
import Letter from './components/Letters/Letters'
import ButtonSubmit from './components/Button/ButtonSubmit'
import ButtonClean from './components/Button/ButtonClean'
import { randomWord } from './scripts/data'
import DialogSuccess from './components/Dialog/DialogSuccess'
import DialogLose from './components/Dialog/DialogLose'
import { Bounce, Zoom } from "react-awesome-reveal"
import Header from './components/Header/Header'
import DialogAlert from './components/Dialog/DialogAlert'
import { setLetterLength } from './scripts/setLetterLength'
import { setWinFinResult } from './scripts/setWinFinResult'

export const arrayRandomWord = randomWord.split('')

const Page = () => {
const [letter, setLetter] = useState([])
const [winWord, setWinWord] = useState()
const [loseWord, setLoseWord] = useState()
const [openSuccessDialog, setSuccessDialog] = useState(false)
const [openLoseDialog, setLoseDialog] = useState(false)
const [openAlertDialog, setAlertDialog] = useState(false)

const handleChange=(newLetter) => {
  setLetterLength(setLetter, letter, newLetter, loseWord)
}

const finResult = () => {
  letter?.length%5!=0? setAlertDialog(true) : null
  if(letter?.length%5===0) {
    setWinFinResult(randomWord, letter, setWinWord, setSuccessDialog)
  }
  if(!winWord && letter?.length%5===0 && randomWord !== letter.slice(20,25).join('')) {
    setLoseWord(letter)
  }
}

useEffect(() => {
  loseWord?.length===25? setLoseDialog(true) : null
},[letter, loseWord?.length])

const cleanLetter = () => {
  if(!loseWord || loseWord?.length!==letter?.length) {
    setLetter(letter.slice(0, -1))
  }
}

  return (
    <>
    <Zoom>
    <Header/>
    <Bounce>
    <Table letter={letter} winWord={winWord} loseWord={loseWord} ></Table>
    </Bounce>
    <Letter winWord={winWord} loseWord={loseWord} letter={letter} onClick={handleChange}/>
    <ButtonSubmit onClick={finResult}/>
    <ButtonClean onClick={cleanLetter}/>
    </Zoom>
    <DialogSuccess openSuccessDialog={openSuccessDialog} Close={()=>{setSuccessDialog(false); window.location.reload()}}/>
    <DialogLose openLoseDialog={openLoseDialog} Close={()=>{setLoseDialog(false); window.location.reload()}}/>
    <DialogAlert openAlertDialog={openAlertDialog} Close={() => setAlertDialog(false)}/>
    </>
    )
}

export default Page

'use client'

import '../Table/Td.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../../page'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { randomWord } from '@/app/scripts/data'

const Td1 = ({letter, loseWord, winWord}) => {
  let letter1 = letter?.slice(5, 10)
  let loseWord1 = loseWord?.slice(5,10)
  
  let letterArray1 = letter1?.concat(Array(5).fill(undefined)).slice(0, 5)

  const indexCorrectLetter = loseWord1?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord1?.filter((el, index) => el = indexCorrectLetter?.[index] !== arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord1?.filter(el => !arrayRandomWord.includes(el))

  return (
    <tr className='tr' key={letterArray1}>
        {letterArray1.map((val, index) => { return(
          <td className={classNames({
             td: !winWord?.includes(val) || !loseWord1,
             tdwin: winWord?.includes(val) || indexCorrectLetter?.includes(val),
             tdexist: indexCorrectLetter?.[index] !== letterArray1[index] && otherCorrectLetter?.includes(val),
             tdlose: unCorrectLetter?.includes(val)
        })}
           key={uuidv4()
           }>{val}
          </td>
        )})}
    </tr>
  )
}

export default Td1
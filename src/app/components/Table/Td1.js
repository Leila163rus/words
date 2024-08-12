'use client'

import '../Table/Td.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../../page'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

const Td1 = ({letter, loseWord, winWord}) => {
  let letter1 = letter?.slice(5, 10)
  let loseWord1 = loseWord?.slice(5,10)
  
  let letterArray1 = letter1?.concat(Array(5).fill(undefined)).slice(0, 5)

  const indexCorrectLetter1 = loseWord1?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter1 = loseWord1?.filter((el, index) => el = indexCorrectLetter1?.[index] !== arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter1 = loseWord1?.filter(el => !arrayRandomWord.includes(el))

  return (
    <tr className='tr' key={letterArray1}>
        {letterArray1.map((val, index) => { return(
          <td className={classNames({
             td: !winWord || !loseWord1,
             tdwin: winWord?.includes(val) || indexCorrectLetter1?.includes(val),
             tdexist: indexCorrectLetter1?.[index] !== letterArray1[index] && otherCorrectLetter1?.includes(val),
             tdlose: unCorrectLetter1?.includes(val)
        })}
           key={uuidv4()
           }>{val}
          </td>
        )})}
    </tr>
  )
}

export default Td1
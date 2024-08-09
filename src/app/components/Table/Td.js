'use client'

import styles from './Td.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../../page'
import { v4 as uuidv4 } from 'uuid'

const Td = ({letter, loseWord, winWord}) => {
  let letterArray = letter?.concat(Array(5).fill(undefined)).slice(0, 5)
  let loseWord0 = loseWord?.slice(0,5)

  const indexCorrectLetter = loseWord0?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord0?.filter((el, index) => el = indexCorrectLetter?.[index] !== arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord0?.filter(el => !arrayRandomWord.includes(el))

  return (
    <tr className='tr' key={letterArray}>
    {letterArray?.map((val, index) => { return(
      <td className={classNames({
         td: true,
         tdwin: indexCorrectLetter?.[index] === letterArray[index] || winWord?.includes(val),
         tdexist: indexCorrectLetter?.[index] !== letterArray[index] && otherCorrectLetter?.includes(val),
         tdlose: unCorrectLetter?.includes(val)
      })}
       key={uuidv4()}>{val}
      </td>
    )})}
    </tr>
  )
}

export default Td
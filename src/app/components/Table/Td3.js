'use client'

import '../Table/Td.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../../page'
import { v4 as uuidv4 } from 'uuid'

const Td3 = ({letter, loseWord, winWord}) => {
  let letter3 = letter?.slice(15, 20)
  let loseWord3 = loseWord?.slice(15, 20)
  
  let letterArray3 = letter3?.concat(Array(5).fill(undefined)).slice(0, 5)

  const indexCorrectLetter = loseWord3?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord3?.filter((el, index) => el = indexCorrectLetter?.[index] !== arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord3?.filter(el => !arrayRandomWord.includes(el))

  return (
    <tr className='tr' key={letterArray3}>
        {letterArray3?.map((val, index) => { return(
          <td className={classNames({
             td: !winWord || !loseWord3,
             tdwin: winWord?.includes(val) || indexCorrectLetter?.includes(val),
             tdexist: indexCorrectLetter?.[index] !== letterArray3[index] && otherCorrectLetter?.includes(val),
             tdlose: unCorrectLetter?.includes(val)
          })}
           key={uuidv4()}>{val}
          </td>
        )})}
    </tr>
  )
}

export default Td3
'use client'

import styles from '../page.module.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../page'
import { v4 as uuidv4 } from 'uuid'

const Td = ({letter, loseWord, winWord}) => {
  let letterArray = letter?.concat(Array(5).fill(undefined)).slice(0, 5)

  console.log('letterArray', letterArray)

  const indexCorrectLetter = loseWord?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord?.filter((el, index) => el = indexCorrectLetter?.[index] != arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord?.filter(el => !arrayRandomWord.includes(el))
  return (
    <tr className={styles.tr} key={letterArray}>
    {letterArray?.map((val, index) => { return(
      <td className={classNames({
         [styles.td]: !loseWord || !winWord,
         [styles.tdwin]: indexCorrectLetter?.[index] === letterArray[index] || winWord?.includes(val),
         [styles.tdexist]: indexCorrectLetter?.[index] != letterArray[index] && otherCorrectLetter?.includes(val),
         [styles.tdlose]: unCorrectLetter?.includes(val)
      })}
       key={uuidv4()}>{val}
      </td>
    )})}
    </tr>
  )
}

export default Td
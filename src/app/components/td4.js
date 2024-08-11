'use client'

import styles from '../page.module.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../page'
import { v4 as uuidv4 } from 'uuid'

const Td4 = ({letter, loseWord, winWord}) => {
  let letter4 = letter?.slice(20, 25)
  let loseWord4 = loseWord?.slice(20, 25)
  let winWord4 = winWord?.slice(20, 25)
  
  let letterArray4 = letter4?.concat(Array(5).fill(undefined)).slice(0, 5)
  console.log('letter4', letter4)

  const indexCorrectLetter = loseWord4?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord4?.filter((el, index) => el = indexCorrectLetter?.[index] != arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord4?.filter(el => !arrayRandomWord.includes(el))
  return (
    <tr className={styles.tr} key={letterArray4}>
        {letterArray4?.map((val, index) => { return(
          <td className={classNames({
             [styles.td]: letterArray4,
             [styles.tdwin]: indexCorrectLetter?.[index] == letterArray4[index] || winWord4?.includes(val),
             [styles.tdexist]: indexCorrectLetter?.[index] != letterArray4[index] && otherCorrectLetter?.includes(val),
             [styles.tdlose]: unCorrectLetter?.includes(val)
          })}
           key={uuidv4()}>{val}
          </td>
        )})}
    </tr>
  )
}

export default Td4
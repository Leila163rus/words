'use client'

import styles from '../page.module.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../page'
import { v4 as uuidv4 } from 'uuid'

const Td1 = ({letter, words, loseWord, winWord}) => {
  let letter1 = letter?.slice(5, 10)
  let loseWord1 = loseWord?.slice(5, 10)
  let winWord1 = winWord?.slice(5, 10)
  
  let letterArray1 = letter1?.concat(Array(5).fill(undefined)).slice(0, 5)
  console.log('letter1', letter1)

  const indexCorrectLetter = loseWord1?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord1?.filter((el, index) => el = indexCorrectLetter?.[index] != arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord1?.filter(el => !arrayRandomWord.includes(el))
  return (
    <tr className={styles.tr} key={letterArray1}>
        {letterArray1?.map((val, index) => { return(
          <td className={classNames({
             [styles.td]: !loseWord1 || !winWord1,
             [styles.tdwin]: winWord1?.includes(val) || indexCorrectLetter?.[index] == letterArray1[index],
             [styles.tdexist]: indexCorrectLetter?.[index] != letterArray1[index] && otherCorrectLetter?.includes(val),
             [styles.tdlose]: unCorrectLetter?.includes(val)
          })}
           key={uuidv4()
           }>{val}
          </td>
        )})}
    </tr>
  )
}

export default Td1
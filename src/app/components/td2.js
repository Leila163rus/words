'use client'

import styles from '../page.module.css'
import classNames from 'classnames'
import { arrayRandomWord } from '../page'
import { v4 as uuidv4 } from 'uuid'

const Td2 = ({letter, loseWord, winWord}) => {
  let letter2 = letter?.slice(10, 15)
  let loseWord2 = loseWord?.slice(10, 15)
  let winWord2 = winWord?.slice(10, 15)
  
  let letterArray2 = letter2?.concat(Array(5).fill(undefined)).slice(0, 5)
  console.log('letter2', letter2)

  const indexCorrectLetter = loseWord2?.map((el, index) => el = el === arrayRandomWord[index]? arrayRandomWord[index] : undefined)
  const otherCorrectLetter = loseWord2?.filter((el, index) => el = indexCorrectLetter?.[index] != arrayRandomWord[index] && arrayRandomWord.includes(el))
  const unCorrectLetter = loseWord2?.filter(el => !arrayRandomWord.includes(el))
  return (
    <tr className={styles.tr} key={letterArray2}>
        {letterArray2?.map((val, index) => { return(
          <td className={classNames({
             [styles.td]: letterArray2,
             [styles.tdwin]: indexCorrectLetter?.[index] == letterArray2[index] || winWord2?.includes(val),
             [styles.tdexist]: indexCorrectLetter?.[index] != letterArray2[index] && otherCorrectLetter?.includes(val),
             [styles.tdlose]: unCorrectLetter?.includes(val)
          })}
           key={uuidv4()}>{val}
          </td>
        )})}
    </tr>
  )
}

export default Td2
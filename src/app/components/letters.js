'use client'

import '../components/Letters.css'
import classNames from 'classnames'
import { data, randomWord } from '../scripts/data'
import { v4 as uuidv4 } from 'uuid'

const Letter = ({letter, winWord, loseWord, onClick}) => {

const handleValue = (event) => {
  event.preventDefault();
  onClick(event.target.textContent)
}

const arrayRandomWord = randomWord.split('')

const correctLetter = loseWord?.filter(el => arrayRandomWord.includes(el))
const unCorrectLetter = loseWord?.filter(el => !arrayRandomWord.includes(el))

  return (
    <div>
      <table className='tableletters'>
      <tbody>
      <tr >
        {data.map((val) => {
            return (
              <th
              className={classNames({
                lettersanime: letter.length == 0,
                letters: !winWord || !loseWord,
                letterswin: winWord?.includes(val) || correctLetter?.includes(val),
                letterslose: unCorrectLetter?.includes(val)
              })}
               key={uuidv4()} onClick={handleValue}>{val}
               </th>
            )
        })}
      </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Letter
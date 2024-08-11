'use client'

import styles from '../page.module.css'
import Td1 from './td1'
import Td from './td'
import Td2 from './td2'
import Td3 from './td3'
import Td4 from './td4'

const Table  = ({letter, words, winWord, loseWord}) => {

  return (
    <main >
       <table className={styles.table} >
         <tbody >
          <Td letter={letter} winWord={winWord} loseWord={loseWord} />
          <Td1 letter={letter} winWord={winWord} loseWord={loseWord} />
          <Td2 letter={letter} winWord={winWord} loseWord={loseWord} />
          <Td3 letter={letter} winWord={winWord} loseWord={loseWord} />
          <Td4 letter={letter} winWord={winWord} loseWord={loseWord} />
        </tbody>
      </table>
    </main>
  )
}

export default Table
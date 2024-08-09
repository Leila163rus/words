'use client'

import '../Table/Table.css'
import Td1 from './Td1'
import Td from './Td'
import Td2 from './Td2'
import Td3 from './Td3'
import Td4 from './Td4'

const Table  = ({letter, winWord, loseWord}) => {

  return (
    <main >
       <table className='table'>
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
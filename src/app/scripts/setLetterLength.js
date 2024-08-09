export function setLetterLength(setLetter, letter, newLetter, loseWord) {
  setLetter([...letter, newLetter].slice(0,5))
   if(loseWord?.length==5) {
    setLetter([...letter, newLetter].slice(0, 10))
  } else if(loseWord?.length==10) {
    setLetter([...letter, newLetter].slice(0, 15))
  } else if(loseWord?.length==15) {
    setLetter([...letter, newLetter].slice(0, 20))
  } else if(loseWord?.length==20) {
    setLetter([...letter, newLetter].slice(0, 25))
  }
}
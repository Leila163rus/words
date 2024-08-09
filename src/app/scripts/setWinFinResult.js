export function setWinFinResult(randomWord, letter, setWinWord, setSuccessDialog) {
  if(randomWord == letter.slice(0,5).join('')) {
    setWinWord(letter.slice(0,5))
    setSuccessDialog(true)
  } else if(randomWord == letter.slice(5,10).join('')) {
    setWinWord(letter.slice(5,10))
    setSuccessDialog(true)
  } else if(randomWord == letter.slice(10,15).join('')) {
    setWinWord(letter.slice(10,15))
    setSuccessDialog(true)
  } else if(randomWord == letter.slice(15,20).join('')) {
    setWinWord(letter.slice(15,20))
    setSuccessDialog(true)
  } else if(randomWord == letter.slice(20,25).join('')) {
    setWinWord(letter.slice(20,25))
    setSuccessDialog(true)
  }
}
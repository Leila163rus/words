'use client'

import {Dialog} from '@mui/material'
import {DialogTitle} from '@mui/material'
import {DialogContent} from '@mui/material'
import {DialogContentText} from '@mui/material'
import {DialogActions} from '@mui/material'
import {Button} from '@mui/material'

const DialogSuccess = ({openSuccessDialog, Close}) => {
  return (
    <Dialog
        open={openSuccessDialog}
        className='dialog'
        style={{border: '5px solid rgb(133, 125, 10)'}}
        >
        <DialogTitle 
        style={{textAlign: 'center', color: 'rgb(133, 125, 10)', fontSize: '35px'}}
        >Поздравляем!</DialogTitle>
        <DialogContent>
            <DialogContentText 
            style={{textAlign: 'center', color: 'rgb(133, 125, 10)', fontSize: '18px'}}
            >Вы угадали слово!</DialogContentText>
        </DialogContent>
        <DialogActions>                    
            <Button onClick={Close} 
            style={{color: 'rgb(133, 125, 10)'}}>
                {"OK"}
            </Button>
        </DialogActions>
    </Dialog>
  )
}

export default DialogSuccess
'use client'

import {Dialog} from '@mui/material'
import {DialogTitle} from '@mui/material'
import {DialogContent} from '@mui/material'
import {DialogContentText} from '@mui/material'
import {DialogActions} from '@mui/material'
import {Button} from '@mui/material'

const DialogLose = ({openLoseDialog, Close}) => {
  return (
    <>
    <Dialog
        open={openLoseDialog}
        style={{border: '5px solid navy'}}
        >
        <DialogTitle style={{textAlign: 'center', fontSize: '40px'}}>Увы!</DialogTitle>
        <DialogContent>
            <DialogContentText style={{textAlign: 'center', color: 'black', fontSize: '20px'}}>Вы не угадали слово!</DialogContentText>
        </DialogContent>
        <DialogActions>                    
            <Button onClick={Close}>
                {"OK"}
            </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default DialogLose
'use client'

import {Dialog} from '@mui/material'
import {DialogContent} from '@mui/material'
import {DialogContentText} from '@mui/material'
import {DialogActions} from '@mui/material'
import {Button} from '@mui/material'

const DialogAlert = ({openAlertDialog, Close}) => {
  return (
    <>
    <Dialog
        open={openAlertDialog}
        className='dialog'
        style={{border: '5px solid navy'}}
        >
        <DialogContent>
            <DialogContentText 
            style={{textAlign: 'center', color: 'black', fontSize: '20px'}}
            >Вы не заполнили все ячейки!</DialogContentText>
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

export default DialogAlert
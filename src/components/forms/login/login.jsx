import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from '../../header/button/button.module.scss'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={styles.button} variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Вход на сайт</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Введите телефон"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>отмена</Button>
          <Button onClick={handleClose}>Получить код</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
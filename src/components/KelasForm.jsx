import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, FormLabel, RadioGroup, Radio } from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button } from 'antd';

const KelasForm = () => {
  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  return (
    <div className="container-murid-form-dialog">
      <div className="header-murid-form">
        <Button onClick={functionopenpopup} className="btn-add-murid">
          Tambah Kelas
        </Button>
        <TextField variant="outlined" label="Search"></TextField>
      </div>
      <Dialog
        // fullScreen
        open={open}
        onClose={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Tambah Kelas{' '}
          <IconButton onClick={closepopup} style={{ float: 'right' }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Nama Kelas"></TextField>
            <TextField variant="outlined" label="Nama Ruangan"></TextField>
            <TextField variant="outlined" label="Nama Wali Kelas"></TextField>

            <Button onClick={closepopup} className="btn-save-murid">
              Tambah Kelas
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default KelasForm;

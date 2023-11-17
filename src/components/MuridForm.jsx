import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, FormLabel, RadioGroup, Radio } from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button } from 'antd';

const MuridForm = () => {
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
          Tambah Murid
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
          Tambah Murid{' '}
          <IconButton onClick={closepopup} style={{ float: 'right' }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Kelas"></TextField>
            <TextField variant="outlined" label="Nama"></TextField>

            <TextField variant="outlined" label="NIS"></TextField>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
              <FormControlLabel value="Lak-laki" control={<Radio />} label="Female" />
              <FormControlLabel value="Perempuan" control={<Radio />} label="Male" />
            </RadioGroup>

            <Button onClick={closepopup} className="btn-save-murid">
              Tambah Murid
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MuridForm;

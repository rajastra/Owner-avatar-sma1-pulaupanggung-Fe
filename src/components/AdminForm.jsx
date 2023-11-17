import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, FormLabel, RadioGroup, Radio } from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button } from 'antd';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';

const AdminForm = () => {
  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="container-murid-form-dialog">
      <div className="header-murid-form">
        <Button onClick={functionopenpopup} className="btn-add-murid">
          Tambah Admin
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
          Tambah Admin{' '}
          <IconButton onClick={closepopup} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Nama"></TextField>
            <TextField variant="outlined" label="Email"></TextField>
            <FormLabel id="demo-radio-buttons-group-label">Jenis Kelamin</FormLabel>

            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <TextField variant="outlined" label="Username"></TextField>
            <TextField variant="outlined" label="Password"></TextField>
            <TextField variant="outlined" label="Ulangi Password"></TextField>
            <TextField variant="outlined" label="Nomor Kontak"></TextField>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
              <MenuItem value={'Kepala Sekolah'}>Kepala Sekolah</MenuItem>
              <MenuItem value={'Waka Kurikulum'}>Waka Kurikulum</MenuItem>
              <MenuItem value={'Laboran'}>Laboran</MenuItem>
            </Select>
            <div className="upload-photo-container">
              <Button onClick={closepopup} className="btn-upload-photo">
                Upload foto
              </Button>
              <div>
                <span className="file-photo">no choosen file</span>
              </div>
            </div>

            <Button onClick={closepopup} className="btn-save-murid">
              Tambah Admin
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AdminForm;

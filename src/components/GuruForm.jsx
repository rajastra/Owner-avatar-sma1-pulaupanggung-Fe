import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, FormLabel, RadioGroup, Radio } from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

const GuruForm = ({ closepopup, functionopenpopup, open, onCreate }) => {
  const [formState, setFormState] = useState({
    nip: '',
    name: '',
    address: '',
    email: '',
    phone_number: '',
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClose = () => {
    closepopup();
    setFormState({
      nip: '',
      name: '',
      address: '',
      email: '',
      phone_number: '',
    });
  };

  const handleSubmit = async () => {
    // Perform data submission logic here
    try {
      await axios.post(`${API_URL}/api/v1/teachers`, {
        nip: formState.nip,
        name: formState.name,
        address: formState.address,
        email: formState.email,
        phone_number: formState.phone_number,
      });
      message.success('Berhasil menambahkan Guru');
      setFormState({
        nip: '',
        name: '',
        address: '',
        email: '',
        phone_number: '',
      });
      onCreate();
    } catch (error) {
      let msg = error.response?.data?.message ?? 'Terjadi kesalahan';
      message.error(msg);
    }
  };

  return (
    <div className="container-murid-form-dialog">
      <div className="header-murid-form">
        <Button onClick={functionopenpopup} className="btn-add-murid">
          Tambah Data Guru & Tendik
        </Button>
        <TextField variant="outlined" label="Search" className='Search'></TextField>
      </div>
      <Dialog
        // fullScreen
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Tambah Guru{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="NPY" name="nip" onChange={handleChange} value={formState.nip}></TextField>
            <TextField variant="outlined" label="Nama" name="name" onChange={handleChange} value={formState.name}></TextField>
            <TextField variant="outlined" label="Email" name="email" onChange={handleChange} value={formState.email}></TextField>
            <TextField variant="outlined" label="Alamat" name="address" onChange={handleChange} value={formState.address}></TextField>
            <TextField variant="outlined" label="No. Telepon" name="phone_number" onChange={handleChange} value={formState.phone_number}></TextField>
            
            <div className="upload-photo-container">
                <FormLabel id="label">Photo</FormLabel>
                <input type="file" id="myFile" name="filename"></input>
            </div>

            <Button onClick={handleSubmit} className="btn-save-murid">
              Simpan
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default GuruForm;

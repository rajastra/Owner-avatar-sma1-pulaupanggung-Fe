import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

const MuridForm = ({ closepopup, functionopenpopup, open, onCreate }) => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    nama: '',
    nis: '',
    age: '',
    address: '',
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
      nama: '',
      nis: '',
      age: '',
      address: '',
    });
  };

  const handleSubmit = async () => {
    // Perform data submission logic here
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/v1/students`, {
        name: formState.nama,
        nis: formState.nis,
        age: formState.age,
        address: formState.address,
      });
      message.success('Berhasil menambahkan murid');
      setFormState({
        nama: '',
        nis: '',
        age: '',
        address: '',
      });
      onCreate();
    } catch (error) {
      let msg = error.response?.data?.message ?? 'Terjadi kesalahan';
      message.error(msg);
    }
    setLoading(false);
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
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Tambah Murid{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" name="nama" label="Nama" onChange={handleChange} value={formState.nama}></TextField>

            <TextField variant="outlined" name="nis" label="NIS" onChange={handleChange} value={formState.nis}></TextField>

            <TextField variant="outlined" name="age" type="number" label="Age" onChange={handleChange} value={formState.age}></TextField>

            <TextField variant="outlined" name="address" label="Alamat" onChange={handleChange} value={formState.address}></TextField>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
              <FormControlLabel value="Lak-laki" control={<Radio />} label="Female" />
              <FormControlLabel value="Perempuan" control={<Radio />} label="Male" />
            </RadioGroup> */}

            <Button onClick={handleSubmit} className="btn-save-murid" loading={loading}>
              Tambah Murid
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MuridForm;

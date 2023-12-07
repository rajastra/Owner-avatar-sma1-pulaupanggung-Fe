import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

const MuridFormEdit = ({ closepopup, open, onEdit, user }) => {
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

  useEffect(() => {
    if (open) {
      setFormState({
        nama: user.name,
        nis: user.nis,
        age: user.age,
        address: user.address,
      });
    }
  }, [open, user]);

  const handleSubmit = async () => {
    // Perform data submission logic here
    setLoading(true);
    try {
      await axios.patch(`${API_URL}/api/v1/students/${user.id}`, {
        name: formState.nama,
        nis: formState.nis,
        age: formState.age,
        address: formState.address,
      });
      // ini contoh buat kalau ada upload file
      // const response = await axios.post(`${API_URL}/api/v1/users`, formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      message.success('Berhasil edit data murid');
      setFormState({
        nama: '',
        nis: '',
        age: '',
        address: '',
      });
      onEdit();
    } catch (error) {
      let msg = error.response.data.message || 'Terjadi kesalahan';
      message.error(msg);
    }
    setLoading(false);
  };

  return (
    <div className="container-murid-form-dialog">
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
            <TextField variant="outlined" name="nama" label="Name" onChange={handleChange} value={formState.nama}></TextField>
            <TextField variant="outlined" name="nis" label="NIS" onChange={handleChange} value={formState.nis}></TextField>

            <TextField variant="outlined" name="age" type="number" label="Age" onChange={handleChange} value={formState.age}></TextField>
            <TextField variant="outlined" name="address" label="Alamat" onChange={handleChange} value={formState.address}></TextField>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
              <FormControlLabel value="Lak-laki" control={<Radio />} label="Female" />
              <FormControlLabel value="Perempuan" control={<Radio />} label="Male" />
            </RadioGroup> */}

            <Button onClick={handleSubmit} className="btn-save-murid" loading={loading}>
              Edit Murid
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MuridFormEdit;

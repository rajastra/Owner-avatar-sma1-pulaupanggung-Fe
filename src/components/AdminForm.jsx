import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button, message } from 'antd';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

const AdminForm = ({ closepopup, functionopenpopup, open, onCreate }) => {
  const [formState, setFormState] = useState({
    nama: '',
    email: '',
    username: '',
    password: '',
    role: '',
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
      email: '',
      username: '',
      password: '',
      role: '',
    });
  };


  const handleSubmit = async () => {
    // Perform data submission logic here
    try {
      await axios.post(`${API_URL}/api/v1/users`, {
        name: formState.nama,
        email: formState.email,
        username: formState.username,
        password: formState.password,
        role: formState.role,
      },
      );
      // ini contoh buat kalau ada upload file
      // const response = await axios.post(`${API_URL}/api/v1/users`, formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      message.success('Berhasil menambahkan admin');
      setFormState({
        nama: '',
        email: '',
        username: '',
        password: '',
        role: '',
      });
      onCreate();
    } catch (error) {
      let msg = error.response.data.message || 'Terjadi kesalahan';
      message.error(msg);
    }
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
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Tambah Admin{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField
              variant="outlined"
              label="Nama"
              name="nama"
              onChange={handleChange}
              value={formState.nama}
            ></TextField>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              onChange={handleChange}
              value={formState.email}
            ></TextField>

            <TextField
              variant="outlined"
              label="Username"
              name="username"
              onChange={handleChange}
              value={formState.username}
            ></TextField>
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              onChange={handleChange}
              value={formState.password}
            ></TextField>
            <Select
              labelId="demo-simple-select-label"
              id="role"
              label="Role"
              name="role"
              value={formState.role}
              onChange={handleChange}
            >
              <MenuItem value={'Admin'}>Admin</MenuItem>
              <MenuItem value={'User'}>user</MenuItem>
              <MenuItem value={'Laboran'}>Laboran</MenuItem>
            </Select>
            {/* <div className="upload-photo-container">
              <Button onClick={closepopup} className="btn-upload-photo">
                Upload foto
              </Button>
              <div>
                <span className="file-photo">no choosen file</span>
              </div>
            </div> */}

            <Button onClick={handleSubmit} className="btn-save-murid">
              Tambah Admin
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminForm;
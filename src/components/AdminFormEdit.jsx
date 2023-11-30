import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

const AdminFormEdit = ({ closepopup, open, onEdit, user }) => {
  const [formState, setFormState] = useState({
    nama: '',
    email: '',
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
      password: '',
      role: '',
    });
  };

  useEffect(() => {
    if (open) {
      setFormState({
        nama: user.username,
        email: user.email,
        role: user.role,
      });
    }
  }, [open, user]);

  const handleSubmit = async () => {
    // Perform data submission logic here
    try {
      await axios.patch(`${API_URL}/api/v1/users/${user.id}`, {
        name: formState.nama,
        email: formState.email,
        password: formState.password,
        role: formState.role,
      });
      message.success('Berhasil menambahkan admin');
      setFormState({
        nama: '',
        email: '',
        password: '',
        role: '',
      });
      onEdit();
    } catch (error) {
      let msg = error.response.data.message || 'Terjadi kesalahan';
      message.error(msg);
    }
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
          Edit Admin{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Nama" name="nama" onChange={handleChange} value={formState.nama}></TextField>
            <TextField variant="outlined" label="Email" name="email" onChange={handleChange} value={formState.email}></TextField>
            <TextField variant="outlined" label="Password" name="password" onChange={handleChange} value={formState.password}></TextField>
            <Select labelId="demo-simple-select-label" id="role" label="Role" name="role" value={formState.role} onChange={handleChange}>
              <MenuItem value={'admin'}>Admin</MenuItem>
              <MenuItem value={'user'}>user</MenuItem>
              <MenuItem value={'laboran'}>Laboran</MenuItem>
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
              Edit Admin
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminFormEdit;

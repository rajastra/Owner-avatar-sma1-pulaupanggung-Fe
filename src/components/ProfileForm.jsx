import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField, FormLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

const ProfileForm = ({ closepopup, functionopenpopup, open, onCreate }) => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    code: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
      name: '',
      description: '',
      code: '',
    });
  };

  const handleSubmit = async () => {
    // Perform data submission logic here
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/v1/profiles`, {
        name: formState.name,
        description: formState.description,
        code: formState.code,
        photo: selectedFile
      },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      message.success('Berhasil menambahkan Guru');
      setFormState({
        name: '',
        description: '',
        code: '',
      });
      setSelectedFile(null);
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
          Tambah Profile
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
          Tambah Profile{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Nama" name="name" onChange={handleChange} value={formState.name}></TextField>
            <TextField variant="outlined" label="Kode" name="code" onChange={handleChange} value={formState.code}></TextField>
            <TextField variant="outlined" label="Deskripsi" name="description" multiline rows={15} maxRows={15} onChange={handleChange} value={formState.description}></TextField>

            <div className="upload-photo-container">
              <FormLabel id="label">Photo</FormLabel>
              <input type="file" id="myFile" name="filename" onChange={handleFileSelect}></input>
            </div>

            <Button onClick={handleSubmit} className="btn-save-murid" loading={loading}>
              Simpan
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ProfileForm;

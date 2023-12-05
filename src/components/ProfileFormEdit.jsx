import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField, FormLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

const ProfileFormEdit = ({ closepopup, open, onEdit, user }) => {
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

  useEffect(() => {
    if (open) {
      setFormState({
        name: user.name,
        description: user.description,
        code: user.code,
      });
      setSelectedFile(user.photo);
    }
  }, [open, user]);

  const handleSubmit = async () => {
    // Perform data submission logic here
    setLoading(true);
    try {
      await axios.patch(`${API_URL}/api/v1/profiles/${user.id}`, {
        name: formState.name,
        description: formState.description,
        code: formState.code,
        photo: selectedFile
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Berhasil memperbaharui data profile');
      setFormState({
        name: '',
        description: '',
        code: '',
      });
      setSelectedFile(null);
      onEdit();
    } catch (error) {
      let msg = error.response?.data?.message ?? 'Terjadi kesalahan';
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
          Edit Profile{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Nama" name="name" onChange={handleChange} value={formState.name}></TextField>
            <TextField variant="outlined" label="Kode" name="code" onChange={handleChange} value={formState.code}></TextField>
            <TextField variant="outlined" label="Deskripsi" multiline rows={15} maxRows={15} name="description" onChange={handleChange} value={formState.description}></TextField>

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
export default ProfileFormEdit;

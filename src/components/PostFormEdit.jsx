import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField, FormLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

const PostForm = ({ closepopup, open, onEdit, user }) => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    kategori: '',
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
      title: '',
      description: '',
      kategori: '',
    });
  };

  useEffect(() => {
    if (open) {
      setFormState({
        title: user.title,
        description: user.description,
        kategori: user.kategori,
      });
    }
  }, [open, user]);

  const handleSubmit = async () => {
    // Perform data submission logic here
    try {
      await axios.post(`${API_URL}/api/v1/beritas`, {
        title: formState.title,
        description: formState.description,
        kategori: formState.kategori,
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
        title: '',
        description: '',
        kategori: '',
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
          Tambah Postingan{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Judul" name="title" onChange={handleChange} value={formState.title}></TextField>
            <TextField variant="outlined" label="Isi Berita" multiline rows={20} maxRows={20} name="description" onChange={handleChange} value={formState.description}></TextField>
            <TextField variant="outlined" label="Tanggal"></TextField>
            <TextField variant="outlined" label="Kategori" name="kategori" onChange={handleChange} value={formState.kategori}></TextField>
            {/*<Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
              <MenuItem value={'News'}>News</MenuItem>
              <MenuItem value={'Kegiatan'}>Kegiatan</MenuItem>
  </Select>*/}

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
export default PostForm;

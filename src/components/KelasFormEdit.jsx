import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, FormLabel, RadioGroup, Radio } from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

const KelasFormEdit = ({ closepopup, open, onEdit, user }) => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
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
      name: '',
      description: '',
    });
  };

  useEffect(() => {
    if (open) {
      setFormState({
        name: user.name,
        description: user.description,
      });
    }
  }, [open, user]);

  const handleSubmit = async () => {
    // Perform data submission logic here
    try {
      await axios.patch(`${API_URL}/api/v1/classes/${user.id}`, {
        name: formState.name,
        description: formState.description,
      });

      message.success('Berhasil menambahkan admin');
      setFormState({
        name: '',
        description: '',
      });
      onEdit();
    } catch (error) {
      let msg = error.response?.data?.message ?? 'Terjadi kesalahan';
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
          Tambah Kelas{' '}
          <IconButton onClick={handleClose} style={{ float: 'right' }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" name="name" onChange={handleChange} label="Nama Kelas" value={formState.name}></TextField>
            <TextField variant="outlined" name="description" onChange={handleChange} value={formState.description} label="Deskripsi Kelas"></TextField>

            <Button onClick={handleSubmit} className="btn-save-murid">
              Tambah Kelas
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default KelasFormEdit;

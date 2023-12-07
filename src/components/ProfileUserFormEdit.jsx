import { Dialog, DialogContent, DialogTitle, IconButton, Stack, FormLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

const ProfileFormEdit = ({ closepopup, open, onEdit }) => {
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const API_URL = import.meta.env.VITE_API_URL;


  const handleClose = () => {
    closepopup();
  };


  const handleSubmit = async () => {
    // Perform data submission logic here
    setLoading(true);
    try {
      await axios.patch(`${API_URL}/api/v1/users/update-photo/${Cookies.get('user_id')}`, {
        photo: selectedFile
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Berhasil memperbaharui gambar user');
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

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/sma.png';

import { menuItems } from '../menuitems';
import MenuItems from './MenuItems';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, openchange] = useState(false);
  const [search, setSearch] = useState('');
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
    setSearch('')
  };

  const navigate = useNavigate();
  const movetToBerita = () => {
    // move to barita and passing the params
    navigate('/berita?search=' + search);
    closepopup()
  };

  return (
    <header className="header-navbar-container">
      <div className="nav-area">
        <NavLink href="/" className="logo">
          <img className="navbar-logo" src={logo} alt="" />
        </NavLink>
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
            <NavLink to="/login" style={{
              cursor: 'pointer',
            }}>
              <button className="btn-login" type="submit">
                Login
              </button>
            </NavLink>
            <Button onClick={functionopenpopup} className="searchIcon">
              <SearchIcon />
            </Button>
            <Dialog
              // fullScreen
              open={open}
              onClose={closepopup}
              fullWidth
              maxWidth="sm"
            >
              <DialogTitle>
                Ketik Disini{' '}
                <IconButton onClick={closepopup} style={{ float: 'right' }}>
                  <CloseIcon color="primary"></CloseIcon>
                </IconButton>{' '}
              </DialogTitle>
              <DialogContent>
                {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                <Stack spacing={2} margin={2}>
                  <TextField variant="outlined" label="Ketik Disini"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  ></TextField>
                  <Button onClick={movetToBerita} className="btn-save-murid" >
                    Search
                  </Button>
                </Stack>
              </DialogContent>
            </Dialog>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

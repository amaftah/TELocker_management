import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import BoyIcon from '@mui/icons-material/Boy';
import WomanIcon from '@mui/icons-material/Woman';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';



export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/other">
      <ListItemIcon>
        <BoyIcon />
      </ListItemIcon>
      <ListItemText primary="Man" />
    </ListItemButton>
    <ListItemButton component={Link} to="/women">
      <ListItemIcon>
        <WomanIcon />
      </ListItemIcon>
      <ListItemText primary="Women" />
    </ListItemButton>
    <ListItemButton component={Link} to="/lockers">
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Lockers" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItemButton>
  </React.Fragment>
);

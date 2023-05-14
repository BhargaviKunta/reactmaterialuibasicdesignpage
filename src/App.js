import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { BottomNavigation, ImageList, makeStyles } from '@mui/material';
import {Stack} from '@mui/material';
import {BottomNavigationAction} from '@mui/material';
import Edu from './assets/edu.png';
import Header from './header';
import Footer from './footer';
import Image from './image';
import Content from './content';
import Blogs from './blogs';
import Search from './search'
function App() {
 
  return (
     <div >
      <Header/>
      <Image/>
      <Content/>
      <Blogs />
      <Search / >
      </div>
  );
}

export default App;

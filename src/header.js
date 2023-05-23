import { AppBar, Toolbar,Tabs,Tab, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Head1 from './assets/head1.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import {Stack} from '@mui/material'

const useStyles=makeStyles((theme)=>({
  appbar:{
    marginTop:"30px",
    [theme.breakpoints.between("xs","lg")]:{
      height:150
    },
    height:110,
    direction:{
        xs:"column",
        sm:"column",
        md:"column",
        lg:"row"
    },
    width:{
      xs:300,
      sm:500,
      md:800,
      lg:1600,
      xl:2000
    },
    backgroundColor:"black",
    color:"white",
    position:"absolute"
  },
  logo:{
    marginLeft:"50px",
    marginTop:"20px",
    maxWidth:"100px"
  },
  tabs:{
    marginTop:"30px",
    color:"white"
  },
  stack:{
    marginLeft:"20px"
  },
  nofify:{
    color:"white",
    margin:"1px",
    maxWidth:"20px",
    border: "1px solid white"
  },
  star:{
    maxWidth:"20px",
    border: "1px solid white",
    margin:"1px"
  },
  box:{
    marginTop:"200px",
    marginRight:"200px"
  }
}))


function Header() {
  
  const Classes=useStyles();
  return (
    
    <React.Fragment>
        <AppBar className={Classes.appbar} sx={{backgroundColor:"black"}}>
          
            <Toolbar   sx={{color:"white"}}  className={Classes.direction}>
            <img src={Head1} alt="logo" className={Classes.logo} />
               <Stack direction={{ xs: 'column', sm: 'row' }} className={Classes.stack}
   justifyContent={"space-between"} spacing={{xs:5,sm:7,md:9,lg:12,xl:15}} alignItems={"center"}>
                <Typography variant='h6'>Home</Typography>
                <Typography variant='h6'>Category</Typography>
                <Typography variant='h6'>Content</Typography>
                <Typography variant='h6'>ContentProvider</Typography>
                <Typography variant='h6'>DiscussionForm</Typography>
                <Typography variant='h6'>CareerExpert</Typography>
                <Typography variant='h6'>ContactUs</Typography>
                <Typography variant='h6'>AboutUs</Typography>
                <Typography variant='h6'>SignIn</Typography>
                <NotificationsNoneIcon className={Classes.nofify}></NotificationsNoneIcon>
                <StarBorderPurple500Icon className={Classes.star}></StarBorderPurple500Icon>
               </Stack>
                
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header
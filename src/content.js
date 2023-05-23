import React from 'react'
import {Box,Typography,Button,Stack} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {makeStyles} from '@material-ui/core';
import { Theme } from '@mui/material';
const useStyles=makeStyles(theme => ({
    box:{
      border:"2px solid black",padding:50,
      marginLeft:100,
      marginRight:100, 
      [theme.breakpoints.between("xs","lg")]:{
      width:1000,
      marginLeft:750
      }
    
    }
}))
function Content(){
  const Classes=useStyles();
  return (
    <React.Fragment>
      
        <Box className={Classes.box}>
            <Typography variant="h5" textcolor="primary">One of Saturn's largest rings may be newer than anyone<Button variant="outlined" sx={{marginLeft:100}}>Follow</Button></Typography>
            <Typography variant="subtitle1" sx={{color:"blue"}}>Rickie Baroch</Typography> 
            <Typography variant="subtitle2" sx={{color:"blue"}}>Category:government Job</Typography>
            <Typography variant="body1">June 6,2019.</Typography>
            <Typography paragraph >Your "About Us" page is perhaps the main page on your site, and it should be well crafted. This page likewise can also turn out to be the most disregarded pages, which is why you should make it stick out. Wouldn't it be easier if you could look at About Us page examples to create a killer About Us page? Well, truth be told, there are a few organizations out there with astounding "About Us" pages, the components of which you can imitate on your own site.We've done the job for you and put together the best About Us page examples to get your imaginative gears rolling. But before we jump onto the best about us page examples, let’s have a look at what is an about us page and why it’s important to create one.We've done the job for you and put together the best About Us page examples to get your imaginative gears rolling. But before we jump onto the best about us page examples, let’s have a look at what is an about us page and why it’s important to create one.

 </Typography>
            <Typography variant="subtitle2" textcolor="primary"></Typography>
            <Typography paragraph >Your "About Us" page is perhaps the main page on your site, and it should be well crafted. This page likewise can also turn out to be the most disregarded pages, which is why you should make it stick out. Wouldn't it be easier if you could look at About Us page examples to create a killer About Us page? Well, truth be told, there are a few organizations out there with astounding "About Us" pages, the components of which you can imitate on your own site.We've done the job for you and put together the best About Us page examples to get your imaginative gears rolling. But before we jump onto the best about us page examples, let’s have a look at what is an about us page and why it’s important to create one.We've done the job for you and put together the best About Us page examples to get your imaginative gears rolling. But before we jump onto the best about us page examples, let’s have a look at what is an about us page and why it’s important to create one.
 </Typography>


 <Typography>
 We've done the job for you and put together the best About Us page examples to get your imaginative gears rolling. But before we jump onto the best about us page examples, let’s have a look at what is an about us page and why it’s important to create one.
 </Typography>
 <Stack direction="row" spacing={2} marginTop={2}>
     <Button variant='contained' sx={{backgroundColor:"white",color:"black",borderRadius:"10px",height:"20px"}}>#exam</Button>
     <Button variant='contained'sx={{backgroundColor:"white",color:"black",borderRadius:"10px",height:"20px"}}>#exam</Button>
     <Button variant='contained' sx={{backgroundColor:"white",color:"black",borderRadius:"10px",height:"20px"}}>#exam</Button>
     <Button variant='contained' sx={{backgroundColor:"white",color:"black",borderRadius:"10px",height:"20px"}}>#exam</Button>
 </Stack>
 <Stack direction="row">
 <VisibilityIcon sx={{marginTop:"10px"}}></VisibilityIcon>
 <Typography variant={"subtitle2"} sx={{marginTop:"10px"}}>24.6k</Typography>
 <Button variant="contained" sx={{backgroundColor:"orange",marginLeft:"auto"}}>Share</Button>
  </Stack>
        </Box>
    </React.Fragment>
  )
}

export default Content
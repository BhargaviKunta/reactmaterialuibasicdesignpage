import {  Icon, Typography } from '@mui/material'
import React from 'react'
import Edu from './assets/edu.png'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import { Dangerous } from '@mui/icons-material'
import {Stack,Box} from '@mui/material'

const footer = () => {
  return (
    <React.Fragment>
       
 <Stack direction={"row"} sx={{backgroundColor:"black",marginTop:"200px"}}>
 <Grid flexDirection={"column"} item xs={4} lg={4} sx={{display:{xs:{width:"300px"},lg:{width:"600px"}}}}><Box>
            <Typography variant="h3" sx={{color:"white",width:"200px",height:"300px",textAlign:"center",paddingTop:"30px",paddingRight:"20px"}}> Stay Updated with Our App!!</Typography>
            <Typography sx={{color:"red",marginRight:"20px"}}>Downoad Now <DownloadIcon sx={{color:"white"}}></DownloadIcon></Typography></Box></Grid>
         
           <Grid item xs={4} lg={4} sx={{marginBottom:"200px"}}>
          <img src={Edu} style={{width:"300px",height:"300px",marginLeft:"400px"}} /></Grid>
           <Grid item xs={4} lg={4} sx={{marginBottom:"200px"}}>
            <img src={Edu} style={{width:"300px",height:"300px"}} /></Grid>
        
 </Stack>
           

      
    </React.Fragment>
  )
}

export default footer
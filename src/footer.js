import {  Icon, Typography } from '@mui/material'
import React from 'react'
import Edu from './assets/edu.png'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import { Dangerous } from '@mui/icons-material'
import {Stack,Box} from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Theme } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const useStyles=makeStyles((theme)=>({
    stack:{
      backgroundColor:"black",marginTop:200,
      width:2800
    },
    text1:{
      color:"white",width:300,height:180,textAlign:"center",paddingTop:4,paddingRight:40
    },
    text2:{
      color:"red"
    },
   grid1:{
   marginBottom:20,width:300,height:250,marginLeft:1100
   },
   grid2:{
    marginBottom:20,width:300,height:250,marginRight:700
   }
}))
function Footer(){
  const Classes=useStyles();
  return (
    <React.Fragment>
       
 <Stack direction={"row"} className={Classes.stack}>
 <Grid flexDirection={"column"} item justifyContent={"space-around"} alignItems={"flex-start"}><Box>
            <Typography variant="h3" className={Classes.text1} sx={{marginLeft:10,marginTop:10}}> Stay Updated with Our App!!</Typography>
            <Typography className={Classes.text2} sx={{marginLeft:12,fontSize:30}}>Downoad Now <PlayArrowIcon sx={{color:"white",fontSize:35,border:"1px solid white",marginLeft:4,marginTop:2}}></PlayArrowIcon></Typography></Box></Grid>
         
           <Grid item >
          <img src={Edu}  className={Classes.grid1} /></Grid>
           <Grid item >
            <img src={Edu}  className={Classes.grid2}/></Grid>
        
 </Stack>
           

      
    </React.Fragment>
  )
}

export default Footer
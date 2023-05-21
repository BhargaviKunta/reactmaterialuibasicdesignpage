import { Box, Typography,TextField,Stack} from '@mui/material'
import {Item} from '@mui/material/Stack'
import { Container } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { InputBase } from '@mui/material';

const search = () => {
  return (
    <React.Fragment>
     
      <Container sx={{backgroundColor:"red",marginTop:"50px",display:{xs:{height:"100px",width:"500px",marginLeft:"500px"},lg:{height:"100px",width:"1000px",marginLeft:"900px"}}} } >
         <Box sx={{color:"white",fontSize:"20px",width:"100px",height:"100px",textAlign:"center"}} ><Typography sx={{textAlign:"center",padding:"100px"}}>Loreum ispumLoreum ispumLoreum</Typography>  </Box>
        <TextField sx={{backgroundColor:"white",marginLeft:"700px",marginBottom:"100px"}}  label="Email" variant="outlined" ></TextField>
        </Container>
    
        
    </React.Fragment>
  )
}

export default search
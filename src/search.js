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
     
      <Container sx={{backgroundColor:"red",display:{xs:{height:"200px",width:"500px",marginLeft:"500px"},lg:{height:"500px",width:"1300px",marginLeft:"900px"}}} } >
         <Box sx={{marginRight:"130px",marginTop:"150px",textAlign:"center",color:"white",fontSize:"20px"}} >Loreum ispumLoreum ispumLoreum  </Box>
        <TextField sx={{backgroundColor:"white",marginLeft:"700px",marginBottom:"50px"}}  label="Email" variant="outlined" ></TextField>
        </Container>
    
        
    </React.Fragment>
  )
}

export default search
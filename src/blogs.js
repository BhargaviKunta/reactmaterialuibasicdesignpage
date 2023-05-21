import React from 'react'
import Edu from './assets/edu.png'
import Item from '@mui/material/Grid'
import Grid from '@mui/material/Grid'
import Pic from './assets/pic.png'
import { Typography,Box } from '@mui/material'
import { Margin } from '@mui/icons-material'

const blogs = () => {
  return (
    <React.Fragment>
       <Typography variant="h6" sx={{color:"red",margin:"100px"}}>Recommended Blogs</Typography>
       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
  <Box gridColumn="span 4" sx={{display:{sm:"block",lg:"flex"}}}>
    <Item><img src={Edu} alt={"not found"} style={{width:"200px",height:"200px"}}/></Item>
  </Box>
  <Box gridColumn="span 8" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
    <Item><Typography paragraph>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

The value created by typing into the textbox is always a string, regardless of the type of the options.</Typography></Item>
  </Box>
  <Box gridColumn="span 4" sx={{display:{sm:"block",lg:"flex"}}} >
  <Item><img src={Edu} alt={"not found"} style={{width:"200px",height:"200px"}}/></Item>
  </Box>
  <Box gridColumn="span 8" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><Typography paragraph>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

The value created by typing into the textbox is always a string, regardless of the type of the options.</Typography></Item>
  </Box> 
  <Box gridColumn="span 4" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><img src={Edu} alt={"not found"} style={{width:"200px",height:"200px"}}/></Item>
  </Box>
  <Box gridColumn="span 8" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><Typography paragraph>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

The value created by typing into the textbox is always a string, regardless of the type of the options.</Typography></Item>
  </Box>
  <Box gridColumn="span 4" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><img src={Edu} alt={"not found"} style={{width:"200px",height:"200px"}}/></Item>
  </Box>
  <Box gridColumn="span 8" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><Typography paragraph>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

The value created by typing into the textbox is always a string, regardless of the type of the options.</Typography></Item>
  </Box>
  <Box gridColumn="span 4" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><img src={Edu} alt={"not found"} style={{width:"200px",height:"200px"}}/></Item>
  </Box>
  <Box gridColumn="span 8" sx={{display:{xs:"none",sm:"block",lg:"flex"}}}>
  <Item><Typography paragraph>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

The value created by typing into the textbox is always a string, regardless of the type of the options.</Typography></Item>
  </Box>
</Box>
    </React.Fragment>
  )
}

export default blogs
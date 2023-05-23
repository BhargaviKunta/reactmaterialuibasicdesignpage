import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography ,Box,Stack} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Text (){
  return (
     <React.Fragment>
     <Box sx={{marginTop:"200px",marginLeft:"200px"}}>
       <Stack direction="row" > 
        <Typography color={"orange"}>
          Overview
        </Typography>
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        <Typography>Blog</Typography>
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        <Typography>One of Saturn's largest rings</Typography>
       </Stack>
     </Box>
     </React.Fragment>
    
  )
}

export default Text
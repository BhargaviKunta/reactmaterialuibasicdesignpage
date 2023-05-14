import { Box, Typography,TextField} from '@mui/material'


import React from 'react'

const search = () => {
  return (
    <React.Fragment>
     
      <Box sx={{width:"800",height:"100px",backgroundColor:"red",marginLeft:"200px",marginRight:"200px",marginTop:"50px",}}>
          <Typography variant="h5"  style={{marginRight:"200px"}}>Searching</Typography>
         <TextField style={{width:"200px",height:"30px",marginLeft:"550px",}}></TextField>

        </Box>
    
        
    </React.Fragment>
  )
}

export default search
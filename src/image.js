import { ImageList,ImageListItem,Box} from '@mui/material'
import React from 'react'
import Pic from './assets/pic.png'

const image = () => {
  return (
    <React.Fragment>
        <Box sx={{marginTop:"150px",width:"100%",height:"300px"}}>
            <img src={Pic} alt="page not found" style={{width:"100%",height:"400px"}}></img>
        </Box>
    </React.Fragment>
  )
}

export default image
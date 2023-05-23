import {Box} from '@mui/material'
import React from 'react'
import Lap from './assets/lap.png'
import {makeStyles} from '@material-ui/core'
import { Theme } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
const useStyles=makeStyles(theme =>({
    box:{
      marginTop:"10px",
    },
    img:{
      border:"1px solid black",
      width:2800,
      height:400,
      [theme.breakpoints.between("xs","lg")]:{
        margin:100,
        width:1000,
        height:800,marginLeft:800
        }
    }
}))
function Image(){
  const Classes=useStyles()
  return (
    
    <>
        <Box className={Classes.box}>
            <img src={Lap} alt="page not found" className={Classes.img}></img>
        </Box>
    </>
  )
}

export default Image
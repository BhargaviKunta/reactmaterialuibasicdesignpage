import {  Typography } from '@mui/material'
import React from 'react'
import Edu from './assets/edu.png'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
const footer = () => {
  return (
    <React.Fragment>
       
          <Grid container sx={{boder:"1px solid black",backgroundColor:"black"}}>
            <Grid xs={4}>
              <Item><Typography variant="h2" sx={{textColor:"white"}}></Typography></Item>
             
            </Grid>
            <Grid xs={4}></Grid>
            <Grid xs={4}>
              <Item><img src={Edu}  style={{width:"100px",height:"100px"}} /></Item>
  
            
            <Item><img src={Edu} alt={"hello"}/></Item>
            </Grid>
          </Grid>

      
    </React.Fragment>
  )
}

export default footer
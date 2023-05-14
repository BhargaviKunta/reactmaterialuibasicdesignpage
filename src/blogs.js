import React from 'react'
import Edu from './assets/edu.png'
import Item from '@mui/material/Grid'
import Grid from '@mui/material/Grid'
import Pic from './assets/pic.png'
import { Typography } from '@mui/material'

const blogs = () => {
  return (
    <React.Fragment>
       
       <Grid container spacing={4} sx={{marginTop:"150px"}}>
        <Grid xs={12}>
          <Item><Typography variant="h6" textColor="red">Recommended Blogs</Typography></Item>
        </Grid>
        <Grid xs={4}>
          <Item><img src={Edu} alt={"hello"} style={{width:"300px",height:"150px",border:"1px solid black"}}/></Item>
        </Grid>
        <Grid xs={8}>
           <Item>The two primary parts of the Rose plant are the stamen and the pistil which are the male and female components respectively. Other parts include petals, leaves, and sepals. In this section, we will discuss these parts and sub-parts in detail</Item>
        </Grid>
        
        <Grid xs={4}>
          <Item><img src={Pic} alt={"hello"}style={{width:"300px",height:"150px"}}/></Item>
        </Grid>
        <Grid xs={8}>
           <Item>The two primary parts of the Rose plant are the stamen and the pistil which are the male and female components respectively. Other parts include petals, leaves, and sepals. In this section, we will discuss these parts and sub-parts in detail</Item>
        </Grid>
       </Grid>
    </React.Fragment>
  )
}

export default blogs
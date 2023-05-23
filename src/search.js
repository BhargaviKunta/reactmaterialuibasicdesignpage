import { Box, Typography,TextField,Stack} from '@mui/material'
import {Item} from '@mui/material/Stack'
import { Container } from '@mui/material'
import React from 'react'
import {  styled } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { InputBase } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { makeStyles } from '@material-ui/core';
import {theme,Grid} from '@mui/material'
const useStyles=makeStyles((theme)=>({
  stack:{
    textAlign:"center",
    backgroundColor:"orangered",
    margin:350,
    justifyContent:"space-between",
    spacing:20,
    width:500,
    marginTop:50,
    height:300,

    [theme.breakpoints.between("sm","md")]:{
      direction:"column",
      width:600,
      height:400,
      alignItems:"center",
      marginLeft:400


    }
  },
  text:{
    textAlign:"Right",
    marginLeft:500,
    width:400,
    height:100,
    [theme.breakpoints.between("sm","lg")]:{
      width:200,
      height:400,
      alignItems:"center",
      marginTop:100

    }
  },
  search:{
    backgroundColor:"white",
    marginRight:400
  }
}))
function Search(){
   const Classes=useStyles();
  return (
    <React.Fragment>
     
      <Grid container className={Classes.stack} direction={"row"} justifyContent={"space-around"} alignItems={'center'}>

      <Grid item columns={{xs:4,sm:4,md:4,lg:4,xl:4}} ><Typography className={Classes.text}>Loreum ispumLoreum
       ispumLoreum Loreum 
       ispumLoreum Loreum ispumLoreum
      </Typography></Grid>

      <Grid item columns={{xs:4,sm:4,md:4,lg:4,xl:4}}> <TextField   className={Classes.search} label="Enter your Email" variant="outlined" >
      </TextField></Grid>

      </Grid>
         
         
       
    
        
    </React.Fragment>
  )
}

export default Search
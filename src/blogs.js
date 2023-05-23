import React from 'react'
import Edu from './assets/edu.png'
import Item from '@mui/material/Grid'
import Grid from '@mui/material/Grid'
import Pic from './assets/pic.png'
import { Typography, Box } from '@mui/material'
import { Margin } from '@mui/icons-material'
import {makeStyles} from '@material-ui/core'
import {Theme} from '@mui/material'
const useStyles=makeStyles((theme)=>({
      bloghead:{
        color: "red",
        marginLeft:300,
        marginTop: 100,
        marginBottom:50,
        [theme.breakpoints.between("xs","md")]:{
          marginLeft:300
        }
      },
      img:{
        width: 500, 
        height: 300,
        marginLeft:300,
        border: "2px solid black",
        marginTop:100,
        borderRadius: 5, 
        [theme.breakpoints.between("xs","lg")]:{
          marginRight:500,
          width:300,height:400
        }
      },
      passage:{
        marginLeft:100, 
        width:1000,
        height:300,
        marginTop:100,
        [theme.breakpoints.between("xs","md")]:{
          marginLeft:800,
          width:800,height:600
        }
      }
}))
function Blogs(){
  const Classes=useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" className={Classes.bloghead} sx={{marginTop:10,marginLeft:30,fontSize:30}}>Recommended Blogs</Typography>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

        <Box gridColumn="span 4" >
          <Item><img src={Edu} alt={"not found"} className={Classes.img} />
          </Item>
        </Box>

        <Box gridColumn="span 8" className={Classes.passage} >
            <Item>
            <Typography variant="h4" mb={2}>Best Books for JEE Mains 2022 - check Main Preparation Books</Typography>
            <Typography paragraph sx={{fontSize:25}} mt={4}>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

              The value created by typing into the textbox is always a string, regardless of the type of the options.Be careful when using the free solo mode with non-string options, as it may cause type mismatch.</Typography>
            <Typography variant='subtitle1' mb={2} sx={{fontSize:20}}>By-Rickie Baroch</Typography>
            </Item>
        </Box>
        
        <Box gridColumn="span 4" >
          <Item><img src={Edu} alt={"not found"}  className={Classes.img}/></Item>
        </Box>
        <Box gridColumn="span 8" className={Classes.passage}>
          <Item>
          <Typography variant="h4" mb={2}>Best Books for JEE Mains 2022 - check Main Preparation Books</Typography>
            <Typography paragraph sx={{fontSize:25}} mt={4}>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

            The value created by typing into the textbox is always a string, regardless of the type of the options.Be careful when using the free solo mode with non-string options, as it may cause type mismatch.</Typography>
            <Typography variant='subtitle1' mb={2}  sx={{fontSize:20}}>By-Rickie Baroch</Typography>
            </Item>
        </Box>

        <Box gridColumn="span 4" >
          <Item>
            <img src={Edu} alt={"not found"}  className={Classes.img}/>
            </Item>
        </Box>
        <Box gridColumn="span 8" className={Classes.passage}>
          <Item>
          <Typography variant="h4" mb={2}>Best Books for JEE Mains 2022 - check Main Preparation Books</Typography>
            <Typography paragraph sx={{fontSize:25}} mt={4}>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

            The value created by typing into the textbox is always a string, regardless of the type of the options.Be careful when using the free solo mode with non-string options, as it may cause type mismatch.</Typography>
            <Typography variant='subtitle1' mb={2} sx={{fontSize:20}}>By-Rickie Baroch
            </Typography>
            </Item>
        </Box>
        <Box gridColumn="span 4" >
          <Item>
            <img src={Edu} alt={"not found"}  className={Classes.img}/></Item>
        </Box>
        <Box gridColumn="span 8" className={Classes.passage}>
          <Item>
          <Typography variant="h4" mb={2}>Best Books for JEE Mains 2022 - check Main Preparation Books</Typography>
            <Typography paragraph sx={{fontSize:25}} mt={4}>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

            The value created by typing into the textbox is always a string, regardless of the type of the options.Be careful when using the free solo mode with non-string options, as it may cause type mismatch.</Typography>
            <Typography variant='subtitle1' mb={2} sx={{fontSize:20}}>By-Rickie Baroch</Typography>
            </Item>
        </Box>

        <Box gridColumn="span 4" >
          <Item><img src={Edu} alt={"not found"} className={Classes.img}/>
          </Item>
        </Box>

        <Box gridColumn="span 8" className={Classes.passage}>
          <Item>
          <Typography variant="h4" mb={2}>Best Books for JEE Mains 2022 - check Main Preparation Books</Typography>
            <Typography paragraph sx={{fontSize:25}} mt={4}>Be careful when using the free solo mode with non-string options, as it may cause type mismatch.

            The value created by typing into the textbox is always a string, regardless of the type of the options.Be careful when using the free solo mode with non-string options, as it may cause type mismatch.</Typography>
            <Typography variant='subtitle1' mb={2} sx={{fontSize:20}}>By-Rickie Baroch</Typography>
            </Item>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Blogs
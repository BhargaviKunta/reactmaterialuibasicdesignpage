import { AppBar, Toolbar,Tabs,Tab,Button } from '@mui/material'
import React from 'react'
import Diversity2Icon from '@mui/icons-material/Diversity2';
const header = () => {
  return (
    <React.Fragment>
        <AppBar>
          
            <Toolbar spacing={10}  >
              <Diversity2Icon></Diversity2Icon>
                <Tabs value={0} sx={{textColor:"white"}}>
                    <Tab label="products" / >
                    <Tab label="Services" />
                    <Tab label="Server" />
                    <Tab label="Feedback" />
                    <Tab label="career" />
                    <Tab label="contact us" />
                    <Tab label="about us" />
            
                   
                </Tabs>
                <Button variant="contained" sx={{marginLeft:"330px"}}>Signin</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default header
import { AppBar, Toolbar,Tabs,Tab,Button } from '@mui/material'
import React from 'react'

const header = () => {
  return (
    <React.Fragment>
        <AppBar>
            <Toolbar spacing={10}>
                <Tabs>
                    <Tab label="products"/>
                    <Tab label="Services"/>
                    <Tab label="Server"/>
                    <Tab label="Feedback"/>
                    <Tab label="career"/>
                    <Tab label="contact us"/>
                    <Tab label="about us" />
            
                   
                </Tabs>
                <Button variant="contained" sx={{marginLeft:"330px"}}>Signin</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default header
import { Grid } from '@mui/material'
import LeftNav from './leftsideBar'
import React from 'react'
import RightNav from './rightsidebar'

const Navbar = () => {
  return (
    <>
   <Grid container >
   <Grid  md={2} >
    <LeftNav />
   </Grid>
   <Grid  md={10} >
    <RightNav />
    </Grid>
    
   </Grid>
        
    </>
  )
}

export default Navbar
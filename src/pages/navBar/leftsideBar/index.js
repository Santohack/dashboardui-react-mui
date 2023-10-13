import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import { MyList, NavContainer } from '../../../style/navbar'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavText } from '../../../helper'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import User from '../../../components/Nav'

const LeftNav = () => {
  const containerStyles = {
    backgroundColor: "#2d2d69",
    borderRadius: '10px',
    margin: '10px',
    width: "auto",
    padding: "'inherit'",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const postionBottom = {
    display: 'flex',
    
    position: 'absolute',
   
    bottom: 0,
 
  }
  return (
    <>
      <NavContainer>
        <MyList>
          <div style={{ display: 'flex', margin: '0px -16px 30px' }}>
            <ListItem>
              <ListItemButton>
                <IconButton size="large" sx={{ color: '#ffffff', fontSize: 'large' }}> {/* Adjust the fontSize */}
                  <SettingsIcon />
                </IconButton>
                <Typography variant='h5' sx={{ color: '#ffffff', fontWeight: 'bold' }}>Dashboard</Typography>
              </ListItemButton>
            </ListItem>
          </div>


          <User text={"Dashboard"} icon={<DashboardIcon />} bgColor={"#2d2d69"} iconColor={"#ffffff"} textColor={"#ffffff"} />
          {NavText.map((item, index) => (
            <User key={index} text={item.name} icon={item.icon} iconColor={"#979db6"} textColor={"#979db6"} rightIcon={<ChevronRightIcon />} />
          ))}
          <div style={postionBottom}>
            <ListItem button style={containerStyles}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src='https://img.freepik.com/premium-photo/young-woman_948023-1111.jpg' />
              </ListItemAvatar>
              <ListItemText  sx={{margin:'0px 11px'}}
                primary='Santohack'
                secondary="Developer"
                primaryTypographyProps={{ sx: { color: '#ffffff' } }}
                secondaryTypographyProps={{ sx: { color: '#979db6' } }}
              />
              <ListItemButton>
                <IconButton sx={{ color: '#ffffff',marginLeft: 'auto' }}> 
                  <KeyboardArrowDownIcon />
                </IconButton>

              </ListItemButton>

            </ListItem>
          </div>


        </MyList>
      </NavContainer>
    </>
  )
}

export default LeftNav
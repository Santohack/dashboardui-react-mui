import { Box, Card, CardContent, CardMedia, Icon, ListItemIcon, Typography } from '@mui/material';

import React from 'react';

const ActionCard = ({ text, primary_icon,value,iconBackgroundColor, secondIcon,iconColor, growth,color }) => {
  const iconGrowthColor = {
    color:color
  }
  return (
    <Card sx={{ display: 'flex', maxWidth: '20rem', height: '10rem', margin: '12px' }}>
      <Box sx={{ margin: '13px 6px 0px 23px' }}>
      <CardMedia
        component="div"
        sx={{
          width: '109px',
          height: '108px',
          borderRadius: '50%',
          backgroundColor: iconBackgroundColor, // Set your background color here
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         
        }}
      > 
      
        <Icon
           sx={{
              fontSize: '2rem', // Adjust the icon size as needed
              color: iconColor, // Set the color of the icon
              
            }}
        >
         {primary_icon}
        </Icon>
        
      </CardMedia>
      </Box>
      <Box>
        <CardContent>
          <Typography variant="body2">
            {text}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            {value}
          </Typography>
          <Typography variant='body2' sx={{marginLeft:'-16px'}} component='div'>
         <span style={iconGrowthColor}> {secondIcon}  {growth}</span>  
            this month
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ActionCard;

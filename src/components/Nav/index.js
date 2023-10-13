import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import React from 'react'

const User = ({ icon, text, iconColor, fotSize,rightIcon, textColor, bgColor }) => {
    const listItemStyle = {

        color: iconColor,
    };

    const textStyles = {

        color: textColor,
      
    };
    const containerStyles = {
        backgroundColor: bgColor,
        borderRadius: '10px',
        margin: '10px',
        width: "auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };
    return (
        <>
            <ListItem disablePadding style={containerStyles}>
                <ListItemButton>
                    <ListItemIcon style={listItemStyle}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text}  style={textStyles} />
                    {rightIcon && (<IconButton size="small" style={listItemStyle} >
                        {rightIcon}
                    </IconButton>)}
                </ListItemButton>
            </ListItem>
        </>
    )
}

export default User
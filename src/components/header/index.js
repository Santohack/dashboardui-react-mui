import { Box, Stack, Typography } from '@mui/material'
import { Search, SearchIconWrapper, StyledInputBase } from '../../style/header'

import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Header = ({Header_text}) => {
  return (
    <>
      <Stack direction={"row"} sx={{justifyContent:'space-between',}}>
    
      
 
      <Typography variant='h6'> {Header_text}</Typography>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         
      </Stack>
    </>
  )
}

export default Header
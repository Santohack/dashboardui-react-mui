import { Box, Container, List } from '@mui/material'

import ActionCard from '../../../components/card'
import Header from '../../../components/header'
import React from 'react'
import { RightContainer } from '../../../style/navbar'

const RightNav = () => {
  return (
    <>
    <RightContainer>
   
       <Header Header_text={"Hello SantoHack👋,"} /> 
  
     
       <ActionCard />
   
    </RightContainer>

      
    </>
  )
}

export default RightNav
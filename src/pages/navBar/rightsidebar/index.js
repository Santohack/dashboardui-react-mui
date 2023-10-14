import ActionCard from '../../../components/card'
import { CardDetail } from '../../../helper'
import { Grid } from '@mui/material'
import Header from '../../../components/header'
import React from 'react'
import { RightContainer } from '../../../style/navbar'

const RightNav = () => {
  return (
    <>
    <RightContainer>
   
       <Header Header_text={"Hello SantoHack👋,"} /> 
       <Grid container spacing={3}>
     {CardDetail.map((item,index)=>(
      <Grid item xs={12} sm={6} md={3} key={index}> 
          <ActionCard text={item.name} iconBackgroundColor={item.iconBackgroundColor} iconColor={item.iconColor} primary_icon={item.icon} color={item.color} secondIcon={item.growthIcon} growth={item.growth} value={item.income} />
        </Grid>
     ))}
       </Grid>
   
    </RightContainer>

      
    </>
  )
}

export default RightNav
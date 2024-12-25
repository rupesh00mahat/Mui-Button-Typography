import { Container, Grid, Select } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Showcase() {
    const size  = useSelector((state) => state.counter)
    console.log(size);
  return (
   <Container>
        <Grid container spacing={4}>
            <Grid item md={4}>
                {/* <Select
                id=''
                value={}
                >

                </Select> */}
            </Grid>
        </Grid>
   </Container>
  )
}

export default Showcase
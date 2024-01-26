import React, { Component } from 'react'
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

export default class Spinner
 extends Component {
  render() {
    return (
      
         <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' , justifyItems:'center', mx:'1/2'          }}>
      <Button startDecorator={<CircularProgress variant="solid" />}>Loading…</Button>
      </Box>
      
    )
  }
}

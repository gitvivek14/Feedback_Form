import React, { Component } from 'react'
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default class ContactForm extends Component {
  render() {
    return (
        <Card
        variant="soft"
        sx={{
          maxHeight: 'max-content',
          maxWidth: '100%',
          mx: 'auto',
          // to make the demo resizable
          overflow: 'auto',  
          resize: 'horizontal',
        }}
      >
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          Please Fill Out the Fields
        </Typography>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(125px, 1fr))',
            gap: 1.5,
          }}
        >
          <FormControl sx={{gridColumn:'1/-1'}}>
            <FormLabel>Name</FormLabel>
            <Input startDecorator={<PersonIcon />} />
          </FormControl>
          {/* <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Email</FormLabel>
            <Input startDecorator={<EmailIcon />} />
          </FormControl>
          <FormControl  >
            <FormLabel>Mobile</FormLabel>
            <Input endDecorator={<InfoOutlined />} />
          </FormControl> */}
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Email</FormLabel>
            <Input startDecorator={<EmailIcon />} placeholder="Enter Email" />
          </FormControl>
          <Checkbox label="Save Details" sx={{ gridColumn: '1/-1', my: 1 }} />
          <CardActions sx={{ gridColumn: '1/-1' }}>
            
          </CardActions>
        </CardContent>
      </Card>
    )
  }
}

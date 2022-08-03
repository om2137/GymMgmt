
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import Modal from './Modal';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    warning: {
      main: '#ffc107',
    },
    success: {
      main: '#69f16e',
    },
  },
});

interface Props {
  image: string;
  first: string;
  middle: string;
  last: string;
  address: string;
  phone: number;
  Dob: string;
  age: number;
  gender: string;
}
const imgStyle = {
  minWidth: '200px',
  minHeight: '10px',
  maxWidth: '200px',
  maxHeight: '170px',
};
const cardStyle= {
  maxWidth: '200px',
  maxHeight: '300px',
  minWidth: '200px',

  boxShadow: "5px 5px #e2e8f0",
  backgroundColor: "#cbd5e1",
  
}
const contentStyle = {
  maxHigh: '200px',
  
}
const ActionStyle={
  display: 'flex',
}
const typoStyle={
  textTransform: 'capitalize',
}

export default function MediaCard( {image, first,middle,last,address,phone,Dob,age,gender}: Props ) {
  
  return (
    <Card style={cardStyle}>
      <CardMedia
        style={imgStyle}
        component="img"
        image={image}
        className="aspect-square"
      />
      <CardContent >
        <div className='text-xl font-bold capitalize'>
          <h1 className='pb-1'>
            {first} {last}
          </h1>
           <div className=' pt-2 relative'>
              <Modal 
                image={image}
                first={first}
                middle={middle}
                last={last}
                address={address}
                phone={phone}
                birthdate={Dob}
                age={age}
                gender={gender}
              />
           </div>
          
        </div>
      </CardContent>
      <CardActions style={ActionStyle} >
        <ThemeProvider theme={theme} >
          
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}

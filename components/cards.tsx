
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  title: string;
}
const imgStyle = {
  minWidth: '30px',
  minHeight: '10px',
  maxWidth: '200px',
  maxHeight: '170px',
};
const cardStyle= {
  maxWidth: '200px',
  maxHeight: '300px',
  boxShadow: "5px 5px #a0d3b2",
  backgroundColor: "#bbf7d0",
}
const contentStyle = {
  maxHigh: '200px',
}
const ActionStyle={
  display: 'flex',
}

export default function MediaCard( {image, title}: Props ) {
  return (
    <Card style={cardStyle}>
      <CardMedia
        style={imgStyle}
        component="img"
        image={image}
        className="aspect-square"
      />
      <CardContent >
        <Typography gutterBottom component="div" color="" fontWeight="bold" fontSize={'30px'}>
          {title}
          <Modal 
            image={image}
            title='Om Raut'
          />
        </Typography>
      </CardContent>
      <CardActions style={ActionStyle} >
        <ThemeProvider theme={theme} >
          
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}

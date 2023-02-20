import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import Modal from '../Modal';
import Link from 'next/link';
import Button from '../Button';
import ArchiveModal from './ActiveModal';


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
  marriage: string;
  id: number;
  paid: string;
  due: string;
  admission: string;
  cardNo: string;
  paidOn: string;
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
const ActionStyle={
  display: 'flex',
}

export default function ActiveCard( {
    image, 
    first, 
    middle, 
    last, 
    address, 
    phone, 
    Dob, 
    age, 
    gender, 
    marriage, 
    id, 
    paid, 
    paidOn, 
    due, 
    admission, 
    cardNo
  }: Props ) {
  
  return (
    <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
      <Card style={cardStyle}>
        {/* <Link href={`/${id}`}> */}
          <CardMedia
            style={imgStyle}
            component="img"
            image={image}
            className="aspect-square ?"
          />
        {/* </Link> */}
        <CardContent >
          <div className='font-bold capitalize'>
            <h1 className='text-xl pb-1'>
              {first} {last}
            </h1>
            <div className='flex relative pt-2'>
                <ArchiveModal 
                image={image}
                first={first}
                middle={middle}
                last={last}
                address={address}
                phone={phone}
                birthdate={Dob}
                age={age}
                gender={gender}
                mstatus={marriage}
                id={id}
                paid={paid}
                due={due}
                admission={admission}
                card={cardNo} 
                paidOn={paidOn}              
                />
                <div className='pl-4'>
                  <Link href={`/${id}`}>
                    <Button label='view' className='text-white bg-sky-500 hover:bg-sky-400 px-4 '/>
                  </Link>
                </div>
            </div>
            
          </div>
        </CardContent>
        <CardActions style={ActionStyle} >
          <ThemeProvider theme={theme} >
            
          </ThemeProvider>
        </CardActions>
      </Card>
    </div>
  );
}

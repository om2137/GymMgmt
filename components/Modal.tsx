import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import MediaCard from './cards';

interface Props {
    image: string;
    title: string;
  }

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #9e9e9e',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 3,
  px: 3,
  pb: 3,
};
// child modal
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <div></div>
      <Button onClick={handleOpen} className="text-black">Plans</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title" className='text-4xl font-bold pb-4'>Select plans</h2>
          <p id="child-modal-description" className='pb-4' >
            Add plans
          </p>
          
          <Button onClick={handleClose} className="bg-blue-200 text-right">Close</Button>

          
        </Box>
      </Modal>
    </React.Fragment>
  );
}
// main modal
export default function NestedModal( {image, title}: Props ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        onClick={handleOpen} 
        className='text-green-600 bg-green-300 border-2 border-sky-500'>Open modal</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className='w-2/3 xl:w-2/5'>
            
            <div className="relative ">
                <div className="absolute top-0 right-0 h-16 w-16 text-black text-end">
                    <Button onClick={handleClose} className='text-black bg-gray-300'>Close </Button>
                </div>
            </div>
            
            <div className='flex  align-middle'>
                <div className='drop-shadow-2xl'>
                    <img src={image} className="w-48 border-4 border-gray-400 rounded-xl"/>
                </div>
                
                <div className='flex flex-col p-1 ml-4 xl:ml-10'>
                    <div>
                        <h2 id="parent-modal-title" className=' text-6xl font-bold'>
                            {title}
                        </h2>
                    </div>
                    <div className='mt-2'>
                        <span >Address:</span>
                    </div>
                    <div className='mt-2'>
                        <span >Date of birth:</span>
                    </div>
                    <div className='mt-2'>
                        <span >Age:</span>
                    </div>
                </div>
                
                
            </div>
          
            <div className='py-5'>
                <ChildModal />
            </div>
            
        </Box>
      </Modal>
    </div>
  );
}

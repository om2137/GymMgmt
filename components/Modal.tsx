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
const style2 = {
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
      <Button onClick={handleOpen} className="text-black bg-slate-300">Plans</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style2, width: 400 }}>
            <div className='flex justify-between'>
                <h2 id="child-modal-title" className='text-4xl font-bold pb-4'>Select plans</h2>
                <div>
                    <Button onClick={handleClose} className="bg-blue-200 text-right">Close</Button>
                </div>
                
            </div>
          
          <div>                
            <label id="countries" className="block mb-2 text-sm font-medium text-black ">Select an option</label>
            <select id="countries" className="bg-white border border-gray-300 rounded-lg text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option className=''>Choose a country</option>
                <option value="US">Montly</option>
                <option value="CA">Quarterly</option>
                <option value="FR">Half Yearly</option>
                <option value="DE">Annually</option>
            </select>                
          </div>
          

          
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
  const log = () => {
    console.log('invoice sent');
  };
  return (
    <div>
      <Button 
        onClick={handleOpen} 
        className='text-white bg-slate-600 border-2 border-sky-500 hover:bg-slate-500'>Details</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className='w-2/3 xl:w-2/5'>
            
            <div className="relative hidden">
                <div className="absolute top-0 right-0 h-16 w-16 text-black text-end">
                    <Button onClick={handleClose} className='text-black bg-gray-300'>Close </Button>
                </div>
            </div>
            
            <div className='flex  align-middle justify-between'>
                <div className='flex'>
                    <div className='drop-shadow-2xl'>
                        <img src={image} className="w-48 border-4 border-gray-400 rounded-xl"/>
                    </div>
                    
                    <div className='flex flex-col p-1 ml-10 2xl:ml-20'>
                        <div>
                            <h2 id="parent-modal-title" className=' text-6xl font-bold'>
                                {title}
                            </h2>
                        </div>
                        <div className='p-2'>
                            <div className='mt-2'>
                                <span className='font-semibold'>Address:</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold' >gender:</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold' >Date of birth:</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold' >Age:</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold' >Phone number:</span>
                            </div>
                            
                            <div className='mt-2'>
                                <span className='font-semibold' >marriage status:</span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
                <div >
                    <Button onClick={handleClose} className='text-black  bg-gray-300'>Close </Button>
                </div>
                
            </div>
            <div className='p-4 '>                
                <label id="countries" className="block mb-2 text-sm font-medium text-black ">Select an plans</label>
                <div className='sm:flex'>
                    <div className='pr-5 pb-4 sm:pb-0'>
                       <select id="countries" required className="bg-white border border-gray-300 rounded-lg text-gray-900 
                        text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option className='hidden'>Choose Facility</option>
                            <option value="US">Cardio</option>
                            <option value="CA">Weight</option>
                            <option value="">Cardio + Weight</option>
                        </select> 
                    </div>
                    <div className='pr-5 pb-4 md:pb-0'>
                       <select id="countries" required className="bg-white border border-gray-300 rounded-lg text-gray-900 
                        text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option className='hidden' >Choose Time Frame</option>
                            <option value="US">Montly</option>
                            <option value="CA">Quarterly</option>
                            <option value="FR">Half Yearly</option>
                            <option value="DE">Annually</option>
                        </select> 
                    </div>
                    <Button className="text-white bg-green-400 text-xsm hover:bg-green-300" onClick={log}>Invoice</Button>
                </div>
                

            </div>
          
            {/* <div className='py-5 '>
                <ChildModal />
            </div> */}
            
        </Box>
      </Modal>
    </div>
  );
}

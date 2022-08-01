import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
const axios = require('axios').default;

export async function getStaticProps(context: any) {
  
  const res = await axios('http://localhost:3000/api/member');
  const {member} = res.data;
  return {
    props: {
      members: member,
    }, // will be passed to the page component as props
  }
}


interface Props {
    image: string;
    first: string;
    middle: string;
    last: string;
    address: string;
    phone: number;
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
export default function NestedModal( {first,middle,last,image,address,phone}:Props ) {
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
      <div className=''>
        <Button 
        onClick={handleOpen} 
        className='text-white bg-slate-600 border-2 border-sky-500 hover:bg-slate-500'>Details</Button>
      </div>
      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className='w-3/4 max-w-2xl overflow-auto sm:h-fit h-[40rem]'>
            
        <div id='member'>
          {/* {
            members.map((member : any) => {
              return (
                <div className='text-black text-6xl'>
                  {member.Firstname}
                </div>
              )
            })
          }   */}
        </div>
            <div className='sm:flex w-full justify-end hidden '>
                <Button onClick={handleClose} className='text-white bg-red-500 hover:bg-red-400'>Close </Button>
            </div>
            <div className='sm:flex  align-middle justify-between'>
                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex justify-center mt-6 px-4 drop-shadow-2xl'>
                        <div>
                          <img src={image} className=" 
                            min-w-full md:w-48
                            md:border-2 border-gray-400 rounded-xl md:mt-4 xl:mx-6"/>
                          <div className='hidden sm:inline p-3 mt-4 text-center'>
                            <h1 className='text-2xl font-semibold text-center'>Plan Expires</h1>
                            <div className='pt-2 text-center'>
                              <span className=''>28(days)</span>
                            </div>
                          </div>
                        </div>
                        
                        
                        <div>
                            <h2 id="parent-modal-title" className='sm:hidden text-4xl font-bold capitalize pl-4'>
                                {first} {last}
                            </h2>
                            <div className='sm:hidden pl-4 p-1 mt-1 text-start'>
                              <h1 className='text-2xl font-semibold'>Plan Expires</h1>
                              <div className='pt-2 text-start'>
                                <span className=''>28(days)</span>
                              </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-col text-center p-1 mx-14 '>
                        <div className='hidden sm:flex '>
                            <h2 id="parent-modal-title" className=' text-6xl font-bold capitalize'>
                                {first} {last}
                            </h2>
                        </div>
                        <div className='p-2'>
                            <div className='mt-2'>
                                <span className='font-semibold'>Full Name:</span><br/>
                                <span className='ml-2 capitalize'>{first} {middle} {last}</span>
                            </div>

                            <div className='mt-2'>
                                <span className='font-semibold' >Phone number:</span><br/>
                                <span className='ml-2'>{phone}</span>
                            </div>
                            
                            <div className='mt-2'>
                                <span className='font-semibold'>Address:</span><br/>
                                <span className='ml-2'>{address}</span>
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
                                <span className='font-semibold' >marriage status:</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
                
                
            </div>
            <div>
              
            </div>
            <div className='p-4 align-center'>                
                <label id="countries" className="block mb-2 text-sm font-medium text-black ">Select an plans</label>
                <div className='md:flex justify-between'>
                    <div className='sm:flex pb-2'>
                      <div className='pr-5 pb-4 sm:pb-0'>
                        <select id="countries" required className="bg-white border border-gray-300 rounded-lg text-gray-900 
                          text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                              <option className='hidden'>Choose Facility</option>
                              <option value="US">Cardio</option>
                              <option value="CA">Weight</option>
                              <option value="">Cardio + Weight</option>
                          </select> 
                      </div>
                      <div className='pr-5 pb-4 sm:pb-0'>
                        <select id="countries" required className="bg-white border border-gray-300 rounded-lg text-gray-900 
                          text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                              <option className='hidden' >Choose Time Frame</option>
                              <option value="US">Montly</option>
                              <option value="CA">Quarterly</option>
                              <option value="FR">Half Yearly</option>
                              <option value="DE">Annually</option>
                          </select> 
                      </div>
                      <div className='pb-4 '>
                        <Button className="text-white bg-green-400 text-xsm hover:bg-green-300" onClick={log}>Invoice</Button>
                      </div>
                    </div>
                    
                    <div className='flex justify-between pb-4'>
                      
                      <div className='sm:pb-4  md:ml-5 '>
                        <Button onClick={handleClose} className='text-white bg-yellow-500 hover:bg-yellow-400 '>edit </Button>
                      </div>
                    </div>
                </div>
                <div className='flex justify-center sm:hidden '>
                  <Button onClick={handleClose} className='text-white bg-red-500 hover:bg-red-400'>Close </Button>
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



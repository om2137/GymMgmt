import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import {useState} from 'react';
import Button from './Button';

interface Props {
    image: string;
    first: string;
    middle: string;
    last: string;
    address: string;
    phone: number;
    birthdate: string;
    age: number;
    gender: string;
    mstatus: string;
    id: number;
  }

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  minWidth: 300,
  bgcolor: 'background.paper',
  border: '2px solid #9e9e9e',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 3,
  px: 2,
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
    px: 2,
    pb: 3,
  };

// main modal
export default function TestModal( {first,middle,last,image,address,phone,birthdate,age,gender,mstatus,id}:Props ) {
  const [open, setOpen] = useState(false);
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
        <Button label="Details" onClick={handleOpen} className='bg-slate-600 hover:bg-slate-500 px-3 '/>
      </div>      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className=' overflow-auto 2xl:h-[46rem] h-[35rem]'>
          
            <div className='sm:flex w-full justify-end hidden pb-2'>
                <Button label="Close" onClick={handleClose} className="bg-red-500 hover:bg-red-400 px-3"/>
            </div>
            <div className='md:flex  align-middle justify-between'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <div className='md:flex  justify-center mt-6 px-4 drop-shadow-2xl ml:ml-12'>
                        <div>
                          <div className='p-5 md:p-0 flex justify-center'>
                            <img src={image } 
                            className=" w-48 aspect-square object-cover
                            md:border-2 border-gray-400 rounded-xl  md:p-0" />
                          </div>
                          
                          <div className='hidden md:inline p-3 text-center'>
                            <h1 className='text-2xl font-semibold mt-5 text-center'>Plan Expires</h1>
                            <div className='pt-6 text-center'>
                              <div>
                                <a className='font-semibold'>Last Paid:</a>
                                <a>26/5/2022</a>
                              </div>
                              <div>
                                <a className='font-semibold'>Due Date:</a>
                                <a>23/6/2022</a>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        
                        
                        <div className='text-center '>
                            <h2 id="parent-modal-title" className='md:hidden text-4xl font-bold capitalize'>
                                {first} {last}
                            </h2>
                            <div className='md:hidden inline text-center  p-1 mt-1 text-start'>
                              <h1 className='text-2xl text-center font-semibold'>Plan Expires</h1>
                              <div className=' pt-6 text-center'>
                                <div>
                                  <a className='font-semibold'>Last Paid:</a>
                                  <a>26/5/2022</a>
                                </div>
                                <div>
                                  <a className='font-semibold'>Due Date:</a>
                                  <a>23/6/2022</a>
                                </div>
                              </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-col text-center p-1 mx-10 '>
                        <div className='hidden md:flex '>
                            <h2 id="parent-modal-title" className=' text-6xl font-bold capitalize'>
                                {first} {last}
                            </h2>
                        </div>
                        <div className='p-2'>
                            <div className='mt-2'>
                                <span className='font-semibold text-lg'>Full Name:</span><br/>
                                <span className='ml-2 capitalize'>{first} {middle} {last}</span>
                            </div>

                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >Phone number:</span><br/>
                                <span className='ml-2'>{phone}</span>
                            </div>
                            
                            <div className='mt-2'>
                                <span className='font-semibold text-lg'>Address:</span><br/>
                                <span className='ml-2'>{address}</span>
                            </div>

                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >gender:</span> <br />
                                <span className='ml-2'>{gender}</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >Date of birth:</span><br />
                                <span className='ml-2'>{birthdate}</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >Age:</span><br />
                                <span className='ml-2'>{age}</span>
                            </div>
                            
                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >marriage status:</span> <br />
                                <span className='ml-2'>{mstatus}</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
                
                
            </div>
            <div>
              
            </div>
            <div className='p-4 flex justify-center '>  
                <div className='md:flex flex-col justify-between'>
                  <label id="countries" className="block mb-2 text-sm font-medium text-black ">Select an plans</label>
                    <div className='sm:flex flex-col pb-2'>
                      <div className='flex flex-col '>
                        <div className="flex flex-col sm:flex-row">
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <select id="countries" required className="bg-white border border-gray-600 rounded-lg text-gray-900 
                              text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                  <option className='hidden'>Choose Facility</option>
                                  <option value="900">Cardio</option>
                                  <option value="500">Weight</option>
                                  <option value="1200">Cardio + Weight</option>
                              </select> 
                          </div>
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <select id="countries" required className="bg-white border border-gray-600 rounded-lg text-gray-900 
                              text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                  <option className='hidden' >Choose Duration</option>
                                  <option value={1}>Montly</option>
                                  <option value={3}>Quarterly</option>
                                  <option value={6}>Half Yearly</option>
                                  <option value={12}>Annually</option>
                              </select> 
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row py-2">
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <input type="date" autoComplete='none' required 
                                  // onChange={handleChange} 
                                  // name='DoB' value={form.DoB}
                                  className='py-2 rounded-lg relative block w-full px-3 
                                  border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                  placeholder='Paid date'
                              />
                          </div>
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <input type="date" autoComplete='none' required 
                                  // onChange={handleChange} 
                                  // name='DoB' value={form.DoB}
                                  className='py-2 rounded-lg relative block w-full px-3 
                                  border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                  placeholder='due date' 
                              />
                          </div>
                        </div>
                        <div className='sm:pb-2 flex justify-center '>
                          <Button label="Invoice" onClick={log} className="bg-green-500 text-xsm hover:bg-green-400 px-3"/>
                        </div>
                      </div>
                      
                      
                    </div>
                    
                    <div className='flex justify-between sm:justify-center py-2' >
                      {/* <div className='sm:pb-4  sm:ml-5 '>
                        <Button label="Invoice" onClick={log} className="bg-green-500 text-xsm hover:bg-green-400 px-3"/>
                      </div> */}
                      <div className='pb-4  mx-2 sm:pb-4  sm:mx-5 '>
                        <Button label="delete" onClick={handleClose} className="bg-red-500 hover:bg-red-400 px-3"/>
                      </div>

                      <div className='pb-4  mx-2 sm:pb-4  sm:mx-5 '>
                        <Link href={`/${id}/edit`}>
                          <Button label="edit"  className="bg-yellow-500 hover:bg-yellow-400 px-3"/>
                        </Link>
                      </div>

                      <div className='flex justify-center sm:hidden pb-4  mx-2 '>
                        <Button label="Close" onClick={handleClose} className="bg-red-500 hover:bg-red-400 px-3"/>
                      </div>
                    </div>
                </div>
                

            </div>
            
        </Box>
      </Modal>
    </div>
  );
}



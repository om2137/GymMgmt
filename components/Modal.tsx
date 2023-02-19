import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import {useState} from 'react';
import Button from './Button';
import { useRouter } from 'next/router';
import  Router from 'next/router';
import InvoiceForm from './invoice/Invoice';
const axios = require('axios').default;
import baseUrl from '../helper/baseUrl';
import MoveToArchive from './MoveToArchive';

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
    paid: string;
    paidOn: string;
    due: string;
    admission: string;
    card: string;
  }

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  minWidth: 330,
  bgcolor: 'background.paper',
  border: '2px solid #9e9e9e',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 3,
  px: 2,
  pb: 3,
};

// main modal
export default function TestModal( {first,middle,last,image,address,phone,birthdate,age,gender,mstatus,id, paid, due, admission, card, paidOn}:Props ) {

  // post invoice
  const [form, setForm] = useState({
    Name: '',   
    paidDate: '',
    paidOn: '',
    admFee: 0,
    dueDate: '',
    facility: '',
    fees:0,
  })

const handleChange = (e: React.ChangeEvent<any>) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
        
    })
    
}
const handleInvoice = async(e: React.ChangeEvent<any>) => {
  e.preventDefault()
  try{
      
      const res = await axios(`${baseUrl}/api/member/${id}`, {
          method: "PUT",
          headers:{
              "Content-Type": "application/json",
          },
          data: JSON.stringify(form),
      })
      Router.push(`${baseUrl}/${id}/invoice`)
      
  }catch(err){
      console.log(err)
  }
  
}
// post invoice ended

  const [facility , setFacility] = useState('');
  const [time, setTime] = useState('');
  const [admFee, setAdmFee] = useState('');

  if (facility === '1000') {
    form.facility = 'cardio';
  }else if (facility === '600') {
    form.facility = 'weights';
  }else if (facility === '1000') {
    form.facility = 'C + W';
  }else if (facility === '1200') {
    form.facility = 'C + W';
  }

  const router = useRouter();

  const handleDelete = async() => {
    try{
        const deleteMember = await axios( `${baseUrl}/api/member/${id}` , {
          method: "DELETE",
        });
        router.push('/');
    }catch(err){
      console.log(err);
    }
  }
  

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  // var card = '10';
  return (
    <div className=''>
      
      <div className=''>
        <Button label="Details" onClick={handleOpen} className='bg-slate-600 hover:bg-slate-500 px-3 '/>
      </div>      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className=' overflow-auto w-4/5 2xl:h-[46rem] h-[35rem]'>
          
            <div className='sm:flex w-full justify-end hidden pb-2'>
                <Button label="Back" onClick={handleClose} className="bg-gray-500 hover:bg-gray-400 px-3"/>
            </div>
            <div className='md:flex  align-middle justify-between'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <div className='md:flex  justify-center mt-6 px-4 drop-shadow-2xl ml:ml-12'>
                        <div>
                          
                          <div className='sm:hidden relative'>
                            <div className='absolute right-[-1rem] top-[-1.8rem] '>
                              <Button label="Back" onClick={handleClose} className="bg-gray-500 hover:bg-gray-400 px-3"/>
                            </div>
                          </div>
                          <div className='p-5 md:p-0 flex justify-center'>
                            <img src={image } 
                            className=" w-48 aspect-square object-cover
                            md:border-2 border-gray-400 rounded-xl  md:p-0" />
                          </div>
                          
                          <div className='hidden md:inline p-3 text-center'>
                            <h1 className='text-2xl font-semibold mt-5 text-center'>Plan Expires</h1>
                            <div className='pt-6 text-center'>
                              <div>
                                <a className='font-semibold'>Card No: <br /> </a>
                                <a>{card}</a> 
                              </div>
                              <div>
                                <a className='font-semibold'>Admission Date: <br /> </a>
                                <a>{admission}</a> 
                              </div>
                              <div>
                                <a className='font-semibold'>Last Paid: <br /> </a>
                                <a>{paid}</a> 
                              </div>
                              <div>
                                <a className='font-semibold'>Due Date:<br /></a>
                                <a>{due}</a>
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
                                  <a className='font-semibold'>Card No:</a>
                                  <a>{card}</a><br />
                                </div>
                                <div>
                                  <a className='font-semibold'>Admission No:</a>
                                  <a>{admission}</a><br />
                                </div>
                                <div>
                                  <a className='font-semibold'>Last Paid:</a>
                                  <a>{paid}</a><br />
                                </div>
                                <div>
                                  <a className='font-semibold'>Due Date:</a>
                                  <a>{due}</a>
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
            
            <div className='p-4 flex justify-center '>  
                <div className='md:flex flex-col justify-between'>
                  <label id="fees" className="block mb-2 text-sm font-medium text-black ">Select an plans</label>
                    <div className='sm:flex flex-col pb-2'>
                      {/* form */}
                      <form className='flex flex-col ' onSubmit={handleInvoice}>
                        <div className="flex flex-col sm:flex-row">
                          <div className='pr-5 pb-4 sm:pb-0'>
                              <select id="fees" required 
                                onChange={(e) => setFacility(e.target.value)}
                                className="bg-white border border-gray-600 rounded-lg text-gray-900 
                                text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                  <option className='hidden'>Choose Facility</option>
                                  <option value={1000}>Cardio</option>
                                  <option value={600}>Weight</option>
                                  <option value={1000}>Cardio + Weight(womens)</option>
                                  <option value={1200}>Cardio + Weight(mens)</option>
                              </select> 
                          </div>
                          <div className='pr-5 pb-4 sm:pb-0'>
                              <select id="time" required 
                                onChange={(e) => setTime(e.target.value)}
                                className="bg-white border border-gray-600 rounded-lg text-gray-900 
                                text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                  <option className='hidden' >Choose Duration</option>
                                  <option value={1}>Montly</option>
                                  <option value={3}>Quarterly</option>
                                  <option value={6}>Half Yearly</option>
                                  <option value={12}>Annually</option>
                              </select> 
                          </div>
                          <div className='pr-5 pb-4 sm:pb-0'>
                              <select id="admFee" required 
                                onChange={(e) => setAdmFee(e.target.value)}
                                className="bg-white border border-gray-600 rounded-lg text-gray-900 
                                text-sm rounded-lg focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                  <option className='hidden'>Admission fee</option>
                                  <option value={100}>100</option>
                                  <option value={200}>200</option>
                              </select> 
                          </div>
                          <div 
                            className="hidden"
                            // fees and name
                          > 
                            {form.admFee = (Number(admFee))}
                            {form.fees = (Number(facility) * Number(time))} 
                            {form.Name = first + ' ' + last}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row py-2">
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <span className='block mb-2 text-sm font-medium text-black '>Paid on(date):</span>
                            <input type="date" autoComplete='none' required 
                                  onChange={handleChange} 
                                  name='paidOn' value={form.paidOn}
                                  className='py-2 rounded-lg relative block w-full px-3 
                                  border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                  placeholder='paid on' 
                              />
                          </div>
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <span className='block mb-2 text-sm font-medium text-black '>From:</span>
                            <input type="date" autoComplete='none' required 
                                  onChange={handleChange} 
                                  name='paidDate' value={form.paidDate}
                                  className='py-2 rounded-lg relative block w-full px-3 
                                  border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                  placeholder='Paid date'
                              />
                          </div>
                          <div className='pr-5 pb-4 sm:pb-0'>
                            <span className='block mb-2 text-sm font-medium text-black '>To:</span>
                            <input type="date" autoComplete='none' required 
                                  onChange={handleChange} 
                                  name='dueDate' value={form.dueDate}
                                  className='py-2 rounded-lg relative block w-full px-3 
                                  border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                  placeholder='due date' 
                              />
                          </div>
                        </div>
                        <div className='sm:pb-2 flex justify-center '>
                          <Button label="Invoice" type='submit'  className="bg-green-500 text-xsm hover:bg-green-400 px-3"/>
                        </div>

                      </form>
                      {/* form end */}
                      
                    </div>
                    
                    <div className='flex justify-between sm:justify-center py-2 mt-2' >
                      
                      <div className='pb-4  mx-2 sm:pb-4  sm:mx-5 '>
                        <Button label="delete" onClick={handleDelete} className="bg-red-500 hover:bg-red-400 px-3"/>
                      </div>
                      <div className='pb-4  mx-2 sm:pb-4  sm:mx-5 '>
                        <Link href={`/${id}/edit`}>
                          <Button label="edit"  className="bg-yellow-500 hover:bg-yellow-400 px-3"/>
                        </Link>
                      </div>

                    </div>
                </div>
                

            </div>
            
        </Box>
      </Modal>
    </div>
  );
}



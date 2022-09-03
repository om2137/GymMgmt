import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import Button from '@mui/material/Button';
import baseUrl from '../helper/baseUrl';

type Props = {
    title: string;
}

const burl = process.env.BASE_URL_ENV;

// export async function getStaticProps(context: any) {
//     console.log('working');
//     const res = await axios(`${baseUrl}/api/member`);
//     console.log(res.data.member);
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }
export async function getServerSideProps(context: any) {
    console.log('working');
    const res = await axios(`${baseUrl}/api/member`);
    console.log(res.data.member);
    return {
      props: {}, // will be passed to the page component as props
    }
  }

const SignUpForm: React.FC<Props> = ( {title} ) => {
    console.log("call");
    const [startDate, setStartDate] = useState(new Date());

    const [Form, setForm]= useState({
        Firstname: '',
        Middlename: '',
        Lastname: '',
        Address: '',
        Contact:''
      })
      const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({
            ...Form,
            [e.target.name]: e.target.value
        })
      }
      const handleForm = async(e: React.ChangeEvent<any>) => {
        e.preventDefault()
        try{
            const res = await axios('',{
                method: 'POST',
                header:{
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(Form)
            })
            Router.push('/')
        }catch(err){
            console.log("om" + err)
        }
      }

    return(
        <div className=' flex items-center justify-center  '>
            <div className='border-2 border-gray-400 py-10 rounded bg-white px-20 '>
                <div>
                    <h2 className='my-6 text-center text-4xl font-bold text-gray-900'>{title}</h2>
                    <form className='py-6' onSubmit={handleForm} >
                        <div className='rounded-md shadow-sm  text-left'>
                            {/* start */}
                            <div className=''>
                                <div className='flex pb-3'>
                                    <div>
                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>First Name:</label>
                                            <input type="text" autoComplete='none' required 
                                                onChange={handleChange} 
                                                name='Firstname' value={Form.Firstname}
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='' />
                                        </div>

                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Middle Name:</label>
                                            <input type="text" autoComplete='none' required 
                                                onChange={handleChange} 
                                                name='Middlename' value={Form.Middlename}
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='' />
                                        </div>    
                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Last Name:</label>
                                            <input type="text" autoComplete='none' required 
                                                onChange={handleChange} 
                                                name='Lastname' value={Form.Lastname}
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                        </div>
                                        <div>
                                            <input type="radio" name="gender" id="" value="male"  className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>male</label>
                                            <input type="radio" name="gender" id="" value="female"  className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>female</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="marriage" id="" className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>married</label>
                                            <input type="radio" name="marriage" id="" className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>unmarried</label>
                                        </div>
                                    </div>
                                   
                                   <div>

                                        <div className="flex justify-center items-center pb-5">
                                            <label className="flex flex-col justify-center items-center px-20 w-20 h-40 rounded-lg 
                                                border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-200">
                                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg className="mb-3 w-10 h-6 text-gray-400" fill="file" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    {/* <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>a */}
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>

                                        <div>
                                            
                                            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} 
                                                className="py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholderText='date of birth' />
                                            
                                            <input type="tel" autoComplete='none' required 
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='age'/>
                                        </div>
                                   </div>

                                    

                                </div>
                                     
                                <div>
                                    <label className=''>Address:</label>
                                    <input type="text" autoComplete='none' required 
                                        onChange={handleChange} 
                                        name='Address' value={Form.Address}
                                        className='appearance-none py-4 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                        
                                </div>

                                <div>
                                    <label className=''>Phone Number:</label>
                                    <input type="tel" autoComplete='none' required 
                                        onChange={handleChange} 
                                        name='Contact' value={Form.Contact}
                                    className='appearance-none py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                </div>
                                
                                
                                
                            </div>
                            <div className='py-4 text-center'>
                                <Button type='submit' className='bg-red-500 hover:bg-red-500 text-white '>Add</Button>
                            </div>
                            {/* end */}
                        </div> 
                    </form>

                </div>
            </div>
        </div>
        
    )
    
}

export default SignUpForm
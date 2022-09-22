import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import Button from '../Button';
import baseUrl from '../../helper/baseUrl';
import { Hidden } from '@mui/material';
import Link from 'next/link';
var converter = require('number-to-words');

type Props = {
    // image: string;
    first: string;
    middle: string;
    last: string;
    // phone: number;
    // birthdate: string;
    // age: number;
    gender: string;
    // mstatus: string;
    // id: number;
    fees : string;
}

const burl = process.env.BASE_URL_ENV;

export async function getStaticProps(context: any) {
    console.log('working');
    const res = await axios(`${baseUrl}/api/member`);
    console.log(res.data.member);
    return {
      props: {}, // will be passed to the page component as props
    }
  }

const InvoiceForm: React.FC<Props> = ( {first,middle,last,gender,fees} ) => {
    console.log("call");

    // const feesWord = converter.toWords(fees);
    const feesWord2 = converter.toWords(500);

    const handlePrint = () => {
        window.print();
    }

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
        <main className=' flex flex-col items-center justify-center '>
            <div className="flex">
                <div className="p-4">
                    <Button label="print" onClick={handlePrint} className="bg-green-500 hover:bg-green-400 px-3"/>
                </div>
                <div className="p-4">
                    <Link href={'/'}>
                        <Button label="back" className="bg-gray-500 hover:bg-gray-400 px-3"/>
                    </Link>
                </div>
            </div>
            
            <div className='w-[45rem] border-2 border-gray-400 py-10 rounded bg-white px-20 '>
                <div>
                    <div className='my-4'>
                        <div className="flex justify-center align-end">
                            <h2 className=' text-4xl font-bold text-gray-900 p-2'>Sandy's fitness care</h2>
                            <div className="font-semibold text-center text-xl m-auto">
                                <span className="font-semibold ">Recipt no: </span>
                                <span className="font-normal ">[9317]</span>
                            </div>
                            
                        </div>
                        
                        <div className="flex text-sm p-2">
                            <div className='w-2/3 '>
                                <h3 className=' text-center px-4'>
                                <span className="font-semibold">Address: </span>
                                Mohopada, Behind Shivsena shakha, Tal. Khalapur, Dist. Raigad.
                            </h3>
                            </div>
                            <div className='w-1/3 px-2'>
                                <h2 className='font-semibold ' >
                                    M: 8888053456 <br/>
                                    M: 7350034888
                                </h2> 
                            </div>
                        
                        </div> 
                    </div>
                    
                    <h3 className="pl-6 text-center font-bold capitalize">
                        {
                            gender === "male" ? <div>
                                <span className=' text-2xl '>Mr. {first+" "+middle+" "+last}</span>
                            </div> : 
                            <div>
                                <span className=' text-2xl '>Mrs. {first+" "+middle+" "+last}</span>
                            </div>
                        }
                        {/* <span className=' text-2xl '>Mr. Sandeep Patil</span> */}
                    </h3>

                    <div className='p-4 ml-8 '>
                        <span className="font-semibold capitalize">
                            A sum of Rupees (in words) : {fees} {feesWord2} Rupees
                        </span> 
                    </div>
                    
                    <div className='flex p-2'>
                        
                        <div className=' flex flex-col px-6 w-2/3 '>
                            <div className="flex">
                                <div className='flex flex-col px-4 '>
                                    <span className='font-bold'>
                                        Facility 
                                    </span>
                                    <span >
                                        {/* {facility} */}
                                        cardio
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Due Date  
                                    </span>
                                    <span>
                                        {/* {due} */}
                                        23/2/2021
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Amount 
                                    </span>
                                    <span>
                                        {/* {amount} */}
                                        500
                                    </span>
                                </div>
                            </div>
                            
                            <div className='text-center font-bold p-4'>
                                <span>
                                    Total : 700 {fees}
                                </span>
                            </div>
                        </div>
                        <div className='w-1/3 text-xl font-bold text-center'>
                            <span>
                                Sign: <br /> 
                            </span>
                            <span>
                                [sign]
                            </span>
                        </div>
                    </div>
                    

                     <form className='' onSubmit={handleForm} >
                         <div className='rounded-md shadow-sm  text-left'>
                            {/* start */}
                             {/* <div className=''>
                                <div className='flex pb-3'>
                                    <div>
                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Name:</label><br/>
                                            <label htmlFor="">{first+" "+middle+" "+last}Temperory name</label>
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
                                <Button label="Add" type="submit" className="bg-red-500 hover:bg-red-400 px-3"/>
                            </div> */}
                            {/* end */}
                        </div> 
                    </form> 
                    
                </div>
            </div>

        </main>
        
    )
    
}

export default InvoiceForm
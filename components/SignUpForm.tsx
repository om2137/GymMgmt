import React from 'react'
import Button from '../components/Button'
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    title: string;
}

const SignUpForm: React.FC<Props> = ( {title} ) => {
    console.log("call");
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className=' flex items-center justify-center  '>
            <div className='border py-10 rounded bg-white px-20 '>
                <div>
                    <h2 className='my-6 text-center text-4xl font-bold text-gray-900'>{title}</h2>
                    <form className='py-6' >
                        <div className='rounded-md shadow-sm -space-y-px text-left'>
                            <div>
                                <div className='flex pb-3'>
                                    <div>
                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>First Name:</label>
                                            <input type="text" autoComplete='none' required 
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='' />
                                        </div>

                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Middle Name:</label>
                                            <input type="text" autoComplete='none' required 
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='' />
                                        </div>    
                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Last Name:</label>
                                            <input type="text" autoComplete='none' required 
                                                className='py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                        </div>
                                        <div>
                                            <input type="radio" name="male" id="" className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>male</label>
                                            <input type="radio" name="male" id="" className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>female</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="male" id="" className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>married</label>
                                            <input type="radio" name="male" id="" className='mr-2'/>
                                            <label htmlFor="" className='mr-2'>unmarried</label>
                                        </div>
                                    </div>
                                   
                                   <div>

                                        <div className="flex justify-center items-center pb-5">
                                            <label className="flex flex-col justify-center items-center px-20 w-20 h-40 rounded-lg 
                                                border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-200">
                                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg className="mb-3 w-10 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    {/* <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>a */}
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>

                                        <div>
                                            {/* <label htmlFor="" className='mr-2'>Age:</label> */}
                                            {/* <input type="tel" autoComplete='none' required 
                                                    className='py-2 rounded relative block w-full px-3 
                                                    border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Date of birth'/> */}
                                            
                                            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} className="py-2 rounded relative block w-full px-3 
                                                border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                            
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
                                        className='appearance-none py-4 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                        
                                </div>

                                <div>
                                    <label className=''>Phone Number:</label>
                                    <input type="tel" autoComplete='none' required 
                                    className='appearance-none py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                </div>
                                
                                <div className='py-4 text-center'>
                                    <Button label='register' />
                                </div>
                                
                            </div>
                            
                        </div> 
                    </form>

                </div>
            </div>
        </div>
        
    )
    
}

export default SignUpForm
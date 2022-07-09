import React, { useState } from 'react'
import Button from '../components/Button'

type Props = {
    title: string;
}

const SignUpForm: React.FC<Props> = ( {title} ) => {
    console.log("call");
    return(
        <div className=' flex items-center justify-center  '>
            <div className='border py-10 rounded bg-white px-20 '>
                <div>
                    <h2 className='mt-6 text-center text-4xl font-bold text-gray-900'>{title}</h2>
                    <form className='mt-4 space-y-2' >
                        <div className='rounded-md shadow-sm -space-y-px text-left'>
                            <div>
                                <div className="mb-3 xl:w-96">
                                    <label className=''>First Name:</label>
                                    <input type="text" autoComplete='none' required 
                                        className='py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Username' />
                                </div>
                                    
                                <div className="mb-3 xl:w-96">
                                    <label className=''>Last Name:</label>
                                    <input type="text" autoComplete='none' required 
                                        className='py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Name'/>
                                </div>
                                <div>
                                    <label className=''>Address:</label>
                                    <input type="text" autoComplete='none' required 
                                        className='appearance-none py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Avatar'/>
                                    
                                </div>
                                <div>
                                    <label className=''>Phone Number:</label>
                                    <input type="text" autoComplete='none' required 
                                    className='appearance-none py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Bio'/>
                                </div>
                                <div className='py-2 text-center'>
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
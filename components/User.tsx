import React from 'react'
import Button from './Button'

export default function User() {
  return (
    <div>
      
      <div className=' flex items-center justify-center  '>
            <div className='border-2 border-gray-400 py-10 rounded bg-white px-20 '>
                <div>
                    <h2 className='my-6 text-center text-4xl font-bold text-gray-900'>title</h2>
                    <form className='py-6' >
                        <div className='rounded-md shadow-sm -space-y-px text-left'>
                            <div>
                                <div className='flex pb-3'>
                                    <div>
                                        <div className="mb-3 xl:w-48 pr-6">
                                          <label className=''>First Name:</label>
                                        </div>

                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Middle Name:</label>
                                            
                                        </div>    
                                        <div className="mb-3 xl:w-48 pr-6">
                                            <label className=''>Last Name:</label>
                                            
                                        </div>
                                        <div>
                                            
                                            <label htmlFor="" className='mr-2'>male/female</label>
                                            
                                        </div>
                                        <div>
                                            
                                            <label htmlFor="" className='mr-2'>married/unmarried</label>
                                            
                                        </div>
                                    </div>
                                   
                                   <div>

                                        <div className="flex justify-center items-center pb-5">
                                            
                                        </div>

                                        <div>
                                            
                                        </div>
                                   </div>

                                    

                                </div>
                                     
                                <div>
                                    <label className=''>Address:</label>
                                    
                                        
                                </div>

                                <div>
                                    <label className=''>Phone Number:</label>
                                    
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
        


    </div>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import InvoiceForm from '../components/invoice/Invoice'


export default function invoice() {
  return (
    <>
        {/* <Navbar title='Invoice'/> */}
        <main>
            <div className='p-10'>
                <InvoiceForm  title='Invoice' first=''middle=''last=''/>
            </div>
            
        </main>
        
    </>
  )
}

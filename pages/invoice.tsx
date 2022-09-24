import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
const axios = require('axios').default;
import MediaCard from '../components/cards'
import baseUrl from '../helper/baseUrl';

export async function getServerSideProps(context: any) {
  
  const res = await axios(`${baseUrl}/api/invoice`);
  const {invoice} = res.data;
  return {
    props: {
      invoices : invoice,
    },
  }
}

const invoice: NextPage = ({invoices }:any) => {
  
  return (
    <>
    <Navbar 
      title="Profiles"
    />
    <main className='px-6'>
      
      {/* modal */}
      <div>
        {/* <User/> */}
        <div className='flex flex-col justify-center sm:justify-start'>
          {
            invoices.map((invoice : any) => {
              
              return (
                <div className=' p-5'>
                  <div className='flex text-black'>
                    <div className="flex px-4">
                        <span className="font-semibold ">number: </span> 
                        {invoice.invoiceNumber}
                    </div>
                    <div className="px-4">
                      <span className="font-semibold">Name: </span> 
                      {invoice.Name}
                    </div>
                    <div className="px-4">
                      <span className="font-semibold">Paid: </span> 
                      {invoice.paidDate}
                    </div>
                    <div className="px-4">
                      <span className="font-semibold">Due: </span> 
                      {invoice.dueDate}
                    </div>
                    <div className="px-4">
                      <span className="font-semibold">Fees: </span> 
                      {invoice.fees}
                    </div>
                  </div>
                </div>
                
              )
            })
          }  
        </div>
      </div>
    </main>
    
    </>
  )
}

export default invoice

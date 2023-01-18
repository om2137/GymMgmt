import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
const axios = require('axios').default;
import MediaCard from '../components/cards'
import baseUrl from '../helper/baseUrl';
import Button from '../components/Button';
import BackToTopoButton from '../components/BackToTopButton'
import { useState } from 'react';
import FilterCards from '../components/FilterCards';

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

  // fliter users
  const [results, setResults] = useState([]);
  const [order, setOrder] = useState('');
  const [test, setTest] = useState(invoices);
  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()){
      return(
        setResults([]),
        setTest(invoices)
      )
    };
    const filteredValue = invoices.filter((invoices: { paidDate: string; }) =>
      invoices.paidDate.toLowerCase().startsWith(target.value.toLowerCase())
    );
    setResults(filteredValue);
    setTest(filteredValue);
  };
  

  let dateSort = (a: any,b: any) => {
    console.log(test);
  }
  return (
    <>
    
    <Navbar 
      title="Profiles"
    />
    <main className='px-6'>
      
      {/* modal */}
      <div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-left capitalize text-xl font-bold px-10 pt-4'>Total invoices: {invoices.length}</h1>
          <FilterCards results={results} onChange={handleChange} />
        </div>
        {/* <User/> */}
        <div className='flex flex-col justify-center sm:justify-start'>
          {
            test.map((invoice : any) => {
              
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
                    <div className='pl-4'>
                      <a href={`/invoices/${invoice._id}`} target="_blank">
                        <Button label='view' className='text-white bg-sky-500 hover:bg-sky-400 px-4 '/>
                      </a>
                    </div>
                  </div>
                </div>
                
              )
            })
            
          }  
        </div>
          <BackToTopoButton/>
      </div>
    </main>
    
    </>
  )
}

export default invoice

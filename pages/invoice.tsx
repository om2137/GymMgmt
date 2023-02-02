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
import moment from 'moment';

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
  const [order, setOrder] = useState('Decending');
  const [test, setTest] = useState(invoices);
  const [sort, setSort] = useState('invoice');
  
  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleOrder = (e: React.ChangeEvent<any>) => {
    if(!e.target.checked){
      setTest(invoices.reverse());
      setOrder('Decending');
    }else if(e.target.checked ){
      setTest(invoices.reverse());
      setOrder('Ascending');
    }
  }
  const sortDates = (e: React.ChangeEvent<any>) => {
    let sortDate = invoices;
    if(e.target.checked){
      sortDate.sort((a:{paidOn:string}, b:{paidOn:string}) =>   moment(a.paidOn,'DD/MM/YYYY').diff(moment(b.paidOn, 'DD/MM/YYYY')));
      setTest(sortDate);
      setSort('date');
    }else if(!e.target.checked){
      sortDate.sort((a:{invoiceNumber:number},b:{invoiceNumber:number}) =>  a.invoiceNumber - b.invoiceNumber)
      setTest(sortDate);
      setSort('invoice');
    }
    
  }
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
          <div className=''>
            <FilterCards results={results} onChange={handleChange} />
            <div className='flex justify-center'>
              <div className='px-4'>
                <input type="checkbox" id='ord' onChange={handleOrder}/> {order}
              </div>
              <div className=' px-4'>
                <input type="checkbox" id='Sdate' onChange={sortDates}/> {sort}
              </div>
            </div>
            
          </div>
          
        </div>
        {/* <User/> */}
        <div className='hidden md:flex justify-center capitalize'>
          <div className='flex flex-col  ml:px-4'>
            <span className='flex font-bold justify-center'>Number</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black py-1'>
                    {invoice.invoiceNumber}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>Name</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black py-1'>
                    {invoice.Name}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>PaidOn</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black py-1'>
                    {invoice.paidOn === 'N/A' ? '': moment(invoice.paidOn, 'DD/MM/YYYY').format('DD/MM/YYYY')}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>Paid Date</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black p-1 px-2'>
                    {invoice.paidDate}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>Due Date</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black p-1 px-2'>
                    {invoice.dueDate}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>Fees</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black p-1 px-2'>
                    {invoice.fees}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>Total Fees</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black p-1 px-2'>
                    {invoice.fees + invoice.admFee}
                  </div>   
                )
              })
            }  
          </div>
          <div className='flex flex-col justify-center ml:px-4'>
            <span className='flex font-bold  justify-center'>view</span>
            {
              test.map((invoice : any) => {
                return (
                  <div className='flex justify-center text-black p-1 px-2'>
                      <a href={`/invoices/${invoice._id}`} target="_blank">
                        <button className='text-blue-500 uppercase'>view</button>
                     </a> 
                   </div>   
                )
              })
            }  
          </div>
        </div>
        
          <BackToTopoButton/>
      </div>
    </main>
    
    </>
  )
}

export default invoice

import React from 'react'
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import Button from '../../../components/Button';
import baseUrl from '../../../helper/baseUrl';
import Link from 'next/link';
var converter = require('number-to-words');

export async function getServerSideProps(context: any) {
    const id = context.query.id;
    const res = await axios(`${baseUrl}/api/invoice/${id}`);
    const {invoice} = res.data;
    return {
      props: {
        invoices: invoice,
      },
    }
  }

export default function EachInvoice({invoices}: any) {
    
    const payDate = new Date(invoices.paidDate);
    const payMonth = payDate.getMonth()+1;
    const payDay = payDate.getDate();
    const payYear = payDate.getFullYear();

    const dueDate = new Date(invoices.dueDate);
    const dueMonth = dueDate.getMonth()+1;
    const dueDay = dueDate.getDate();
    const dueYear = dueDate.getFullYear();
    const due = dueDate.toDateString();

    const feesWord = converter.toWords(invoices.fees);

    const handlePrint = () => {
        window.print();
    }

    // Invoice form
    
    
    const inNumber = invoices.length;
    var paidDate = new Date(invoices.paidDate);
    console.log(paidDate);

    return(
        
        <main className=' flex flex-col items-center justify-center '>
            <div className="flex">
                <div className="p-4">
                    <Button label="print" onClick={handlePrint} className="bg-green-500 hover:bg-green-400 px-3"/>
                </div>
                
                <div className="p-4">
                    <Link href={'/invoice'}>
                        <Button label="back" className="bg-gray-500 hover:bg-gray-400 px-3"/>
                    </Link>
                </div>
                <div className='font-bold p-5 '>
                    {inNumber}
                </div>
                
            </div>
            
            
            <div className='w-[45rem] border-2 border-gray-400 py-10 rounded bg-white px-20 '>
                <div>
                    <div className='my-4'>
                        <div className="flex justify-center align-end">
                            <h2 className=' text-4xl font-bold text-gray-900 p-2'>Sandy's fitness care</h2>
                            <div className="font-semibold text-center text-xl m-auto">
                                <span className="font-semibold ">Recipt no: </span>
                                
                                <span className="font-normal ">{invoices.invoiceNumber}</span>
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
                        <span className=' text-2xl '>Mr. {invoices.Name}</span>
                    </h3>

                    <div className='flex justify-center p-4 ml-8 '>
                        <span className="text-center font-bold capitalize">
                            A sum of Rupees  <br />
                            (in words)  
                        </span> 
                        <span className="text-center font-semibold capitalize p-2">
                            : {feesWord}  Rupees
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
                                        {invoices.dueDate}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Amount 
                                    </span>
                                    <span>
                                        {invoices.fees}
                                        {/* 500 */}
                                    </span>
                                </div>
                            </div>
                            
                            <div className='text-center font-bold p-4'>
                                <span>
                                    Total : {invoices.fees}
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
                    
                </div>
            </div>
            
        </main>
        
    )
    
}


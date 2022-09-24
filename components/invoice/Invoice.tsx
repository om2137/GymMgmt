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
    facility: string;
    // age: number;
    gender: string;
    paid : string;
    due : string;
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

const InvoiceForm: React.FC<Props> = ( {first,middle,last,gender,fees,paid,due,facility} ) => {

    
    const payDate = new Date(paid);
    const payMonth = payDate.getMonth()+1;
    const payDay = payDate.getDate();
    const payYear = payDate.getFullYear();

    const dueDate = new Date(due);
    const dueMonth = dueDate.getMonth()+1;
    const dueDay = dueDate.getDate();
    const dueYear = dueDate.getFullYear();

    const feesWord = converter.toWords(fees);
    // const feesWord2 = converter.toWords(500);

    const handlePrint = () => {
        window.print();
    }

    // Invoice form
    const [form, setForm]= useState({
        Name: '',   
        paidDate: '',
        dueDate: '',
        facility: '',
        fees:0,
        invoiceNumber: 0,
      })
      const handleForm = async(e: React.ChangeEvent<any>) => {
        e.preventDefault()
        try{
            
            const res = await axios(`${baseUrl}/api/invoice`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(form),
            })
            Router.push('/invoice')
            
        }catch(err){
            console.log(err)
        }
        
    }
    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            
        })
        
    }
    var inNum = 0;
    var paidDate = new Date(paid);
    console.log(paidDate);

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
                
                <form action="" onSubmit={handleForm} className="flex">
                    <div className='py-4'>
                        <input type="text" autoComplete='none' required 
                            onChange={handleChange} 
                            name='invoiceNumber' value={form.invoiceNumber}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            placeholder='firstname' 
                        />
                    </div>
                    <div className='hidden'>
                        {form.Name = first+" "+middle+" "+last}
                        {form.paidDate = paid}
                        {form.dueDate = due}
                        {form.facility = facility}
                        {form.fees = Number(fees)}
                    </div>
                    <div className="p-4">
                        <Button label="save" type='submit' className="bg-sky-500 hover:bg-sky-400 px-3"/>
                    </div>
                </form>
            </div>
            
            
            <div className='w-[45rem] border-2 border-gray-400 py-10 rounded bg-white px-20 '>
                <div>
                    <div className='my-4'>
                        <div className="flex justify-center align-end">
                            <h2 className=' text-4xl font-bold text-gray-900 p-2'>Sandy's fitness care</h2>
                            <div className="font-semibold text-center text-xl m-auto">
                                <span className="font-semibold ">Recipt no: </span>
                                <span className="font-normal ">{form.invoiceNumber}</span>
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
                                        {facility}
                                        {/* cardio */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Due Date  
                                    </span>
                                    <span>
                                        {due}
                                        {/* 23/2/2021 */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Amount 
                                    </span>
                                    <span>
                                        {fees}
                                        {/* 500 */}
                                    </span>
                                </div>
                            </div>
                            
                            <div className='text-center font-bold p-4'>
                                <span>
                                    Total : {fees}
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

export default InvoiceForm
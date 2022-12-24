import React from 'react'
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import Button from '../Button';
import baseUrl from '../../helper/baseUrl';
import SavePdf from '../SavePdf';
import SendPdf from '../SendPdf';
var converter = require('number-to-words');

type Props = {

    first: string;
    middle: string;
    last: string;
    phone: number;
    facility: string;
    gender: string;
    paid : string;
    submitted : string;
    due : string;
    inNumber: number;
    fees : string;
    admfee : number;
}

export async function getStaticProps(context: any) {
    
    const res = await axios(`${baseUrl}/api/invoice`);
    const {invoice} = res.data;
    return {
      props: {
        invoices : invoice,
      }, 
    }
  }
    

const InvoiceForm: React.FC<Props> = ( {first,middle,last,gender,fees,paid,due,facility,inNumber,phone,submitted,admfee} ) => {

    const [discount,setDiscount] = useState(0);
    const amount = (Number(fees)) - discount;
    const total = amount + admfee;
    const feesWord = converter.toWords(total);
    // Invoice form
    const [form, setForm]= useState({
        Name: '',   
        paidDate: '',
        paidOn: '',
        dueDate: '',
        Facility: '',
        Gender: '',
        admFee: 0,
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
    const handleDiscount = (e: React.ChangeEvent<any>) => {
        setDiscount(e.target.value);
    }
    var inNum = inNumber + 1;
    var paidDate = new Date(paid);
    return(
        
        <main className=' flex flex-col items-center justify-center '>
            <div className="flex">
                <div className="p-4">
                    {/* {phone} */}
                    <SavePdf rootElementID="PDF" downloadFileName="testpage"/>
                </div>
                <div className="p-4">
                    <SendPdf rootElementID="PDF" phone={phone} />
                </div>
                <div className="p-4">
                    <input type="text" placeholder='Discount' className='w-[80px] border border-slate-800 rounded p-1' onChange={handleDiscount}/>
                </div>
                <div className="p-4">
                    <Button label="Back" onClick={() => history.back()} className="bg-gray-500 hover:bg-gray-400 px-3"/>
                </div>
                <div className='font-bold p-5 '>
                    {inNumber}
                </div>
                <form action="" onSubmit={handleForm} className="flex">
                    
                    <div className='hidden'>
                        {form.invoiceNumber = inNum}
                        {form.Name = first+" "+middle+" "+last}
                        {form.paidDate = paid}
                        {form.dueDate = due}
                        {form.Facility = facility}
                        {form.fees = Number(fees)}
                        {form.admFee = Number(admfee)}
                        {form.Gender = gender}
                        {form.paidOn = submitted}
                    </div>
                    <div className="p-4">
                        <Button label="save" type='submit' className="bg-sky-500 hover:bg-sky-400 px-3"/>
                    </div>
                </form>
            </div>
            
            <div className='w-[45rem] ml:w-[66rem]  border-2 border-gray-400 py-10 rounded bg-white px-20 ml:px-28 ml:py-14' id='PDF'>
                <div>
                    <div className='my-4'>
                        <div className="flex justify-center align-end">
                            <div className=''>
                               <img src="../../Gym_assets/mainlogo2.webp" alt="" className='w-[25rem] ml:w-[37rem] content-center m-2 '/> 
                            </div>
                            
                            <div className="font-semibold text-center ml:text-2xl text-xl ml:pl-6 m-auto">
                                <div className='py-1 ml:py-2'>
                                    <span className="font-semibold ml:text-xl text-base ">Recipt no: </span>
                                    <span className="font-normal ">{form.invoiceNumber}</span>
                                </div>
                                <div className='py-1 ml:py-2'>
                                    <span className="font-semibold ml:text-xl text-base">Paid on: </span>
                                    <span className="font-normal ml:text-lg text-sm">{form.paidOn}</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="flex text-sm p-2 ml:text-xl">
                            <div className='w-2/3 '>
                                <h3 className=' text-center px-4'>
                                <span className="font-semibold">Address: </span>
                                Mohopada, Behind Shivsena shakha, Tal. Khalapur, Dist. Raigad.
                            </h3>
                            </div>
                            <div className='w-1/3 px-2'>
                                <h2 className='font-semibold pl-14 ml:pl-28' >
                                    M: 8888053456 <br/>
                                    M: 7350034888
                                </h2> 
                            </div>
                        
                        </div> 
                    </div>
                    
                    <h3 className="pl-6  text-center font-bold capitalize">
                        {
                            gender === "male" ? <div>
                                <span className=' text-2xl ml:text-4xl '>Mr. {first+" "+middle+" "+last}</span>
                            </div> : 
                            <div>
                                <span className=' text-2xl ml:text-4xl '>Mrs. {first+" "+middle+" "+last}</span>
                            </div>
                        }
                    </h3>
                    
                    <div className='flex item-center'>
                        <div className='flex justify-center ml:text-2xl p-2 ml:p-4 ml-8 '>
                            <span className="text-center font-bold capitalize">
                                A sum of Rupees  <br />
                                (in words)  
                            </span> 
                            <span className="text-center font-semibold capitalize p-2">
                                : {feesWord}  Rupees
                            </span>
                        </div>
                    </div>
                    
                    
                    <div className='flex p-2'>
                        
                        <div className=' flex flex-col w-[70rem] ml:text-xl'>
                            <div className="flex">
                                <div className='flex flex-col px-4 '>
                                    <span className='font-bold'>
                                        Facility 
                                    </span>
                                    <span className=' capitalize'>
                                        {facility}
                                        {/* cardio */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Start 
                                    </span>
                                    <span>
                                        {paid}
                                        {/* 23/2/2021 */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Due
                                    </span>
                                    <span>
                                        {due}
                                        {/* 23/2/2021 */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4 '>
                                    <span  className='font-bold'>
                                        Adm.fee 
                                    </span>
                                    <span>
                                        {admfee}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Amount 
                                    </span>
                                    <span>
                                        {amount}
                                        {/* 500 */}
                                    </span>
                                </div>
                            </div>
                            
                            <div className='text-center font-bold p-4'>
                                <span>
                                    Total Amount : {total}
                                </span>
                            </div>
                        </div>
                        <div className='w-[35rem] text-xl ml:text-3xl font-bold text-center '>
                            <span>
                                Sign <br /> 
                            </span>
                            <span className='flex justify-center'>
                                <img src="../../Gym_assets/signature.svg" className='w-28 pt-2 lg:pt-4' alt="" />
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </main>
        
    )
    
}

export default InvoiceForm
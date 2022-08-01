import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import Button from '@mui/material/Button';

type Props = {
    title: string;
}

export async function getStaticProps(context: any) {
  
    const res = await axios('http://localhost:3000/api/member');
    console.log(res.data.member);
    return {
      props: {}, // will be passed to the page component as props
    }
  }

const SignUpForm: React.FC<Props> = ( {title} ) => {
    console.log("call");
    const [startDate, setStartDate] = useState(new Date());

    const [form, setForm] = useState({
        Firstname:'',
        Middlename: '',
        Lastname: '',
        Address: '',
        Contact:''
    })
    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleForm = async(e: React.ChangeEvent<any>) => {
        e.preventDefault()
        try{
            const res = await axios('http://localhost:3000/api/member', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })
            Router.push('/')
        }catch(err){
            console.log(err)
        }
  }
    return(
        <div className=' flex items-center justify-center  '>
            <div className='border-2 border-gray-400 py-10 rounded bg-white px-20 '>
                <div>
                    <h2 className='my-6 text-center text-4xl font-bold text-gray-900'>{title}</h2>
                    <form className='py-6' onSubmit={handleForm} >
                        <input type="text" autoComplete='none' required 
                            onChange={handleChange} 
                            name='Firstname' value={form.Firstname}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='firstname' 
                        />
                        <input type="text" autoComplete='none' required 
                            onChange={handleChange} 
                            name='Middlename' value={form.Middlename}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Middlename' 
                        />
                        <input type="text" autoComplete='none' required 
                            onChange={handleChange} 
                            name='Lastname' value={form.Lastname}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Lastname' 
                        />
                        <input type="text" autoComplete='none' required 
                            onChange={handleChange} 
                            name='Address' value={form.Address}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Address' 
                        />
                        <input type="tel" autoComplete='none' required 
                            onChange={handleChange} 
                            name='Contact' value={form.Contact}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Contact' 
                        />
                        <Button type="submit" className='bg-red-500 hover:bg-red-400 text-white'>Add</Button>
                        
                    </form>

                </div>
            </div>
        </div>
        
    )
    
}

export default SignUpForm
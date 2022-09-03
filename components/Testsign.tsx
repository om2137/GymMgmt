import React from 'react'
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router from 'next/router'
import Button from '@mui/material/Button';
import Cloudi from '../components/cloudinary';
import baseUrl from '../helper/baseUrl';

export async function getStaticProps(context: any) {
    const res = await axios(`${baseUrl}/api/member`);
    console.log(res.data.member);
    return {
      props: {}, 
    }
}

type Props = {
    title: string;
    avatar: string;
    Gender: string;
    mst: string;
    selectedFile: string;
}

const SignUpForm: React.FC<Props> = (  ) => {

    const [form, setForm] = useState({
        Firstname:'',
        Middlename: '',
        Lastname: '',
        Address: '',
        Contact:'',
        DoB: '',
        Gender:'',
        Mstat:'',
        Avatar: '',
    })
    
    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            
        })
        
    }
    const handleForm = async(e: React.ChangeEvent<any>) => {
        e.preventDefault()
        try{
            
            const res = await axios(`${baseUrl}/api/member`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(form),
            })
            Router.push('/')
            
        }catch(err){
            console.log(err)
        }
        
  }
    
    // console.log(form.Gender);
    
    const [gender, setGender] = useState('');
    const [mst, setMst] = useState('');
    form.Avatar = '';
    const [avatar, setAvatar] = useState('');
    const printUrl = (arg: string) => {
        // console.log(arg)
        setAvatar(arg)
    }
    form.Avatar = avatar;
    return(
        <div className=' flex items-center justify-center  '>
            <div className='border-2 border-gray-400 py-10 rounded bg-white sm:px-20 px-5'>
                <div>
                    <h2 className='my-6 text-center text-4xl font-bold text-gray-900'>{}</h2>
                    
                    
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
                        <input type="date" autoComplete='none' required 
                            onChange={handleChange} 
                            name='DoB' value={form.DoB}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Date of birth' 
                        />
                        {/*  <input type="file"  /> */}
                        <div className='py-2'> 
                            <input type="radio" 
                                name="gender" id="" 
                                onChange={(e) => setGender(e.target.value)}
                                value="Female"                           
                                className='mr-2'/>
                            <label className='mr-2'>female</label>
                            <input type="radio" 
                                name="gender" id="" 
                                onChange={(e) => setGender(e.target.value)}
                                value="male"
                                className='mr-2'/>
                            <label className='mr-2'>male</label>
                            <p className='hidden'>{form.Gender = gender}</p>
                        </div>      
                        <div className='pb-2'>
                            <input type="radio" 
                                name="mariage" id="" 
                                onChange={(e) => setMst(e.target.value)}
                                value="married"                           
                                className='mr-2'/>
                            <label className='mr-2'>married</label>
                            <input type="radio" 
                                name="mariage" id="" 
                                onChange={(e) => setMst(e.target.value)}
                                value="unmarried"
                                className='mr-2'/>
                            <label className='mr-2'>unmarried</label>
                            <p className='hidden' >{form.Mstat = mst}</p>
                        </div>   
                        {/* image component */}
                        
                        {/* image component end */}
                        <div className="pt-2">
                            <button type="submit" className='bg-red-500 hover:bg-red-400 text-white p-2 rounded'>Add</button>
                        </div>
                        
                    </form>
                    <Cloudi  theurl={printUrl}/>
                </div>
            </div>
        </div>
        
    )
    
}

export default SignUpForm;
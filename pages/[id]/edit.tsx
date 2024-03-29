import React from 'react'
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Router, { useRouter } from 'next/router'
import Button from '../../components/Button';
import Cloudi from '../../components/cloudinary'
import Navbar from '../../components/Navbar';
import baseUrl from '../../helper/baseUrl';
import Link from 'next/link';

export async function getServerSideProps(context: any) {
    const id = context.query.id;
    const res = await axios(`${baseUrl}/api/member/${id}`);
    const {member} = res.data;
    return {
      props: {
        members: member,
      },
    }
  }
type Props = {
    title: string;
    avatar: string;
    Gender: string;
    mst: string;
    selectedFile: string;
}

const EditForm: React.FC<Props> = ( {members}:any ) => {

    const [form, setForm] = useState({
        Firstname: members.Firstname,
        Middlename: members.Middlename,
        Lastname: members.Lastname,
        Address: members.Address,
        Contact:members.Contact,
        DoB: members.DoB,
        Gender: members.Gender,
        Mstat: members.Mstat,
        Avatar: members.Avatar,
        admissionDate: members.admissionDate,
        cardNumber: members.cardNumber,
    })
    
    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            
        })
        
    }

    const router = useRouter();
    const memberId = router.query.id;
    console.log(memberId);

    const handleForm = async(e: React.ChangeEvent<any>) => {
        e.preventDefault()
        try{
            
            const res = await axios(`${baseUrl}/api/member/${memberId}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(form),
            })
            Router.push(`/${memberId}`)
            
        }catch(err){
            console.log(err)
        }
        
  }
    
    // console.log(form.Gender);
    
    const [gender, setGender] = useState(members.Gender);
    const [mst, setMst] = useState('');
    form.Avatar = '';
    const [avatar, setAvatar] = useState(members.Avatar);
    const printUrl = (arg: string) => {
        // console.log(arg)
        setAvatar(arg)
    }
    form.Avatar = avatar;
    return(
        <>
        <Navbar 
        title="Edit Profiles"
        />
        <div className=' flex items-center justify-center pt-10 '>
            <div className='w-72 sm:w-[30rem] border-2 border-gray-400 py-10 rounded bg-white sm:px-20 px-5'>
                <div>
                    <h2 className='my-6 text-center text-4xl capitalize font-bold text-gray-900'>{form.Firstname} {form.Lastname}</h2>
                    
                    
                    <form className='py-6' onSubmit={handleForm} >
                        <input type="text" autoComplete='none'  
                            onChange={handleChange} 
                            name='Firstname' value={form.Firstname}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='firstname' 
                        />
                        <input type="text" autoComplete='none'  
                            onChange={handleChange} 
                            name='Middlename' value={form.Middlename}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Middlename' 
                        />
                        <input type="text" autoComplete='none'  
                            onChange={handleChange} 
                            name='Lastname' value={form.Lastname}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Lastname' 
                        />
                        <input type="text" autoComplete='none'  
                            onChange={handleChange} 
                            name='cardNumber' value={form.cardNumber}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Card Number' 
                        />
                        <input type="text" autoComplete='none'  
                            onChange={handleChange} 
                            name='Address' value={form.Address}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Address' 
                        />
                        <input type="tel" autoComplete='none'  
                            onChange={handleChange} 
                            name='Contact' value={form.Contact}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Contact' 
                        />
                        <span className='flex text-left p-2'>Date of Admission: </span>
                        <input type="date" autoComplete='none'  
                            onChange={handleChange} 
                            name='admissionDate' value={form.admissionDate}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            placeholder='Admission Date' 
                        />
                        <span className='flex text-left p-2'>Date of Birth: </span>
                        <input type="date" autoComplete='none'  
                            onChange={handleChange} 
                            name='DoB' value={form.DoB}
                            className='py-2 rounded relative block w-full px-3 
                            border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Date of birth' 
                        />
                        {/*  <input type="file"  /> */}
                        <div className='pt-2'> 
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
                        <div className='pt-2'>
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
                        <div className="flex justify-center">
                            <div className='text-center p-4'>
                                <Button label="Save" type="submit" className="bg-green-500 hover:bg-green-400 px-3"/>

                            </div>
                            
                            <div className='text-center p-4'>
                                <Button label="back" onClick={() => history.back()} className="bg-red-500 hover:bg-red-400 px-3"/>
                            </div>
                        </div>
                        
                    </form>
                    <Cloudi  theurl={printUrl}/>
                </div>
            </div>
            
        </div>
        <div className='text-2xl font-bold py-10'>
          <footer>
            <h2></h2>
          </footer>
        </div>
        </>
    )
    
}

export default EditForm;
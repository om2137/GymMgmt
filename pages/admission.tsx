import type { NextPage } from 'next'
import Head from 'next/head'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'
import Test from '../components/Testsign'
import Router from 'next/router'
import { useState } from 'react'
import { Button } from '@mui/material'

const axios = require('axios').default;


function admission() {
  
    const [form, setForm] = useState({
        Firstname:'',
        Middlename: '',
        Lastname: '',
        Address: ''
        // Contact:''
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>fitness care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar 
        title="Admission Form"
      />
      <main className="flex w-full flex-1 flex-col items-top justify-top px-20 text-center">

        <div className='flex w-full flex-1 flex-col items-center drop-shadow-2xl justify-center p-10'>
          {/* <SignUpForm title="Admission Form"/> */}
          <Test title="Admission Form"/>
        </div>
        {/* <form className='py-6' onSubmit={handleForm} >
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
            <Button type="submit" className='bg-red-500 hover:bg-red-400 text-white'>Add</Button>
            
        </form>         */}
      </main>
      <div className='text-2xl font-bold py-10'>
          <footer>
            <h2>Thank you</h2>
          </footer>
        </div>
    </div>
  )
}

export async function getStaticProps(context: any) {
  
  const res = await axios('http://localhost:3000/api/member');
  console.log(res.data.member);
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default admission

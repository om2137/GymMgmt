import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
const axios = require('axios').default;
import MediaCard from '../components/cards'
import baseUrl from '../helper/baseUrl';
import SavePdf from '../components/SavePdf'
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';

export async function getServerSideProps(context: any) {
  
  const res = await axios(`${baseUrl}/api/member`,);
  const res2 = await axios(`${baseUrl}/api/invoice`);
  const {member} = res.data;
  const {invoice} = res2.data;
  return {
    props: {
      members: member,
      invoices: invoice,
    },
  }
}

const Home: NextPage = ({members,invoices}:any) => {

  // const [id,setId] = useState<string>("");
  // const [results, setResults] = useState([]);
  // type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  // const handleChange: changeHandler = (e) => {
  //   const { target } = e;
  //   if (!target.value.trim()) return setResults([]);

  //   const filteredValue = members.filter((members: { Firstname: string; Lastname:string; Contact: Number;}) =>
  //     members.Firstname.toLowerCase().startsWith(target.value) || 
  //     members.Lastname.toLowerCase().startsWith(target.value) || 
  //     members.Contact.toString().startsWith(target.value)
  //   );
  //   setResults(filteredValue);
  // };

  // console.log("ID:"+id);
  
  return (
    <>
    <Navbar 
      title="Profiles"
      members={members}
    />
    <main className='px-6 md:mt-8'>
      
      {/* modal */}
      <div>
        <div className='flex justify-center font-semibold text-4xl p-6 m-4 text-center'>
          Welcome to the Dashboard of Sandys Fitness Care
        </div>
        {/* <div>
          <SearchBar results={results} onChange={handleChange} renderItem={(item: {
              Firstname: string; 
              Lastname:string;
              _id: string;
              Avatar: string;

            })=>
            <div className='flex capitalize'>
              <img src={item.Avatar} alt="avatar" className='w-10  object-cover  h-10 rounded-full'/>
              <span className="p-2">
                {item.Firstname+" "+item.Lastname}
              </span>
              
            </div>}
          />
        </div> */}
        <div className='flex flex-col justify-center text-center p-5'>
          <span className='text-2xl md:text-4xl font-semibold p-4'>Overview</span>
          <div className='flex flex-col capitalize justify-center'>
            <div className='p-2'>
              <span className='font-semibold'>total members: </span>  {members.length}
            </div>
            <div className='p-2'>
            <span className='font-semibold'> total invoices: </span>{invoices.length}
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center p-5'>
            
            <div className='md:p-6 p-3 '>
              <a
                  className="inline-block border border-gray-500 hover:bg-gray-500 hover:text-white text-sm px-6 py-3 rounded  mt-4 lg:inline-block lg:mt-0 font-bold"
                  href="../profiles"
                >
                  Profiles
                </a>
            </div>
            <div className='md:p-6 p-3'>
              <a
                  className="inline-block border border-gray-500 hover:bg-gray-500 hover:text-white text-sm px-6 py-3 rounded  mt-4 lg:inline-block lg:mt-0 font-bold"
                  href="../invoice"
                >
                  Invoices
                </a>
            </div>
            <div className='md:p-6 p-3'>
              <a
                  className="inline-block border border-gray-500 hover:bg-gray-500 hover:text-white text-sm px-6 py-3  rounded  mt-4 lg:inline-block lg:mt-0 font-bold"
                  href="../admission"
                >
                  Admission
                </a>
            </div>
          
        </div>

        {/* <User/> */}
      </div>
    </main>
    <div className='text-2xl font-bold py-10'>
        <footer>
          <h2>
            
          </h2>
        </footer>
    </div>
    
    </>
  )
  
}

export default Home

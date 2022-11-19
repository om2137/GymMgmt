import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
const axios = require('axios').default;
import MediaCard from '../components/cards'
import baseUrl from '../helper/baseUrl';

export async function getServerSideProps(context: any) {
  
  const res = await axios(`${baseUrl}/api/member`);
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
  
  return (
    <>
    <Navbar 
      title="Profiles"
    />
    <main className='px-6'>
      
      {/* modal */}
      <div>
        <div className='flex justify-center font-semibold text-4xl p-6 align-center'>
          Welcome to the Dashboard of Sandys Fitness Care
        </div>
        <div className='flex flex-col md:flex-row justify-center text-center p-5'>
            <div className='md:p-6 p-3 '>
              <a
                  className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt-4 lg:inline-block lg:mt-0 font-bold"
                  href="../profiles"
                >
                  Profiles
                </a>
            </div>
            <div className='md:p-6 p-3'>
              <a
                  className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt-4 lg:inline-block lg:mt-0 font-bold"
                  href="../invoice"
                >
                  Invoices
                </a>
            </div>
            <div className='md:p-6 p-3'>
              <a
                  className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt-4 lg:inline-block lg:mt-0 font-bold"
                  href="../admission"
                >
                  Admission
                </a>
            </div>
        </div>
        <div className='flex flex-col justify-center text-center p-5'>
          <span className='text-2xl font-semibold'>Overview</span>
          <div className='flex flex-col justify-center'>
            <div className=''>
              total members: {members.length}
            </div>
            <div className=''>
              total invoices: {invoices.length}
            </div>
          </div>
        </div>

        {/* <User/> */}
      </div>
    </main>
    
    </>
  )
}

export default Home

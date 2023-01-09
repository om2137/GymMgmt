import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
const axios = require('axios').default;
import baseUrl from '../helper/baseUrl';

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

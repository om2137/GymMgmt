import type { NextPage } from 'next'
import Head from 'next/head'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'
import Testsign from '../components/Testsign'
const axios = require('axios').default;


function admission() {
  

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
          <Testsign title="Admission Form" gender={''} Gender={''} mst={''}/>
        </div>
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

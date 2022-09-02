import type { NextPage } from 'next'
import Head from 'next/head'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'
import Testsign from '../components/Testsign'
const axios = require('axios').default;
const bul = process.env.BASE_URL_ENV;

export async function getStaticProps(context: any) {
  
  const res = await axios(`${bul}/api/member`);
  console.log(res.data.member);
  return {
    props: {}, // will be passed to the page component as props
  }
}


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
          <Testsign title="Admission Form" Gender={''} mst={''} selectedFile={''} avatar={''}/>
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

export default admission

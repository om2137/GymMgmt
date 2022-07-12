import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SignUpForm from '../components/SignUpForm'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-200">
      <Head>
        <title>fitness care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-top justify-top px-20 text-center">
        <h1 className="text-6xl font-bold py-10">
          Welcome to Gym
        </h1>
        
        <div className='flex w-full flex-1 flex-col items-center justify-center '>
          <SignUpForm title="Admission Form"/>
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

export default Home

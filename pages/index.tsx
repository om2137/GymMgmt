import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-top justify-top px-20 text-center">
        <h1 className="text-6xl font-bold pt-10">
          Welcome to Gym
        </h1>
        <div className='flex pl-10 py-4'>
          <span className='font-semibold text-lg'>Admission form</span>
        </div>
        
        
      </main>

    </div>
  )
}

export default Home

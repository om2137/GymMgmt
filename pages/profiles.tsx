import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MediaCard from '../components/cards'
import SignUpForm from '../components/SignUpForm'

const profiles: NextPage = () => {
  return (
    <>
    <div className='flex w-full flex-1 flex-col items-top justify-top text-center'>
      <h1 className='text-6xl font-bold p-6 bg-gray-400'>Profiles</h1>
    </div>
    <div className='py-5'>
    <div className='flex content-center justify-center pb-10 xsm:hidden sm:flex'>
              <Grid
                container 
                spacing="40px" 
                marginLeft="10px"
                marginRight="20px"
              >
                  <Grid item xs={12} sm={6} md={3} xl={2} >
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='Thoughts' 
                      description='description' 
                      GHlink='https://github.com/om2137/Thoughts'
                      blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                    />
                  </Grid>
                  
              </Grid>
            </div>
    </div>
    </>
  )
}

export default profiles

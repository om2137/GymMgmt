import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MediaCard from '../components/cards'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm'
const axios = require('axios').default;

export async function getStaticProps(context: any) {
  
  const res = await axios('http://localhost:3000/api/member');
  const {member} = res.data;
  return {
    props: {
      members: member,
    }, // will be passed to the page component as props
  }
}

const profiles: NextPage = ({members}:any) => {

  return (
    <>
    <Navbar 
      title="Profiles"
    />
    <main className='px-6'>
      <div className='py-5'>
        {/* <div className='flex content-center justify-center pb-10 xsm:hidden sm:flex'>
                  <Grid
                    container 
                    spacing="40px" 
                    marginLeft="10px"
                    marginRight="20px"
                  >
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} xl={2} >
                        <MediaCard image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
                          title='Om Raut' 
                          description='description' 
                          GHlink='https://github.com/om2137/Thoughts'
                          blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                        />
                      </Grid>
                      
                      
                  </Grid>
        </div> */}
      </div>
      {/* modal */}
      <div>
        {/* <User/> */}
        <div className='flex '>
          {
            members.map((member : any) => {
              return (
                <div className='p-5'>
                  <div className=' text-black'>
                    <MediaCard
                      image="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4"
                      title={member.Firstname + " " + member.Lastname}
                    />
                  </div>
                </div>
                
              )
            })
          }  
        </div>
        

      </div>
    </main>
    
    </>
  )
}

export default profiles

import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MediaCard from '../components/cards'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm'
import Modal from '../components/Modal'



const profiles: NextPage = () => {
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
        <div>
        <MediaCard 
          image='https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4'
          title='Om Raut'                           
        />
            
        </div>

      </div>
    </main>
    
    </>
  )
}

export default profiles

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'
const axios = require('axios').default;
import MediaCard from '../components/cards'

export async function getStaticProps(context: any) {
  
  const res = await axios('http://localhost:3000/api/member');
  const {member} = res.data;
  return {
    props: {
      members: member,
    },
  }
}

const Home: NextPage = ({members}:any) => {
  return (
    <>
    <Navbar 
      title="Profiles"
    />
    <main className='px-6'>
      
      {/* modal */}
      <div>
        {/* <User/> */}
        <div className='flex flex-wrap'>
          {
            members.map((member : any) => {
              const birth = new Date(member.DoB);
              const age = new Date().getFullYear() - birth.getFullYear();
              const month = birth.getMonth()+1;
              const day = birth.getDate();
              const year = birth.getFullYear();

              return (
                <div className='p-5'>
                  <div className=' text-black'>
                    <MediaCard
                      image={member.Avatar}
                      first={member.Firstname}
                      middle={member.Middlename}
                      last={member.Lastname}
                      address={member.Address}
                      phone={member.Contact}
                      Dob={day+'/'+month+'/'+year}
                      age={age}
                      gender={member.Gender}
                      marriage={member.Mstat}
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

export default Home

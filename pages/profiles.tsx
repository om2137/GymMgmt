import type { NextPage } from 'next'
import MediaCard from '../components/cards'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router'
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
  const {status, data} = useSession();
  useEffect(() => {
    if( status === 'unauthenticated'){
      Router.replace('/auth/login');
    }
  } , [status]);
  if(status === 'authenticated'){
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
                  
                  <div className='p-5 '>
                    <div className=' text-black'>
                    <MediaCard
                        image={member.Avatar}
                        first={member.Firstname}
                        middle={member.Middlename}
                        last={member.Lastname}
                        address={member.Address}
                        phone={member.Contact}
                        Dob={day + '/' + month + '/' + year}
                        age={age}
                        gender={member.Gender}
                        marriage={member.Mstat} id={0}                      
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
  return <div>loading</div>
}

export default profiles

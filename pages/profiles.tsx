import type { NextPage } from 'next'
import MediaCard from '../components/cards'
import Navbar from '../components/Navbar'
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
      
      {/* modal */}
      <div>
        {/* <User/> */}
        <div className='flex flex-wrap'>
          {
            members.map((member : any) => {
              const birth = new Date(member.DoB);
              
              return (
                
                <div className='p-5 '>
                  <div className=' text-black'>
                    {/* <MediaCard
                      image="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4"
                      first={member.Firstname}
                      middle={member.Middlename}
                      last={member.Lastname}
                      address={member.Address}
                      phone={member.Contact}
                      Dob={birth.toDateString()}
                      age={0}  
                      gender={member.Gender}  

                    /> */}
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

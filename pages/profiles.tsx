import type { NextPage } from 'next'
import MediaCard from '../components/cards'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router'
const axios = require('axios').default;
import baseUrl from '../helper/baseUrl';

export async function getServerSideProps(context: any) {
  
  const res = await axios(`${baseUrl}/api/member`);
  const {member} = res.data;
  return {
    props: {
      members: member,
    }, 
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
                
              const payDate = new Date(member.paidDate);
              const payMonth = payDate.getMonth()+1;
              const payDay = payDate.getDate();
              const payYear = payDate.getFullYear();

              const dueDate = new Date(member.dueDate);
              const dueMonth = dueDate.getMonth()+1;
              const dueDay = dueDate.getDate();
              const dueYear = dueDate.getFullYear();

              const AdmissionDate = new Date(member.admissionDate);
              const admissionMonth = AdmissionDate.getMonth()+1;
              const admissionDay = AdmissionDate.getDate();
              const admissionYear = AdmissionDate.getFullYear();
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
                      id={member._id}
                      paid={payDay+'/'+payMonth+'/'+payYear}
                      due={dueDay+'/'+dueMonth+'/'+dueYear}
                      admission={admissionDay+'/'+admissionMonth+'/'+admissionYear}
                      cardNo={member.cardNumber}
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
  return( 
  <div className='flex justify-center text-4xl font-semibold p-8'>
    Loading...
  </div>
  )
}

export default profiles

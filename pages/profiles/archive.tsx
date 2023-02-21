import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Router from 'next/router'
const axios = require('axios').default;
import BackToTopoButton from '../../components/BackToTopButton'
import baseUrl from '../../helper/baseUrl';
import FilterCards from '../../components/FilterCards';
import ArchivalCard from '../../components/archival/ArchivalCards';

export async function getServerSideProps(context: any) {
  const res = await axios(`${baseUrl}/api/archive`);
  const {archive} = res.data;
  return {
    props: {
      archives: archive,
    }, 
  }
}

const profiles: NextPage = ({archives}:any) => {

  // fliter users
  const [results, setResults] = useState([]);
  const [test, setTest] = useState(archives);
  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()){
      return(
        setResults([]),
        setTest(archives)
      )
    };
    const filteredValue = archives.filter((archives: { Firstname: string; Lastname:string; Contact: Number; Gender:string;}) =>
      archives.Firstname.toLowerCase().startsWith(target.value.toLowerCase()) || 
      archives.Lastname.toLowerCase().startsWith(target.value.toLowerCase()) || 
      archives.Contact.toString().startsWith(target.value.toLowerCase()) ||
      archives.Gender.toLowerCase().toString().startsWith(target.value.toLowerCase())
    );
    setResults(filteredValue);
    setTest(filteredValue);
  };
  
  // session status
  const {status} = useSession();
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
        members={archives}
      />
      <main className='px-6'>
        
        
        {/* modal */}
        <div>
            <FilterCards results={results} onChange={handleChange} />
          {/* <User/> */}
          <div className='flex flex-wrap items-center justify-center'>
          {
            test.map((member : any) => {
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
                    <ArchivalCard
                      image={member.Avatar}
                      first={member.Firstname}
                      middle={member.Middlename}
                      last={member.Lastname}
                      address={member.Address}
                      phone={member.Contact}
                      Dob={day + '/' + month + '/' + year}
                      age={age}
                      gender={member.Gender}
                      marriage={member.Mstat}
                      id={member._id}
                      paid={payDay + '/' + payMonth + '/' + payYear}
                      due={dueDay + '/' + dueMonth + '/' + dueYear}
                      admission={admissionDay + '/' + admissionMonth + '/' + admissionYear}
                      cardNo={member.cardNumber} 
                      paidOn={member.paidOn}                    
                      />
                    
                  </div>
                </div>
                
              )
            })
          } 
          </div>
          <BackToTopoButton/>

        </div>
      </main>
      <div className='text-2xl font-bold text-center py-10'>
        <footer>
          <h2>
            
          </h2>
        </footer>
      </div>
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

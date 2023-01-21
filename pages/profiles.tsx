import type { NextPage } from 'next'
import MediaCard from '../components/cards'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Router from 'next/router'
const axios = require('axios').default;
import BackToTopoButton from '../components/BackToTopButton'
import baseUrl from '../helper/baseUrl';
import FilterCards from '../components/FilterCards';

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

  // fliter users
  const [results, setResults] = useState([]);
  const [test, setTest] = useState(members);
  const [male, setMale] = useState('male');
  const [female, setFemale] = useState('female');

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()){
      return(
        setResults([]),
        setTest(members)
      )
    };
    const filteredValue = members.filter((members: { Firstname: string; Lastname:string; Contact: Number; Gender:string;}) =>
      members.Firstname.toLowerCase().startsWith(target.value.toLowerCase()) || 
      members.Lastname.toLowerCase().startsWith(target.value.toLowerCase()) || 
      members.Contact.toString().startsWith(target.value.toLowerCase()) ||
      members.Gender.toLowerCase().toString().startsWith(target.value.toLowerCase())
    );
    setResults(filteredValue);
    setTest(filteredValue);
  };
  
  const sortMale = (e: React.ChangeEvent<any>) => {
    if(e.target.checked){
      setMale('male');
      const filteredValue = members.filter((members: { Gender:string;}) =>
        members.Gender.toLowerCase().toString().startsWith(male.toLowerCase())
      );
      console.log(male);
      setResults(filteredValue);
      setTest(filteredValue);
    }else{
      setResults([]);
      setTest(members);
    }
  }
  const sortFemale = (e: React.ChangeEvent<any>) => {
     if(e.target.checked){
      setFemale('female');
      const filteredValue = members.filter((members: { Gender:string;}) =>
        members.Gender.toLowerCase().toString().startsWith(female.toLowerCase())
      );
      console.log(female);
      setResults(filteredValue);
      setTest(filteredValue);
    }else{
      setResults([]);
      setTest(members);
    }
  }
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
        members={members}
      />
      
      <main className='px-6'>
        
        {/* modal */}
        <div>
            <FilterCards results={results} onChange={handleChange} />
            <div className='flex hidden justify-center capitalize'>
              <div className='px-4'>
                <input type="checkbox" id='ord' onChange={sortMale}/> male
              </div>
              <div className=' px-4'>
                <input type="checkbox" id='Sdate' onChange={sortFemale}/> female
              </div>
            </div>
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

export default profiles;

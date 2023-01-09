import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
const axios = require('axios').default;
import baseUrl from '../../helper/baseUrl';
import Link from 'next/link';
import { useState } from 'react';

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await axios(`${baseUrl}/api/member/${id}`);
  const res2 = await axios(`${baseUrl}/api/invoice`);
  const {member} = res.data;
  const {invoice} = res2.data;
  return {
    props: {
      members: member,
      invoices: invoice,
    },
  }
}
export default function EachMember({members, invoices}: any) {
  // console.log(members)

  const birth = new Date(members.DoB);
  const age = new Date().getFullYear() - birth.getFullYear();
  const month = birth.getMonth()+1;
  const day = birth.getDate();
  const year = birth.getFullYear();

  const payDate = new Date(members.paidDate);
  const payMonth = payDate.getMonth()+1;
  const payDay = payDate.getDate();
  const payYear = payDate.getFullYear();
  const paid = `${payDay}/${payMonth}/${payYear}`;

  const dueDate = new Date(members.dueDate);
  const dueMonth = dueDate.getMonth()+1;
  const dueDay = dueDate.getDate();
  const dueYear = dueDate.getFullYear();
  const due = `${dueDay}/${dueMonth}/${dueYear}`;

  const AdmissionDate = new Date(members.admissionDate);
  const admissionMonth = AdmissionDate.getMonth()+1;
  const admissionDay = AdmissionDate.getDate();
  const admissionYear = AdmissionDate.getFullYear();
  const admission = `${admissionDay}/${admissionMonth}/${admissionYear}`;
  
  const router = useRouter();
  const memberId = router.query.id;
  // console.log(memberId);
  const handleDelete = async() => {
    try{
        const deleteMember = await axios(`${baseUrl}/api/member/${memberId}`, {
          method: "DELETE",
        });
        router.push('/profiles');
    }catch(err){
      console.log(err);
    }
  }
  // filter
  
  const target = members.Firstname + ' ' + members.Middlename + ' ' + members.Lastname;
    console.log(target);
    const filteredValue = invoices.filter((invoices: { Name: string}) =>
      invoices.Name.toLowerCase().startsWith(target.toLowerCase()) 
    );
    // setResults(filteredValue);

  return (
    <>
    <Navbar 
      title="Profiles"
    />
    
    <div className='flex flex-col items-center justify-center align-center py-20'>
      <div className='md:flex  align-middle justify-between'>
                <div className='flex flex-col md:flex-row justify-center'>
                  
                    <div className='md:flex  justify-center mt-6 px-4 drop-shadow-2xl ml:ml-12'>
                        <div>
                          <div className='p-5 md:p-0 flex justify-center'>
                            <div className='md:hidden flex relative'>
                              <div className='absolute right-[-16rem] top-[-3rem] '>
                                <Button label="back"  onClick={() => history.back()} className="bg-gray-500 hover:bg-gray-400 px-3"/>
                              </div>
                            </div>
                            <img src={members.Avatar } 
                            className=" w-48 aspect-square object-cover
                            md:border-2 border-gray-400 rounded-xl  md:p-0" />
                          </div>
                          
                          <div className='hidden sm:inline p-3 mt-4 text-center'>
                            <div className='hidden sm:inline p-3 mt-4 text-center'>
                                <div className='hidden md:inline p-3 text-center'>
                                <h1 className='text-2xl font-semibold mt-5 text-center'>Plan Expires</h1>
                                <div className='pt-6 text-center'>
                                  <div>
                                    <a className='font-semibold'>Card No: <br /> </a>
                                    <a>{members.cardNumber}</a> 
                                  </div>
                                  <div>
                                    <a className='font-semibold'>Admission Date: <br /> </a>
                                    <a>{admission}</a> 
                                  </div>
                                  <div>
                                    <a className='font-semibold'>Last Paid: <br /> </a>
                                    <a>{paid}</a> 
                                  </div>
                                  <div>
                                    <a className='font-semibold'>Due Date:<br /></a>
                                    <a>{due}</a>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        
                        
                        <div className='text-center'>
                            <h2 id="parent-modal-title" className='md:hidden text-4xl font-bold capitalize'>
                                {members.Firstname} {members.Middlename} {members.Lastname} 
                            </h2>
                            <div className='md:hidden text-center  p-1 mt-1 text-start'>
                              
                              <div className='md:hidden  p-3 mt-4 text-center'>
                                <h1 className='text-2xl font-semibold text-center'>Plan Expires</h1>
                                  <div className=' p-3 text-center'>
                                  <div className='pt-0 text-center'>
                                    <div>
                                      <a className='font-semibold'>Card No: <br /> </a>
                                      <a>{members.cardNumber}</a> 
                                    </div>
                                    <div>
                                      <a className='font-semibold'>Admission Date: <br /> </a>
                                      <a>{admission}</a> 
                                    </div>
                                    <div>
                                      <a className='font-semibold'>Last Paid: <br /> </a>
                                      <a>{paid}</a> 
                                    </div>
                                    <div>
                                      <a className='font-semibold'>Due Date:<br /></a>
                                      <a>{due}</a>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <div className='text-center py-4 px-2'>
                                  <Button label="Delete" onClick={handleDelete} className="bg-red-500 hover:bg-red-400 px-3"/>
                                </div>
                                <div className='text-center py-4 px-2'>
                                  <Link href={`${memberId}/edit`}>
                                    <Button label="edit"  className="bg-yellow-500 hover:bg-yellow-400 px-3"/>
                                  </Link>
                                </div>
                                <div className='text-center py-4 px-2'>
                                  <Link href={`${memberId}/invoice`}>
                                    <Button label="invoice"  className="bg-green-500 hover:bg-green-400 px-3"/>
                                  </Link>
                                </div>
                                
                              </div>
                              
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-col text-center p-1 mx-10  py-6'>
                        <div className='hidden md:flex relative'>
                          <div className='absolute right-[-5rem] top-[-2rem] '>
                            <Button label="back" onClick={() => history.back()} className="bg-gray-500 hover:bg-gray-400 px-3"/>
                          </div>
                        </div>
                        
                        <div className='hidden md:flex '>
                            <h2 id="parent-modal-title" className=' text-6xl font-bold capitalize'>
                                {members.Firstname} {members.Lastname}
                            </h2>
                        </div>
                        <div className='p-2'>
                            <div className='mt-2'>
                                <span className='font-semibold text-lg'>Full Name:</span><br/>
                                <span className='ml-2 capitalize'>{members.Firstname} {members.Middlename} {members.Lastname}</span>
                            </div>

                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >Phone number:</span><br/>
                                <span className='ml-2'>{members.Contact}</span>
                            </div>
                            
                            <div className='mt-2'>
                                <span className='font-semibold text-lg'>Address:</span><br/>
                                <span className='ml-2'>{members.Address}</span>
                            </div>

                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >gender:</span> <br />
                                <span className='ml-2'>{members.Gender}</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >Date of birth:</span><br />
                                <span className='ml-2'>{day+'/'+month+'/'+year}</span>
                            </div>
                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >Age:</span><br />
                                <span className='ml-2'>{age}</span>
                            </div>
                            
                            <div className='mt-2'>
                                <span className='font-semibold text-lg' >marriage status:</span> <br />
                                <span className='ml-2'>{members.Mstat}</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
            
            <div className="md:flex hidden">
              <div className='text-center p-4'>
                  <Button label="Delete" onClick={handleDelete} className="bg-red-500 hover:bg-red-400 px-3"/>
              </div>
                              
              <div className='text-center p-4'>
                <Link href={`${memberId}/edit`}>
                  <Button label="edit"  className="bg-yellow-500 hover:bg-yellow-400 px-3"/>
                </Link>
              </div>
              <div className='text-center p-4'>
                <Link href={`${memberId}/invoice`}>
                  <Button label="invoice"  className="bg-green-500 hover:bg-green-400 px-3"/>
                </Link>
              </div>
                              
            </div>
            <div>
            {
              filteredValue.map((invoice : any) => {
                
                return (
                  <div className='capitalize p-5'>
                    <div className='flex text-black'>
                      <div className="flex px-4">
                          <span className="font-semibold ">number: </span> 
                          {invoice.invoiceNumber}
                      </div>
                      <div className="px-4">
                        <span className="font-semibold">Name: </span> 
                        {invoice.Name}
                      </div>
                      <div className="px-4">
                        <span className="font-semibold">Paid: </span> 
                        {invoice.paidDate}
                      </div>
                      <div className="px-4">
                        <span className="font-semibold">Due: </span> 
                        {invoice.dueDate}
                      </div>
                      <div className="px-4">
                        <span className="font-semibold">Fees: </span> 
                        {invoice.fees}
                      </div>
                      <div className='pl-4'>
                        <a href={`/invoices/${invoice._id}`} target="_blank">
                          <Button label='view' className='text-white bg-sky-500 hover:bg-sky-400 px-4 '/>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                )
              })
            }  
            </div>
    </div>
    </>
  )
}

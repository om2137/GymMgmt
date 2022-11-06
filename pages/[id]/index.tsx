import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
const axios = require('axios').default;
import baseUrl from '../../helper/baseUrl';
import Link from 'next/link';

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await axios(`${baseUrl}/api/member/${id}`);
  const {member} = res.data;
  return {
    props: {
      members: member,
    },
  }
}
export default function EachMember({members}: any) {
  console.log(members)

  const birth = new Date(members.DoB);
  const age = new Date().getFullYear() - birth.getFullYear();
  const month = birth.getMonth()+1;
  const day = birth.getDate();
  const year = birth.getFullYear();

  const payDate = new Date(members.paidDate);
  const payMonth = payDate.getMonth()+1;
  const payDay = payDate.getDate();
  const payYear = payDate.getFullYear();
  const paid = `${payMonth}/${payDay}/${payYear}`;

  const dueDate = new Date(members.dueDate);
  const dueMonth = dueDate.getMonth()+1;
  const dueDay = dueDate.getDate();
  const dueYear = dueDate.getFullYear();
  const due = `${dueMonth}/${dueDay}/${dueYear}`;

  const AdmissionDate = new Date(members.admissionDate);
  const admissionMonth = AdmissionDate.getMonth()+1;
  const admissionDay = AdmissionDate.getDate();
  const admissionYear = AdmissionDate.getFullYear();
  const admission = `${admissionMonth}/${admissionDay}/${admissionYear}`;
  
  const router = useRouter();
  const memberId = router.query.id;
  console.log(memberId);
  const handleDelete = async() => {
    try{
        const deleteMember = await axios(`${baseUrl}/api/member/${memberId}`, {
          method: "DELETE",
        });
        router.push('/');
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <>
    <Navbar 
      title="Profiles"
    />
    
    <div className='flex items-center justify-center align-center py-20'>
    <div className='md:flex  align-middle justify-between'>
                <div className='flex flex-col md:flex-row justify-center'>
                  
                    <div className='md:flex  justify-center mt-6 px-4 drop-shadow-2xl ml:ml-12'>
                        <div>
                          <div className='p-5 md:p-0 flex justify-center'>
                            <div className='md:hidden flex relative'>
                              <div className='absolute right-[-16rem] top-[-3rem] '>
                                <Link href={'/'}>
                                  <Button label="back" className="bg-gray-500 hover:bg-gray-400 px-3"/>
                                </Link>
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
                            <div className="flex">
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
                            
                          </div>
                        </div>
                        
                        
                        <div className='text-center '>
                            <h2 id="parent-modal-title" className='md:hidden text-4xl font-bold capitalize'>
                                {members.Firstname} {members.Middlename} {members.Lastname} 
                            </h2>
                            <div className='sm:hidden text-center  p-1 mt-1 text-start'>
                              
                              <div className='sm:hidden  p-3 mt-4 text-center'>
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
                    
                    <div className='flex flex-col text-center p-1 mx-10 '>
                        <div className='hidden md:flex relative'>
                          <div className='absolute right-[-5rem] top-[-2rem] '>
                            <Link href={'/'}>
                              <Button label="back" className="bg-gray-500 hover:bg-gray-400 px-3"/>
                            </Link>
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
    </div>
    </>
  )
}

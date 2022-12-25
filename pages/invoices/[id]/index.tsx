import "react-datepicker/dist/react-datepicker.css";
const axios = require('axios').default;
import Button from '../../../components/Button';
import baseUrl from '../../../helper/baseUrl';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router';
var converter = require('number-to-words');

export async function getServerSideProps(context: any) {
    const id = context.query.id;
    const res = await axios(`${baseUrl}/api/invoice/${id}`);
    const {invoice} = res.data;
    return {
      props: {
        invoices: invoice,
      },
    }
  }

export default function EachInvoice({invoices}: any) {
    const name = invoices.Name ;
    const gender = invoices.Gender;
    const fee = invoices.fees;
    const facility = invoices.facility;
    const paid = invoices.paidDate;
    const due = invoices.dueDate;
    const phone = invoices.Contact;
    const paidon = invoices.paidOn;
    const admFee =invoices.admFee;
    const total = (Number(fee)) + (Number(admFee)) ;

    const feesWord = converter.toWords(invoices.fees);

    const handlePrint = () => {
        window.print();
    }

    //delete function
    const router = useRouter();
    const invoiceId = router.query.id;
    const handleDelete = async() => {
        try{
            const deleteMember = await axios(`${baseUrl}/api/member/${invoiceId}`, {
              method: "DELETE",
            });
            router.push('/invoice');
        }catch(err){
          console.log(err);
        }
      }
    // Invoice form
    const inNumber = invoices.length;
    var paidDate = new Date(invoices.paidDate);
    console.log(paidDate);



    return(
        
        <main className=' flex flex-col items-center justify-center '>
            <div className="flex">
                <div className="p-4">
                    <Button label="print" onClick={handlePrint} className="bg-green-500 hover:bg-green-400 px-3"/>
                </div>
                <div className="p-4">
                    <Button label="Delete" onClick={handleDelete} className="bg-red-500 hover:bg-red-400 px-3"/>
                </div>
                <div className="p-4">
                    <Link href={'/invoice'}>
                        <Button label="back" className="bg-gray-500 hover:bg-gray-400 px-3"/>
                    </Link>
                </div>
                <div className='font-bold p-5 '>
                    {inNumber}
                </div>
                
            </div>
            
            
            {/* <div className='w-[45rem] border shadow-2xl border-black py-10  bg-white px-16 '>
                <div>
                    <div className='my-4'>
                        <div className="flex justify-center align-end">
                            <div className=''>
                               <img src="../../Gym_assets/mainlogo.jpg" alt="" className='w-[24rem] content-center m-4 '/> 
                            </div>
                            
                            <div className="font-semibold text-center text-xl m-auto">
                                <span className="font-semibold ">Recipt no: </span>
                                
                                <span className="font-normal ">{invoices.invoiceNumber}</span>
                            </div>
                            
                        </div>
                        
                        <div className="flex text-sm p-2">
                            <div className='w-2/3 '>
                                <h3 className=' text-center px-4'>
                                <span className="font-semibold">Address: </span>
                                Mohopada, Behind Shivsena shakha, Tal. Khalapur, Dist. Raigad.
                            </h3>
                            </div>
                            <div className='w-1/3 px-2'>
                                <h2 className='font-semibold pl-12' >
                                    M: 8888053456 <br/>
                                    M: 7350034888
                                </h2> 
                            </div>
                        
                        </div> 
                    </div>
                    
                    <h3 className="pl-6 text-center font-bold capitalize">
                        
                        <span className=' text-2xl '>Mr. {invoices.Name}</span>
                    </h3>

                    <div className='flex justify-center p-4 ml-8 '>
                        <span className="text-center font-bold capitalize">
                            A sum of Rupees  <br />
                            (in words)  
                        </span> 
                        <span className="text-center font-semibold capitalize p-2">
                            : {feesWord}  Rupees
                        </span>
                    </div>
                    
                    <div className='flex p-2'>
                        
                        <div className=' flex flex-col px-6 w-2/3 py-3'>
                            <div className="flex mx-auto">
                                <div className='flex flex-col px-4 '>
                                    <span className='font-bold'>
                                        Facility 
                                    </span>
                                    <span className='capitalize'>
                                        
                                        cardio
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Due Date  
                                    </span>
                                    <span>
                                        {invoices.dueDate}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Amount 
                                    </span>
                                    <span>
                                        {invoices.fees}
                                        
                                    </span>
                                </div>
                            </div>
                            
                            <div className='text-center font-bold p-4'>
                                <span>
                                    Total : {invoices.fees}
                                </span>
                            </div>
                        </div>
                        <div className='w-1/3 text-xl font-bold text-center'>
                            <span>
                                Sign <br /> 
                            </span>
                            <span className='flex justify-center'>
                                <img src="../../Gym_assets/signature.png" className='w-28 pt-2' alt="unable to load" />
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div> */}
            
            <div className='w-[45rem] ml:w-[66rem]  border-2 border-gray-400 py-10 rounded bg-white px-20 ml:px-28 ml:py-14' id='PDF'>
                <div>
                    <div className='my-4'>
                        <div className="flex justify-center align-end">
                            <div className=''>
                               <img src="../../Gym_assets/mainlogo2.webp" alt="" className='w-[25rem] ml:w-[37rem] content-center m-2 '/> 
                            </div>
                            
                            <div className="font-semibold text-center ml:text-2xl text-xl ml:pl-6 m-auto">
                                <div className='py-1 ml:py-2'>
                                    <span className="font-semibold ml:text-xl text-base ">Recipt no: </span>
                                    <span className="font-normal ">{invoices.invoiceNumber}</span>
                                </div>
                                <div className='py-1 ml:py-2'>
                                    <span className="font-semibold ml:text-xl text-base">Paid on: </span>
                                    <span className="font-normal ml:text-lg text-sm">{invoices.paidOn}</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="flex text-sm p-2 ml:text-xl">
                            <div className='w-2/3 '>
                                <h3 className=' text-center px-4'>
                                <span className="font-semibold">Address: </span>
                                Mohopada, Behind Shivsena shakha, Tal. Khalapur, Dist. Raigad.
                            </h3>
                            </div>
                            <div className='w-1/3 px-2'>
                                <h2 className='font-semibold pl-14 ml:pl-28' >
                                    M: 8888053456 <br/>
                                    M: 7350034888
                                </h2> 
                            </div>
                        
                        </div> 
                    </div>
                    
                    <h3 className="pl-6  text-center font-bold capitalize">
                        {
                            gender === "male" ? <div>
                                <span className=' text-2xl ml:text-4xl '>Mr. {name}</span>
                            </div> : 
                            <div>
                                <span className=' text-2xl ml:text-4xl '>Mrs. {name}</span>
                            </div>
                        }
                    </h3>
                    
                    <div className='flex item-center'>
                        <div className='flex justify-center ml:text-2xl p-2 ml:p-4 ml-8 '>
                            <span className="text-center font-bold capitalize">
                                A sum of Rupees  <br />
                                (in words)  
                            </span> 
                            <span className="text-center font-semibold capitalize p-2">
                                : {feesWord}  Rupees
                            </span>
                        </div>
                    </div>
                    
                    
                    <div className='flex p-2'>
                        
                        <div className=' flex flex-col w-[70rem] ml:text-xl'>
                            <div className="flex">
                                <div className='flex flex-col px-4 '>
                                    <span className='font-bold'>
                                        Facility 
                                    </span>
                                    <span className=' capitalize'>
                                        {facility}
                                        {/* cardio */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Start 
                                    </span>
                                    <span>
                                        {paid}
                                        {/* 23/2/2021 */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Due
                                    </span>
                                    <span>
                                        {due}
                                        {/* 23/2/2021 */}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4 '>
                                    <span  className='font-bold'>
                                        Adm.fee 
                                    </span>
                                    <span>
                                        {admFee}
                                    </span>
                                </div>
                                <div  className='flex flex-col px-4'>
                                    <span  className='font-bold'>
                                        Amount 
                                    </span>
                                    <span>
                                        {fee}
                                        {/* 500 */}
                                    </span>
                                </div>
                            </div>
                            
                            <div className='text-center font-bold p-4'>
                                <span>
                                    Total Amount : {total}
                                </span>
                            </div>
                        </div>
                        <div className='w-[35rem] text-xl ml:text-3xl font-bold text-center '>
                            <span>
                                Sign <br /> 
                            </span>
                            <span className='flex justify-center'>
                                <img src="../../Gym_assets/signature.svg" className='w-28 pt-2 lg:pt-4' alt="" />
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </main>
        
    )
    
}


import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
const axios = require('axios').default;
import baseUrl from '../../helper/baseUrl';
import InvoiceForm from '../../components/invoice/Invoice';

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await axios(`${baseUrl}/api/member/${id}`,);
  const res2 = await axios(`${baseUrl}/api/invoice/`);
  const {member} = res.data;
  const {invoice} = res2.data;
  return {
    props: {
      members: member,
      invoices: invoice,
    },
  }
 
}


export default function Invoice({members, invoices}: any) {

  const len = invoices.length;
  // console.log("No of invoices"+len);

  const first = members.Firstname ;
  const middle = members.Middlename ;
  const last = members.Lastname;
  const gender = members.Gender;
  const fee = members.fees;
  const paid = members.paidDate;
  const due = members.dueDate;
  const facility = members.facility;
  const phone = members.Contact;
  const paidon = members.paidOn;
  const admFee = members.admFee;

  const payDate = new Date(paid);
  const payMonth = payDate.getMonth()+1;
  const payDay = payDate.getDate();
  const payYear = payDate.getFullYear();

  const dueDate = new Date(due);
  const dueMonth = dueDate.getMonth()+1;
  const dueDay = dueDate.getDate();
  const dueYear = dueDate.getFullYear();

  const paidOnDate = new Date(paidon);
  const paidOnMonth = paidOnDate.getMonth()+1;
  const paidOnDay = paidOnDate.getDate();
  const paidOnYear = paidOnDate.getFullYear();
  
  // filter
  
  const target = members.Firstname + ' ' + members.Middlename + ' ' + members.Lastname;
    console.log(target);
    const filteredValue = invoices.filter((invoices: { Name: string}) =>
      invoices.Name.toLowerCase().startsWith(target.toLowerCase()) 
    );
  return (
    <>
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
    
    </>
  )
}

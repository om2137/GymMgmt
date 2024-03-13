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
  const PaymentType = members.PaymentType;

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
  
  return (
    <>
        <InvoiceForm
        first={first}
        middle={middle}
        last={last}
        gender={gender}
        fees={fee}
        paid={payDay + '/' + payMonth + '/' + payYear}
        due={dueDay + '/' + dueMonth + '/' + dueYear}
        facility={facility}
        inNumber={len}
        phone={phone}
        submitted={paidOnDay + '/' + paidOnMonth + '/' + paidOnYear} 
        admfee={admFee} 
        PaymentType={PaymentType}          
        />
    </>
  )
}

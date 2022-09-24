import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
const axios = require('axios').default;
import baseUrl from '../../helper/baseUrl';
import Link from 'next/link';
import InvoiceForm from '../../components/invoice/Invoice';

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
export default function Invoice({members}: any) {
  console.log(members)

  const first = members.Firstname ;
  const middle = members.Middlename ;
  const last = members.Lastname;
  const gender = members.Gender;
  const fee = members.fees;
  const paid = members.paidDate;
  const due = members.dueDate;
  const facility = members.facility;

  const payDate = new Date(paid);
  const payMonth = payDate.getMonth()+1;
  const payDay = payDate.getDate();
  const payYear = payDate.getFullYear();

  const dueDate = new Date(due);
  const dueMonth = dueDate.getMonth()+1;
  const dueDay = dueDate.getDate();
  const dueYear = dueDate.getFullYear();

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
        <InvoiceForm   
            first={first}
            middle={middle}
            last={last}
            gender={gender}
            fees={fee}
            paid={payDay + '/' + payMonth + '/' + payYear}
            due={dueDay + '/' + dueMonth + '/' + dueYear}
            facility={facility}
        />
    
    </>
  )
}

import Link from "next/link"
const axios = require('axios').default;

export async function getStaticProps(context) {
  
    const res = await axios('http://localhost:3000/api/member');
    const {member} = res.data;
    return {
      props: {
        members: member,
      }, // will be passed to the page component as props
    }
}

export default function EachMember() {
  return (
    <div>index</div>
  )
}

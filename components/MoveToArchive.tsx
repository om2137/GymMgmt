import {useEffect, useState} from 'react'
const axios = require('axios').default;
import Router from 'next/router';
import baseUrl from '../helper/baseUrl';

interface props{
  id:number;
}

export default function MoveToArchive({id}:props) {

  const handleDelete = async() => {
    try{
        const deleteMember = await axios( `${baseUrl}/api/member/${id}` , {
          method: "DELETE",
        });
        Router.push('/')
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-400 px-3 text-white uppercase py-2 rounded font-normal text-sm select-none transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        onClick={handleDelete}
      >
        Move to Archive
      </button>
    </>
    
  )
}

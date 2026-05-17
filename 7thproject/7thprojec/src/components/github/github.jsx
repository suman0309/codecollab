import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'


function github() {

const data=useLoaderData()

//     const [data,setData]=useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/suman0309')
//     .then(Response=>Response.json())
//     .then(data=>{
//         console.log(data)
//         setData(data)
//     })
// },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white'>Github Followers:{data.followers}
   <img src={data.avtar_url} alt='git pic' width={300}></img>





       
 </div>
  )
}

export default github


export const gitHubIfoLoader=async()=>{
   const Response=await fetch('https://api.github.com/users/suman0309')
   return Response.json()
}
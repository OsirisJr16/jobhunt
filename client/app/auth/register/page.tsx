"use client"
import React from 'react'
import { useRouter , useSearchParams } from 'next/navigation'
const page = () => {
  const router = useRouter() ; 
  const role = useSearchParams().get("role") ; 
  
  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'> 
       Register page {role}
      </div>
    </div>
  )
}

export default page


import MainLayout from '@/components/templates/MainLayout';
import Kyc from '@/components/pages/Kyc';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
     <Kyc/>
    </MainLayout>
  )
}

export default page;

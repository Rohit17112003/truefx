import MainLayout from '@/components/templates/MainLayout';
import Deposit from '@/components/pages/Deposit';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
     <Deposit/>
    </MainLayout>
  )
}

export default page;

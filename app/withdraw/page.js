import MainLayout from '@/components/templates/MainLayout';
import Withdraw from '@/components/pages/Withdraw';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Withdraw/>
    </MainLayout>
  )
}

export default page;

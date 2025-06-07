import React from 'react'
import DepositForm from '@/components/pages/DepositForm';
import MainLayout from '@/components/templates/MainLayout';

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <DepositForm/>
    </MainLayout>
  )
}

export default page;

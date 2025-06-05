import React from 'react'
import AddFundForm from '@/components/pages/AddFundForm';
import MainLayout from '@/components/templates/MainLayout';

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddFundForm/>
    </MainLayout>
  )
}

export default page;

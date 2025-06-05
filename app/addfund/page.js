import MainLayout from '@/components/templates/MainLayout';
import AddFund from '@/components/pages/AddFund';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
     <AddFund/>
    </MainLayout>
  )
}

export default page;

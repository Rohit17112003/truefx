import MainLayout from '@/components/templates/MainLayout';
import Investment from '@/components/pages/Investment';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Investment/>
    </MainLayout>
  )
}

export default page;

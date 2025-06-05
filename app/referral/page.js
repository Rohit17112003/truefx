import MainLayout from '@/components/templates/MainLayout';
import Referral from '@/components/pages/Referral';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Referral/>
    </MainLayout>
  )
}

export default page;

import MainLayout from '@/components/templates/MainLayout';
import Profile from '@/components/pages/Profile';
import React from 'react'

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Profile/>
    </MainLayout>
  )
}

export default page;

"use client";
import React from 'react'
import { useSideContext } from '@/app/components/context/side-context'
const page = () => {
  const {backButtonvisible,setBackButtonvisible}=useSideContext();
  setBackButtonvisible(false);
  return (
    <div>contact us</div>
  )
}

export default page
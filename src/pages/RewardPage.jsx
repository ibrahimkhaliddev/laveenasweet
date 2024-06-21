import FooterMenu from "../components/FooterMenu"
import { useFrappeAuth, useFrappeGetDoc } from 'frappe-react-sdk';
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "@untitled-ui/icons-react";
import silverCard from '../img/silvercard-reward.svg'
import coin from '../img/coin2.svg'

const RewardPage = () => {
  const { currentUser, updateCurrentUser } = useFrappeAuth();

  const { data, isLoading, error } = useFrappeGetDoc('User', currentUser, {
    filters: ['name', 'full_name', 'user_image']
  })

  useEffect(() => {
      updateCurrentUser()
  }, [updateCurrentUser])

  return (
    <>
      <header  className="p-5 bg-[#BBE5BB] w-full">
        {data && (
          <div className='flex items-center'>
            <img src={data.user_image} width="64" className='rounded-[99px]'/>
            <div className='ml-3 flex flex-col'>
              <span className='font-bold'>{data.full_name}</span>
              <Link className='flex items-center gap-x-1' to='/edit-profile'>
                แก้ไขโปรไฟล์ของฉัน
                <ChevronRight color="#333333" />
              </Link>
            </div>
          </div>
        )}
        {isLoading || error && (
          <div className='flex items-center'>
            <svg className="h-[64px] w-[64px] bg-white text-gray-300 rounded-[99px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className='ml-3 flex flex-col'>
              <span className='font-bold'>Loading...</span>
              <Link className='flex items-center gap-x-1'>
                แก้ไขโปรไฟล์ของฉัน
                <ChevronRight color="#333333" />
              </Link>
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-between items-end">
          <div>
            <img src={silverCard} />
          </div>
          <div className="text-white text-right">
            <h2 className="flex gap-x-[5px] items-center justify-end">
              <img src={coin} />
              คอยน์
            </h2>
            <h1 className="text-[39px]">24</h1>
            <h3 className="text-[10px]">หมดอายุ 31 ม.ค. 2024</h3>
          </div>
        </div>
      </header>
      <FooterMenu active={2}/>
    </>
  )
}

export default RewardPage
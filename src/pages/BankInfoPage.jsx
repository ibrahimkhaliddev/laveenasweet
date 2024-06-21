import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import TitleHeader from '../components/TitleHeader';
import success from '../img/success.svg'
import kasikorn from '../img/kasikorn.svg'
import qrcode2 from '../img/qrcode2.svg'
import mascot from '../img/mascot.svg'
import redeemedMark from '../img/redeemed-mark.svg'
import { Edit05, Copy01, Maximize01, ArrowUpRight } from '@untitled-ui/icons-react';
import { useFrappeGetCall } from 'frappe-react-sdk';
const BankInfoPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <TitleHeader link='/my-order' title='ข้อมูลการแลกของรางวัล'/>
      <main className='p-5 mt-[53px]'>
        <section className='text-center mt-5'>
          <img src={redeemedMark} className='m-auto flex' style={{animation:"imgAnim 1s"}}/>
          <img src={mascot} className='m-auto flex mt-[-100px] opacity-0' style={{animation:"imgAnim 1s forwards, catAnim 3s linear",animationDelay:"1s"}}/>
          <p className='mt-8 text-[#424242] text-sm'>คุณได้ทำการ แลกของรางวัล <br/>เรียบร้อยแล้ว กรุณารับของรางวัล<br/> ตามสาขาที่คุณกำหนด</p>

          <p className='mt-8 text-xs text-[#474747]'>คุณสามารถไปที่ <Link to='/reward-history' className='text-[#F0592A]'>ประวัติการใช้คะแนน</Link><br/>ของคุณเพื่อตรวจสอบประวัติและการใช้งานคะแนน</p>
        </section>

        <hr className='my-[35px] border-[#E3E3E3]'/>

        <Link to='/my-order' className='w-full text-white rounded-[9px] p-3 text-center block' style={{background:"linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)"}}>รายละเอียดคำสั่งซื้อ</Link>
      </main>
    </>
  )
}

export default BankInfoPage
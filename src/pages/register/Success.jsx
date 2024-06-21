import { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import thaiflag from '../../img/thai-flag.svg'
import germanflag from '../../img/german-flag.svg'
import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'
import successIcon from '../../img/success.svg'

const Success = () => {
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px]'>
        <Link to="/signup">
          <ArrowLeft />
        </Link>
        เปลี่ยนเบอร์โทร
      </header>
      <main className='px-5 py-[46px]'>
        <img src={successIcon} />
        <h1 className='text-[30px] font-bold mt-5'>ระบบเปลี่ยนเบอร์<br/>ใหม่สำเร็จ 👋</h1>
        <p className='mt-4'>คุณได้ทำการสมัครสมาชิกเรียบร้อย และคุณสามารถ<br/>เริ่มต้นการใช้งานได้ทันที</p>
      </main>
      <footer className='flex px-5 gap-x-3'>
        <Link to="/" className='w-full bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'>กลับไปหน้าเดิม</Link>
      </footer>
    </>
  )
}

export default Success
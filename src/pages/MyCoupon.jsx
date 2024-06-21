import { ArrowLeft, MarkerPin01, AlertTriangle } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import TitleHeader from '../components/TitleHeader'

const MyCoupon = () => {
  const [canUseCoupon, setCanUseCoupon] = useState(true)
  const [usedCoupon, setUsedCoupon] = useState(false);

  const switchToUsedCoupon = () => {
    setCanUseCoupon(false);
    setUsedCoupon(true);
  }

  const switchToCanUseCoupon = () => {
    setCanUseCoupon(true);
    setUsedCoupon(false);
  }

  const CouponSheet = ({proTitle, code, desc, date, used}) => {
    return (
      <>
        <div className='border border-[#D6D6D6] rounded-[8px] flex bg-[#FBFBFB] relative'>
          <div className='p-6 m-auto w-[30%]'>
            <h2 className='text-[23px] text-[#01A449] text-center font-bold'>{proTitle}</h2>
          </div>
          <div className='flex flex-col align-between my-6 px-6 border-l-[2px] border-l-[#6666633] border-l-dashed w-[70%]'>
            <div>
              <h2 className='text-md text-[#333333] font-bold'>โค้ด: {code}</h2>
              <p className='text-[#424242] text-xs font-medium'>{desc}</p>
            </div>
            <div className='flex justify-between mt-6'>
              <p className='text-[#989898] text-xs'>ใช้ได้ถึง {date}</p>
              <p className={`text-xs font-bold ${used === usedCoupon ? "text-[#D10000]" : "text-[#5B6CFFCF]"}`}>{used === usedCoupon ? "ใช้แล้ว" : "ใช้ส่วนลด"}</p>
            </div>
          </div>

          <div className='absolute w-[20px] h-[40px] border border-[#D6D6D6] bg-white rounded-r-[99px] left-[-1px] border-l-0 top-[35%]'></div>
          <div className='absolute w-[20px] h-[40px] border border-[#D6D6D6] bg-white rounded-l-[99px] right-[-1px] border-r-0 top-[35%]'></div>
        </div>
      </>
    )
  }
  return (
    <>
      <TitleHeader title="คูปองของฉัน" link="/my-account" />
      <main className='p-5 mt-[53px]'>
        <div className='block w-[90%] m-auto'>
          <button className='my-2 w-1/2' onClick={switchToCanUseCoupon}>
            <span className='p-4 inline-block'>คูปองที่ใช้ได้</span>
            {canUseCoupon && (
              <div className="w-full h-[2px] bg-black border-anim"></div>
            )}
          </button>
          <button className='my-2 w-1/2' onClick={switchToUsedCoupon}>
            <span className='p-4 inline-block'>คูปองที่ใช้ไปแล้ว</span>
            {usedCoupon && (
              <div className="w-full h-[2px] bg-black border-anim"></div>
            )}
          </button>
        </div>

        {canUseCoupon && (
          <div className='flex flex-col gap-y-5 mt-6'>
            <CouponSheet proTitle="ลด 2000" code="PAY25TH" desc="เมื่อช้อป ฿ 1,499.00 ลดถึง ฿ 950" date="14 July 2023" used={canUseCoupon}/>
            <CouponSheet proTitle="ลด 2000" code="PAY25TH" desc="เมื่อช้อป ฿ 1,499.00 ลดถึง ฿ 950" date="14 July 2023" used={canUseCoupon}/>
          </div>
        )}

        {usedCoupon && (
          <div className='flex flex-col gap-y-5 mt-6'>
            <CouponSheet proTitle="ลด 2000" code="PAY25TH" desc="เมื่อช้อป ฿ 1,499.00 ลดถึง ฿ 950" date="14 July 2023" used={usedCoupon}/>
            <CouponSheet proTitle="ลด 2000" code="PAY25TH" desc="เมื่อช้อป ฿ 1,499.00 ลดถึง ฿ 950" date="14 July 2023" used={usedCoupon}/>
          </div>
        )}
      </main>
    </>
  )
}

export default MyCoupon
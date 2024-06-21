import React, { useState } from 'react'
import giftIcon from "../img/giftIcon.svg"
import TitleHeader from '../components/TitleHeader'
import bannerImgBlog from '../img/banner-blog-single.png'
import { useFrappeGetDoc } from 'frappe-react-sdk';

function SingleBlog() {

    const [rewardReddem, setRewardRedeem] = useState(false);

    const hanndleCouponClick = () => {
        setRewardRedeem(true)
    }

    const { data } = useFrappeGetDoc('Detail of Blog', {
        fields: ['name', 'description']
    })

    return (
        <>
            <TitleHeader link={'/'} title={'รายละเอียด'} />
            <img className={`mt-[53px] ${rewardReddem == true ? 'opacity-[50%]' : 'opacity-[100%]'} `} src={bannerImgBlog} alt="" />
            <div className="w-[354px] relative mx-auto z-10 bg-white p-4 rounded-[10px] -mt-[18px]" style={{ boxShadow: "0px 4px 20px 0px #2323231A", }}>
                <div className='text-center'>
                    <button className='bg-[#FDF0E4] w-[82px] h-[19px] rounded-full px-[10px] py-[4px] text-[#F0592A] font-bold text-[10px] leading-[11.1px]' style={{ fontFamily: "Eventpop" }} >กิจกรรมพิเศษ</button>
                    <p className='font-bold text-sm leading-[17px] text-[#111111] mt-2' style={{ fontFamily: "Eventpop" }}>ของขวัญแสนพิเศษในวันที่แสนพิเศษ<br />รับทันที ส่วนลด 50 % สำหรับเดือนเกิด</p>
                </div>
                <p className='mt-5 text-[#8A8A8A] font-normal text-xs leading-[17.4px] text-center'>ระยะเวลา</p>
                <p className='text-[#F0592A] font-bold text-sm leading-[24px] mt-1 text-center'>22 ม.ค. 2022 - 22 ม.ค. 2023</p>
            </div>

            <div className='px-[18px] pt-[30px]'>
                <h4 className='font-bold text-[#424242] text-sm leading-[23.2px]' style={{ fontFamily: "Eventpop" }}>รายละเอียด</h4>
                {data && (
                <div className="pt-2">
                  {/* <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>{data.title}</h2> */}
                  <div className='mt-2 info-desc' dangerouslySetInnerHTML={{__html:data.description}}/>
                </div>
              )}
            </div>

        </>
    )
}

export default SingleBlog

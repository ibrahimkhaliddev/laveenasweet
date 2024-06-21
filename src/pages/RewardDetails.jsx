import React from 'react'
import TitleHeader from '../components/TitleHeader'
import bannerBagProduct from "../img/banner-product.png"
import giftIcon from "../img/giftIcon.svg"
import { useState } from 'react'

function RewardDetails() {

    const [rewardReddem, setRewardRedeem] = useState(false);

    const hanndleCouponClick = () => {
        setRewardRedeem(true)
    }

    return (
        <>
            <TitleHeader link={''} title={'รายละเอียดของรางวัล'} />
            <img className={`mt-[53px] ${rewardReddem == true ? 'opacity-[50%]':'opacity-[100%]'} `} src={bannerBagProduct} alt="" />
            <div className="w-[354px] relative mx-auto z-10 bg-white p-4 rounded-[10px] -mt-[18px]" style={{ boxShadow: "0px 4px 20px 0px #EBE9EA", }}>
                <div className='text-center'>
                    <button className='bg-[#FDF0E4] w-[66px] h-[19px] rounded-full px-[10px] py-[4px] text-[#F0592A] font-bold text-[10px] leading-[11.1px]' style={{ fontFamily: "Eventpop" }} >ใช้หน้าร้าน</button>
                    {rewardReddem && (
                        <div className='mt-[5px]'>
                            <button className='bg-[#F0F0F0] h-[19px] rounded-full px-[10px] py-[4px] text-[#8A8A8A] font-bold text-[10px] leading-[11.1px]' style={{ fontFamily: "Eventpop" }} >แลกของรางวัลแล้ว</button>
                        </div>
                    )}
                    <p className='font-bold text-sm leading-[17px] text-[#111111] mt-2' style={{ fontFamily: "Eventpop" }}>แลกของรางวัล<br />กระเป๋าเก็บความเย็น</p>
                </div>
                <div className='w-[224px] flex justify-between mt-[22px] mx-auto'>
                    <div>
                        <p className='text-[#00000061] font-normal text-xs leading-[17.4px]' style={{ fontFamily: "Eventpop" }}>คะแนนที่ใช้</p>
                        <p className='font-bold text-sm text-[#F0592A] leading-[24px]' style={{ fontFamily: "Eventpop" }}>40 คะแนน</p>
                        <p className='text-[#00000061] font-normal text-[10px] leading-[14.5px]' style={{ fontFamily: "Eventpop" }}>มูลค่า 350 บาท</p>
                    </div>
                    <hr className='w-[1px] h-[63px] border-r border-[#0000001A]' />
                    <div>
                        <p className='text-[#00000061] font-normal text-xs leading-[17.4px]' style={{ fontFamily: "Eventpop" }}>สามารถใช้ได้ถึง</p>
                        <p className='font-bold text-sm text-[#F0592A] leading-[24px]' style={{ fontFamily: "Eventpop" }}>22 ม.ค. 2022</p>
                    </div>
                </div>
            </div>

            <div className='px-[18px] pt-[30px]'>
                <h4 className='font-bold text-[#424242] text-sm leading-[23.2px]' style={{ fontFamily: "Eventpop" }}>รายละเอียด</h4>
                <ul className='mt-[9px] pr-[18px] pl-[22px] w-[294px]'>
                    <li className='text-[#424242] font-normal text-xs list-disc leading-[18px]' style={{ fontFamily: "Eventpop" }}>สมาชิกหลักเท่านั้นที่มีสิทธิใช้คะแนนเพื่อแลกรับ ของรางวัล</li>
                    <li className='text-[#424242] font-normal text-xs list-disc leading-[18px]' style={{ fontFamily: "Eventpop" }}>ขอสงวนสิทธิ์งดรับการแก้ไขเปลี่ยนแปลงใด หลังจากที่สมาชิกหลักแจ้งความประสงค์ขอแลก คะแนนสะสมไปยังบริษัทฯแล้ว</li>
                    <li className='text-[#424242] font-normal text-xs list-disc leading-[18px]' style={{ fontFamily: "Eventpop" }}>บริษัทฯขอแจ้งเปลี่ยนแปลงเงื่อนไขการแลกของรางวัล โดยมิได้แจ้งให้ทราบก่อนล่วงหน้า</li>
                </ul>
            </div>

            <div className='mt-[140px] mb-3'>
                <button onClick={hanndleCouponClick}
                    className={`${rewardReddem == false ? 'bg-[#111111]' : 'bg-[#D7D7D7]'} mx-auto w-[354px] h-[48px] py-3 rounded-[9px] text-[#FFFFFF] font-bold text-base flex items-center justify-center`} style={{ fontFamily: "Eventpop", background: "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)",}}> แลกของรางวัล <img className='ml-[5px]' src={giftIcon} alt="" /> </button>
            </div>
        </>
    )

}

export default RewardDetails
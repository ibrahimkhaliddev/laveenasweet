import React from 'react'
import TitleHeader from '../components/TitleHeader'
import theLogoImage from "../img/theLogoImage.png"
import giftIcon from "../img/goftIconOrange.svg"
import coinImage from "../img/coinImage.svg"
import bookClosed from "../img/book-closed.svg"
import iconRightHead from "../img/iconRightHead.svg"
import rewardHomeBag from "../img/rewardHomeBag.png"
import rewardHomeMogulo from "../img/rewardHomeMogulo.png"
import rewardHomeVouchar from "../img/rewardHomeVouchar.png"
import arrowRightSolid from "../img/arrow-right-solid 2.svg"
import orangeStar from "../img/orangeStar.svg"
import greyBg from "../img/greyBg.png"

function RewardHomePage() {

    const allPrizes = [
        {
            title: "กระเป๋าเก็บความเย็น",
            rating: "40 คะแนน",
            img: rewardHomeBag,
        },
        {
            title: "กระเป๋าเก็บความเย็น",
            rating: "40 คะแนน",
            img: rewardHomeMogulo,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: rewardHomeVouchar,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: rewardHomeVouchar,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: rewardHomeVouchar,
        },
    ];

    const allRewards = [
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
    ];

    const allcoupons = [
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
        {
            title: "หมอนอิง Brand Modulo",
            rating: "40 คะแนน",
            img: greyBg,
        },
    ]

    return (
        <>
            <div className='flex justify-between items-end mt-10 px-[18px]'>
                <div className='flex items-center'>
                    <div><img className='w-[64px] h-[64px]' src={theLogoImage} alt="" /></div>
                    <div><p className='font-bold text-[#111111] text-lg leading-[26.1px] ml-3'>ศิริรัตณ์  เจริญศิริ</p></div>
                </div>
                <div className='text-center'>
                    <div className='flex items-center'><img className='w-[16px] h-[16px]' src={coinImage} alt="" /> <p className='font-bold text-xs leading-[12px] text-[#333333] ml-[5px]'>คะแนน</p></div>
                    <p className='text-[#333333] font-semibold text-[39px] leading-[45px] mt-1 '>24</p>
                </div>
            </div>

            <div className='theMainBannerReardHome mt-[34px] mx-auto p-3 flex items-end'>
                <div className='flex justify-between items-end'>
                    <div>
                        <p className='inter text-white font-semibold text-[32px] leading-[38.73px]'>Sliver</p>
                        <p className='inter text-white font-medium text-[14px] leading-[16.94px]'>อีก 11 คะแนนเลื่อนเป็น Gold</p>
                    </div>
                    <div className='w-[165px]'>
                        <button className='bg-white w-[140px] h-[40px] rounded-full flex items-center justify-center' style={{ boxShadow: "0px 3px 15px 0px #7777771A" }}>
                            <img src={giftIcon} alt="" />
                            <p className='font-normal text-sm leading-[21px] text-[#F0592A] ml-1'>รางวัลของฉัน</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center my-[32px] w-[354px] h-[54px] rounded-lg mx-auto px-5' style={{ background: "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)" }}>
                <div className='flex items-center'>
                    <img className='w-[17px] h-[17px]' src={bookClosed} alt="" />
                    <p className='font-normal font-sm leading-[20px] ml-2 text-white'>วิธีเก็บคะแนน</p>
                </div>
                <div>
                    <img src={iconRightHead} className='w-[6px] h-[10px]' alt="" />
                </div>
            </div>

            <div className='mt-[32px]'>
                <div className='px-[18px] flex items-center'>
                    <p>ของรางวัลทั้งหมด</p>
                    <img src={arrowRightSolid} className='ml-2 h-[11px] w-[13px]' alt="" />
                </div>
                <div className='mt-3 flex overflow-x-scroll space-x-5'>
                    <div></div>
                    {allPrizes.map((prize) => 
                        <div className='min-w-[200px]'>
                            <img src={prize.img} className='w-[200px] rounded-[10px]' alt="" />
                            <p className='mt-[10px] font-bold text-xs text-[#111111] leading-[13.32px]'>{prize.title}</p>
                            <div className='flex items-center mt-1'>
                                <img src={orangeStar} alt="" />
                                <p className='inter font-semibold text-sm text-[#F0592A] ml-1'>{prize.rating}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-[32px]'>
                <div className='px-[18px] flex items-center'>
                    <p>ของรางวัลทั้งหมด</p>
                    <img src={arrowRightSolid} className='ml-2 h-[11px] w-[13px]' alt="" />
                </div>
                <div className='mt-3 flex overflow-x-scroll space-x-5'>
                    <div></div>
                    {allRewards.map((prize) => 
                        <div className='min-w-[200px]'>
                            <img src={prize.img} className='w-[200px] rounded-[10px]' alt="" />
                            <p className='mt-[10px] font-bold text-xs text-[#111111] leading-[13.32px]'>{prize.title}</p>
                            <div className='flex items-center mt-1'>
                                <img src={orangeStar} alt="" />
                                <p className='inter font-semibold text-sm text-[#F0592A] ml-1'>{prize.rating}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-[32px]'>
                <div className='px-[18px] flex items-center'>
                    <p>ของรางวัลทั้งหมด</p>
                    <img src={arrowRightSolid} className='ml-2 h-[11px] w-[13px]' alt="" />
                </div>
                <div className='mt-3 flex overflow-x-scroll space-x-5'>
                    <div></div>
                    {allcoupons.map((prize) => 
                        <div className='min-w-[200px]'>
                            <img src={prize.img} className='w-[200px] rounded-[10px]' alt="" />
                            <p className='mt-[10px] font-bold text-xs text-[#111111] leading-[13.32px]'>{prize.title}</p>
                            <div className='flex items-center mt-1'>
                                <img src={orangeStar} alt="" />
                                <p className='inter font-semibold text-sm text-[#F0592A] ml-1'>{prize.rating}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-[60px]'>
                <p className='inter font-semibold font-base text-[#333333] px-[18px]'>Celebrate Mid Year Festival</p>
                <div className='px-[18px] flex items-center mt-2'>
                    <p>ของรางวัลทั้งหมด</p>
                    <img src={arrowRightSolid} className='ml-2 h-[11px] w-[13px]' alt="" />
                </div>
                <div className='mt-3 flex overflow-x-scroll space-x-5'>
                    <div></div>
                    {allcoupons.map((prize) => 
                        <div className='min-w-[200px]'>
                            <img src={prize.img} className='w-[200px] rounded-[10px]' alt="" />
                            <p className='mt-[10px] font-bold text-xs text-[#111111] leading-[13.32px]'>{prize.title}</p>
                            <div className='flex items-center mt-1'>
                                <img src={orangeStar} alt="" />
                                <p className='inter font-semibold text-sm text-[#F0592A] ml-1'>{prize.rating}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default RewardHomePage

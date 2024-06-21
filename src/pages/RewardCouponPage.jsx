import React, { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import couponImaage1 from '../img/couponImage1.png'
import couponImaage2 from '../img/couponImage2.png'
import couponImaage3 from '../img/couponImage3.png'
import couponImaage4 from '../img/couponImage4.png'

function RewardCouponPage() {
    const [currentTab, setCurrentTab] = useState('รางวัลของฉัน');
    const tabData = [
        {
            title: 'ส่วนลด 5 % สินค้าที่ร่วมรายการ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'คูปองออนไลน์',
            button: 'ใช้เลย',
            image: couponImaage1,
        },
        {
            title: 'แลกของรางวัลกระติกน้ำเก็บความเย็น',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'ใช้หน้าร้าน',
            button: 'ใช้เลย',
            image: couponImaage2,
        },
        {
            title: 'ค่าขนส่งสินค้าฟรีไม่มีขั้นต่ำ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'คูปองออนไลน์',
            button: 'ใช้เลย',
            image: couponImaage3,
        },
        {
            title: 'ส่วนลด 30 % ภายในเดือนเกิด',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'คูปองออนไลน์',
            button: 'ใช้เลย',
            image: couponImaage1,
        },
        {
            title: 'ซื้อ 1 แถม 1 เฉพาะสินค้าที่ร่วมรายการ ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'ใช้หน้าร้าน',
            button: 'ใช้เลย',
            image: couponImaage4,
        },
        {
            title: 'ส่วนลด 5 % สินค้าที่ร่วมรายการ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'ได้รับรางวัลแล้ว',
            button: 'ใช้เลย',
            image: couponImaage1,
        },
    ]
    const tabDataRedeemed = [
        {
            title: 'ส่วนลด 5 % สินค้าที่ร่วมรายการ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'คูปองออนไลน์',
            button: 'ใช้เลย',
            image: couponImaage1,
        },
        {
            title: 'แลกของรางวัลกระติกน้ำเก็บความเย็น',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'ใช้หน้าร้าน',
            button: 'ใช้เลย',
            image: couponImaage2,
        },
        {
            title: 'ค่าขนส่งสินค้าฟรีไม่มีขั้นต่ำ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'คูปองออนไลน์',
            button: 'ใช้เลย',
            image: couponImaage3,
        },
        {
            title: 'ส่วนลด 30 % ภายในเดือนเกิด',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'คูปองออนไลน์',
            button: 'ใช้เลย',
            image: couponImaage1,
        },
        {
            title: 'ซื้อ 1 แถม 1 เฉพาะสินค้าที่ร่วมรายการ ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'ใช้หน้าร้าน',
            button: 'ใช้เลย',
            image: couponImaage4,
        },
        {
            title: 'ส่วนลด 5 % สินค้าที่ร่วมรายการ',
            description: 'ใช้ได้จนถึง 30 ส.ค. 2023',
            tag: 'ได้รับรางวัลแล้ว',
            button: 'ใช้เลย',
            image: couponImaage1,
        },
    ]
    const tabs = [
        { name: 'รางวัลของฉัน', content: tabData },
        { name: 'หมดอายุ/ใช้แล้ว', content: tabDataRedeemed },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            <TitleHeader link={''} title={'รางวัลของฉัน'} />
            <div>
                <div className="">
                    <nav className="isolate flex divide-x shadow-[none] shadow border-b" aria-label="Tabs">
                        {tabs.map((tab, tabIdx) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    currentTab === tab.name ? 'text-gray-900' : 'text-[#8A8A8A]',
                                    tabIdx === 0 ? '' : '',
                                    tabIdx === tabs.length - 1 ? '' : '',
                                    'group relative min-w-0 flex-1 overflow-hidden bg-white border-none py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                                )}
                                aria-current={currentTab === tab.name ? 'page' : undefined}
                                onClick={() => setCurrentTab(tab.name)}
                            >
                                <span>{tab.name}</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        currentTab === tab.name ? 'bg-[#111111]' : 'bg-transparent',
                                        'absolute inset-x-0 bottom-0 h-0.5 text-[#111111]'
                                    )}
                                />
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="mt-4">
                    {tabs.map((tab) => (
                        <div key={tab.name} className={currentTab === tab.name ? 'space-y-[18px]' : 'hidden'}>
                            {tab.name == 'รางวัลของฉัน' ?
                                tab.content.map((data, index) => (
                                    <div className="border-b border-[#E3E3E3]" key={index}>
                                        <div className="flex justify-between items-end pb-[18px] px-[18px]">
                                            <div className="flex items-center">
                                                <div><img src={data.image} className="w-[85px] h-[65px]" alt="" /></div>
                                                <div className="ml-[10px]">
                                                    <button className="bg-[#E9F6ED] h-[19px] rounded-full px-[10px] py-[4px] text-[#00B14F] font-bold text-[10px] leading-[11.1px]" style={{ fontFamily: "Eventpop" }}>{data.tag}</button>
                                                    <p className="mt-[6px] font-bold text-xs text-[#111111] leading-[14px]" style={{ fontFamily: "Eventpop" }}>{data.title}</p>
                                                    <p className="mt-[9px] font-normal text-[10px] text-[#00000061] leading-[14.5px]" style={{ fontFamily: "Eventpop" }}>{data.description}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="font-bold text-[#00B14F] text-xs leading-[14px]" style={{ fontFamily: "Eventpop" }}>{data.button}</button>
                                            </div>
                                        </div>
                                    </div>
                                )) : tab.content.map((data, index) => (
                                    <div className="border-b border-[#E3E3E3]" key={index}>
                                        <div className="flex justify-between items-end pb-[18px] px-[18px]">
                                            <div className="flex items-center">
                                                <div><img src={data.image} className="w-[85px] h-[65px] opacity-[50%]" alt="" /></div>
                                                <div className="ml-[10px]">
                                                    <button className="bg-[#F0F0F0] h-[19px] rounded-full px-[10px] py-[4px] text-[#8A8A8A] font-bold text-[10px] leading-[11.1px]" style={{ fontFamily: "Eventpop" }}>{data.tag}</button>
                                                    <p className="mt-[6px] font-bold text-xs text-[#111111] leading-[14px]" style={{ fontFamily: "Eventpop" }}>{data.title}</p>
                                                    <p className="mt-[9px] font-normal text-[10px] text-[#00000061] leading-[14.5px]" style={{ fontFamily: "Eventpop" }}>{data.description}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="font-bold text-[#8A8A8A] text-xs leading-[14px]" style={{ fontFamily: "Eventpop" }}>{data.button}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RewardCouponPage;

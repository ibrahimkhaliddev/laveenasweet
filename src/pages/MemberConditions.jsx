import React from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import { useFrappeGetCall, useFrappeGetDoc, useFrappeGetDocList, useFrappeAuth } from 'frappe-react-sdk';

function MemberConditions() {
    const { currentUser } = useFrappeAuth()

    const { data } = useFrappeGetDoc('Member Conditions', {
      fields: ['description']
    })

    return (
        <>
            <TitleHeader link={'/my-account'} title={'เงื่อนไขระดับของสมาชิก'} />
            {/* <div className="px-[20px] mt-[53px] pt-9 mb-[120px]">
                <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>เงื่อนไขระดับของสมาชิก </h2>

                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>1. Classic</h2>
                <ul className='mt-2 ml-5'>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าใช้จ่าย: 1 - 9,999 บาท </li>
                </ul>

                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>2. Sliver</h2>
                <ul className='mt-2 ml-5'>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าใช้จ่าย: 10,000 - 29,999 บาท </li>
                </ul>

                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>3. Gold</h2>
                <ul className='mt-2 ml-5'>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าใช้จ่าย: 30,000 - 59,999 บาท</li>
                </ul>

                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>4. Platinum</h2>
                <ul className='mt-2 ml-5'>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าใช้จ่าย: 60,000 บาท ขึ้นไป</li>
                </ul>
            </div> */}
            {data && (
                <div className="px-[20px] pt-9 mb-[120px] mt-[53px]">
                    {/* <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>{data.title}</h2> */}
                    <div className='mt-2 info-desc' dangerouslySetInnerHTML={{__html:data.description}}/>
                </div>
            )}
            <FooterMenu active={3} />
        </>
    )
}

export default MemberConditions

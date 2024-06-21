import React from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import { useFrappeGetCall, useFrappeGetDoc, useFrappeGetDocList, useFrappeAuth } from 'frappe-react-sdk';

function HowRedeemReward() {
    const { currentUser } = useFrappeAuth()

    const { data } = useFrappeGetDoc('How To Redeem Rewards', {
      fields: ['description']
    })

    return (
        <>
            <TitleHeader link={'/my-account'} title={'วิธีแลกของรางวัล'} />
            {/* <div className="px-[20px] mt-[53px] pt-9 mb-[120px]">
                <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>ขั้นตอนในการแลกของรางวัลมีดังนี้</h2>

                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>1. เลือกรางวัลที่ต้องการแลก</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัทขอสงวนสิทธิ์ในการเก็บรวบรวมใช้งานและเปิดเผยข้อมูลส่วน
                    บุคคลของท่านตามกฎหมายของพระราชบัญญัติคุ้มครองข้อมูลส่วน
                    บุคคล พ.ศ. 2562 (PDPA) โดยบริษัทจะดำเนินการเก็บรวบรวมข้อมูล</p>


                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>2. การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัทขอสงวนสิทธิ์ในการเก็บรวบรวมใช้งานและเปิดเผยข้อมูลส่วน
                    บุคคลของท่านตามกฎหมายของพระราชบัญญัติคุ้มครองข้อมูลส่วน
                    บุคคล พ.ศ. 2562 (PDPA) โดยบริษัทจะดำเนินการเก็บรวบรวมข้อมูล
                </p>

                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>3. นำ QR Code ที่ได้ให้พนักงานแสกน ณ จุดให้บริการ</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัทขอสงวนสิทธิ์ในการเก็บรวบรวมใช้งานและเปิดเผยข้อมูลส่วน
                    บุคคลของท่านตามกฎหมายของพระราชบัญญัติคุ้มครองข้อมูลส่วน
                    บุคคล พ.ศ. 2562 (PDPA) โดยบริษัทจะดำเนินการเก็บรวบรวมข้อมูล</p>
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

export default HowRedeemReward

import React from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import { useFrappeGetDoc } from 'frappe-react-sdk';

function Consent() {
    const { data } = useFrappeGetDoc('Data Disclosure Consent', {
        fields: ['description']
    })
    return (
        <>
            <TitleHeader link={'/my-account'} title={'ความยินยอมในการเปิดเผยข้อมูล'} />
            {/* <div className="px-[20px] mt-[53px] pt-9 mb-[120px]">
                <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>นโยบายความเป็นส่วนตัว</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>มีความมุ่งมั่นในการปกป้องความเป็นส่วนตัวและข้อมูลส่วนบุคคลของลูกค้าและผู้ใช้บริการของเรานโยบายความเป็นส่วนตัวนี้อธิบายถึง
                    ประเภทของข้อมูลส่วนบุคคลที่เราเก็บรวบรวมวิธีการเก็บรวบรวมและใช้ข้อมูลนั้น และสิทธิของคุณเกี่ยวกับข้อมูลส่วนบุคคลของคุณโดยการ
                    เข้าถึงเว็บไซต์ของเราและ/หรือการใช้บริการของเรา คุณยินยอมให้เรา
                    เก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของคุณตามนโยบาย
                    ความเป็นส่วนตัวนี้</p>

                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>1. การเก็บรวบรวมข้อมูลส่วนบุคคล</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัทขอสงวนสิทธิ์ในการเก็บรวบรวมใช้งานและเปิดเผยข้อมูลส่วน
                    บุคคลของท่านตามกฎหมายของพระราชบัญญัติคุ้มครองข้อมูลส่วน
                    บุคคล พ.ศ. 2562 (PDPA) โดยบริษัทจะดำเนินการเก็บรวบรวมข้อมูล
                    ส่วนบุคคลของท่านเฉพาะเมื่อจำเป็นต่อการให้บริการและปฏิบัติ
                    ตามกฎหมาย</p>

                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>2. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>ข้อมูลส่วนบุคคลที่บริษัทเก็บรวบรวมจะใช้เพื่อวัตถุประสงค์ต่อไปนี้:</p>
                <ul className='mt-2 ml-5'>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ให้บริการและจัดการบัญชีของท่าน</li>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ดำเนินการตามคำขอหรือความต้องการของท่าน</li>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>วิเคราะห์และปรับปรุงการให้บริการ</li>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>อื่นๆตามกฎหมาย</li>
                </ul>

                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>3. การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัทไม่มีสิทธิ์ในการเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บุคคล
                    ภายนอกยกเว้นในกรณีที่บริษัทได้รับความยินยอมจากท่านหรือเมื่อ
                    บริษัทมีหน้าที่ตามกฎหมายจะต้องเปิดเผยข้อมูล
                </p>

                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>4. สิทธิ์ทรัพย์สินทางปัญญา</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัทจะดำเนินการรักษาความมั่นคงปลอดภัยของข้อมูลส่วน
                    บุคคลของท่าน</p>
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

export default Consent

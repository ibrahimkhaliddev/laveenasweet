import React from 'react'
import hondaLogo from '../img/hondaLogo.png'

function RegisterPopup() {
    return (
        <>
            <div>
                <h3 className='text-center text-[24px] text-[#21201E] leading-[24px] mb-8'>นโยบายข้อมูลส่วนบุคคล</h3>

                <h4 className='text-center text-[16px] text-[#21201E] leading-[24px]'>นโยบายความเป็นส่วนตัว</h4>
                <p className='font-normal text-sm text-[#585858] mt-3'>มีความมุ่งมั่นในการปกป้องความเป็นส่วนตัวและข้อมูลส่วนบุคคลของลูกค้าและผู้ใช้บริการของเรานโยบายความเป็นส่วน
                    ตัวนี้อธิบายถึงประเภทของข้อมูลส่วนบุคคลที่เราเก็บรวบรวมวิธีการเก็บรวบรวมและใช้ข้อมูลนั้นและสิทธิของคุณเกี่ยวกับข้อมูลส่วนบุคคลของคุณโดยการเข้าถึงเว็บไซต์ของเราและ/หรือการใช้บริการของเรา คุณยินยอมให้เราเก็บรวบรวมและใช้
                    ข้อมูลส่วนบุคคลของคุณตามนโยบายความเป็นส่วนตัวนี้</p>

                <h5 className='font-bold text-sm text-[#21201E] mt-8'>1. การเก็บรวบรวมข้อมูลส่วนบุคคล</h5>
                <p className='font-normal text-sm text-[#585858] mt-3'>บริษัทขอสงวนสิทธิ์ในการเก็บรวบรวมใช้งานและเปิดเผยข้อมูลส่วนบุคคลของท่านตามกฎหมายของพระราชบัญญัติคุ้ม
                    ครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) โดยบริษัท
                    จะดำเนินการเก็บรวบรวมข้อมูลส่วนบุคคลของท่านเฉพาะเมื่อจำเป็นต่อการให้บริการและปฏิบัติตามกฎหมาย</p>

                <h5 className='font-bold text-sm text-[#21201E] mt-8'>2. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล</h5>
                <p className='font-normal text-sm text-[#585858] mt-4'>ข้อมูลส่วนบุคคลที่บริษัทเก็บรวบรวมจะใช้เพื่อวัตถุประสงค์ต่อไปนี้:</p>
                <ul className='mt-2 ml-5'>
                    <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าใช้จ่าย: 30,000 - 59,999 บาท</li>
                </ul>

                <h5 className='font-bold text-sm text-[#21201E] mt-8'>3. การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล</h5>
                <p className='font-normal text-sm text-[#585858] mt-3'>บริษัทไม่มีสิทธิ์ในการเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่
                    บุคคลภายนอกยกเว้นในกรณีที่บริษัทได้รับความยินยอมจาก
                    ท่านหรือเมื่อบริษัทมีหน้าที่ตามกฎหมายจะต้องเปิดเผยข้อมูล</p>

                <h5 className='font-bold text-sm text-[#21201E] mt-8'>4. สิทธิ์ทรัพย์สินทางปัญญา</h5>
                <p className='font-normal text-sm text-[#585858] mt-3'>บริษัทจะดำเนินการรักษาความมั่นคงปลอดภัยของข้อมูลส่วน
                    บุคคลของท่าน</p>

                <div className='mt-10'>
                    <input type="checkbox" />
                    <p className='text-[#2C2C2E] font-normal text-base leading-[25.39px] ml-2'>ข้าพเจ้าได้อ่าน และ ยินยอมให้ข้อมูลส่วนบุคคล</p>
                </div>
            </div>
            {/* <div className='h-[926px] w-full flex justify-center items-center flex-col px-6' style={{background: "linear-gradient(90deg, #F79B20 34.61%, #F2743A 119.87%)"}}>
            <img src={hondaLogo} className='w-[200px] h-[86.96px]' alt="" />
            <p className='font-bold text-[32px] leading-[34px] text-[#FFFFFF] text-center mt-10'>ยินดีต้อนรับ <br /> Hondanont Loyalty</p>
            <p className='font-normal text-base text-white leading-[25.39px] mt-4'>ลงทะเบียนวันนี้ เริ่มสะสมคะแนนจากทุกการใช้จ่าย แลกส่วนลด และสิทธิ์พิเศษที่เหนือกว่าใคร แทนคำขอบคุณที่ไว้วางใจ</p>
            <button></button>
        </div> */}
        </>
    )
}

export default RegisterPopup

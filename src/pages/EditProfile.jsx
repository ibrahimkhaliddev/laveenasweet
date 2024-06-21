import React, { useState, useRef } from "react"
import TitleHeader from "../components/TitleHeader"
import { ArrowLeft } from '@untitled-ui/icons-react'
import successIcon from '../img/success.svg'
import { Link } from "react-router-dom"
import { useUser } from '../hooks/useUser';
import { useFrappePostCall } from "frappe-react-sdk"
import { useFormik } from "formik"

const EditProfile = () => {
  const { user } = useUser()
  const { call } = useFrappePostCall("honda_api.api_calls.getuser.update_profile")
  const [editPro, setEditPro] = useState(true)
  const [changePhone, setChangePhone] = useState(false)
  const [changedSuccessfully, setChangedSuccessfully] = useState(false);

  const [confirmOTP, setConfirmOTP] = useState(false);
  const [getOTP, setGetOTP] = useState(false);
  const [filledPhone, setFilledPhone] = useState(false);
  const [filledOTP, setFilledOTP] = useState(true);
  const [filledAllOtp, setFilledAllOtp] = useState('')
  const [phoneError, setPhoneError] = useState(false);
  const [otperror, setOtperror] = useState(false)

  const telRef = useRef(null)

  const num1Ref = useRef(null)
  const num2Ref = useRef(null)
  const num3Ref = useRef(null)
  const num4Ref = useRef(null)
  const num5Ref = useRef(null)
  const num6Ref = useRef(null)


  const changeToEditPro = () => {
    setChangePhone(false);
    setEditPro(true);
    setConfirmOTP(false);
    setChangedSuccessfully(false);
  }

  const changeToChangePhone = () => {
    setChangePhone(true);
    setEditPro(false);
  }

  const goNext = () => {
    setChangePhone(false);
    setConfirmOTP(true);
  }

  const canChangeIt = () => {
    setConfirmOTP(false);
    setChangedSuccessfully(true);
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <>
      {editPro && (
        <>
          <TitleHeader title="แก้ไขโปรไฟล์" link="/my-account" />
          <main className='p-5 mt-[53px]'>
            <ProfileForm
              initialValues={{
                first_name: user?.user.first_name,
                last_name: user?.user.last_name,
                email: user?.user.email,
                phone: user?.phone,
                birth_date: user?.customer_details?.split(" ")[1]
              }}
              onSubmit={call}
            />
          </main>
        </>
      )}

      {changePhone && (
        <>
          <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold fixed w-full top-0 bg-white z-[999]'>
            <button onClick={changeToEditPro}>
              <ArrowLeft />
            </button>
            เปลี่ยนเบอร์โทร
          </header>
          <main className='px-5 py-[46px] mt-[53px]'>
            <h1 className='text-[22px] font-bold'>เปลี่ยนเบอร์มือถือของคุณ</h1>
            <p className='mt-4'>กรอกเบอร์มือถือของคุณและกดรับรหัสยืนยันทาง SMS (OTP) เพื่อยืนยันเบอร์มือถือของคุณ</p>

            <div className="flex gap-x-3">
              <input type="tel" id="phone" autoComplete="off" ref={telRef} className={`relative border ${phoneError ? "border-[#EC5454]" : "border-[#E3E3E3]"} rounded-[8px] outline-none py-2 px-3 mt-[11px] w-full`} onInput={(e) => {
                if (e.target.value !== "") {
                  setFilledPhone(true)
                } else {
                  setFilledPhone(false)
                }
              }} onKeyDown={() => setPhoneError(false)} />
            </div>

            {!phoneError ? "" : (<p className="text-[#EC5454] inter mt-2">This phone number is invalid</p>)}

            <button onClick={() => {
              if (telRef.current.value.length !== 10) {
                setPhoneError(true);
              } else {
                goNext();
              }
            }} className={`mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!filledPhone ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!filledPhone}>รับรหัสยืนยัน SMS (OTP)</button>

            <p className="text-[#9E9E9E] mt-[14px] text-[13px]">หน้าเพจนี้อันรวมไปถึงเอกสารหรือข้อความต่างๆที่มีความเกี่ยวข้องกับหน้าเพจนี้ถูกเขียนขึ้นมาเพื่อแจ้งท่านให้ทราบถึง ข้อกำหนด</p>
          </main>
        </>
      )}

      {confirmOTP && (
        <>
          <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold'>
            <button onClick={changeToEditPro}>
              <ArrowLeft />
            </button>
            เปลี่ยนเบอร์โทร
          </header>
          <main className='px-5 py-[46px]'>
            <h1 className='text-[22px] font-bold'>ยืนยันรหัส OTP</h1>
            <p className='mt-4'>เราได้ส่ง SMS (OTP) ไปที่เบอร์<br />090-1234-567</p>

            <div className="flex gap-x-[9px] mt-9">
              <input type="text" maxLength="1" id="num1" ref={num1Ref} className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" onKeyDown={() => {
                setOtperror(false);
              }} />
              <input type="text" maxLength="1" id="num2" ref={num2Ref} className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" onKeyDown={() => {
                setOtperror(false);
              }} />
              <input type="text" maxLength="1" id="num3" ref={num3Ref} className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" onKeyDown={() => {
                setOtperror(false)
              }} />
              <input type="text" maxLength="1" id="num4" ref={num4Ref} className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" onKeyDown={() => {
                setOtperror(false)
              }} />
              <input type="text" maxLength="1" id="num5" ref={num5Ref} className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" onKeyDown={() => {
                setOtperror(false)
              }} />
              <input type="text" maxLength="1" id="num6" ref={num6Ref} className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" onKeyDown={() => {
                setOtperror(false)
              }} />
            </div>

            {!otperror ? (<p className="text-center mt-[43px]">I didn't receive a code <strong>Resend</strong></p>) : (<p className="text-center text-[#EC5454] inter mt-[43px]">Wrong code, please try again <strong>Resend</strong></p>)}

            <button onClick={() => {
              if (num1Ref.current.value != "" && num2Ref.current.value != "" && num3Ref.current.value != "" && num4Ref.current.value != "" && num5Ref.current.value != "" && num6Ref.current.value != "") {
                setOtperror(false);
                canChangeIt();
              } else {
                setOtperror(true)
              }
            }} className={`block mt-10 w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!filledOTP ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!filledOTP}>ยืนยันรหัส OTP</button>
          </main>
        </>
      )}

      {changedSuccessfully && (
        <>
          <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold'>
            <button onClick={changeToEditPro}>
              <ArrowLeft />
            </button>
            เปลี่ยนเบอร์โทร
          </header>
          <main className='px-5 py-[46px]'>
            <img src={successIcon} />
            <h1 className='text-[30px] font-bold mt-5'>ระบบเปลี่ยนเบอร์<br />ใหม่สำเร็จ 👋</h1>
            <p className='mt-4'>ระบบได้เปลี่ยนเบอร์ใหม่เรียบร้อยแล้ว<br /> คุณสามารถย้อนกลับไปหน้าอื่น ๆ ได้</p>
          </main>
          <footer className='flex px-5 gap-x-3'>
            <Link to="/" className='w-full bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'>กลับไปหน้าเดิม</Link>
          </footer>
        </>
      )}
    </>
  )
}

export default EditProfile


export const ProfileForm = ({
  initialValues,
  onSubmit
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit
  })

  return (
    <form className='flex flex-col gap-y-5' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col'>
        <label htmlFor='name'>ชื่อ</label>
        <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' name='first_name' value={formik.values.first_name} onChange={formik.handleChange} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='surname'>นามสกุล</label>
        <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' name='last_name' value={formik.values.last_name} onChange={formik.handleChange} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='email'>อีเมล</label>
        <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' name='email' type='email' value={formik.values.email} onChange={formik.handleChange} />
      </div>

      <div className='flex flex-col relative'>
        <label htmlFor='phone'>เบอร์โทร</label>
        <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' name='phone' type='tel' value={formik.values.phone} onChange={formik.handleChange} />

        <button className="absolute translate-y-[38px] right-[4px] bg-black text-white px-3 py-[6px] rounded-[6px]">แก้ไข</button>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='birth_date'>วัน/เดือน/ปีเกิด</label>
        <input
          className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          type='date'
          name='birth_date'
          value={formik.values.birth_date}
          onChange={formik.handleChange}
        />
      </div>
      <footer className="w-full">
        <button type="submit" className={`block mt-5 w-1/2 text-white rounded-[9px] p-3 w-full flex items-center justify-center gap-x-4 inter`} style={{ background: "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)", fontFamily: "Eventpop" }}>
          บันทึก
        </button>
      </footer>
    </form>
  )
}

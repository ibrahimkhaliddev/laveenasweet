import { useRef, useState, Fragment } from "react"
import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import logo from '../img/hondaLogo.png'
import { Dialog, Transition } from '@headlessui/react'
import { useCountdown } from "../hooks/useCountDown";
import { useUser } from '../hooks/useUser'

const Phonverify = () => {
  const [filledInfo, setFilledInfo] = useState(false)
  const [userphone, Setuserphone] = useState('');
  const [show, setShow] = useState("false");
  const [disabled, setDisabled] = useState(false);
  const [myotp, setmyotp] = useState('');
  const [errornow, seterrornow] = useState('');
  const [phonePage, setPhonePage] = useState(true);
  const [getOTP, setGetOTP] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [otperror, setOtperror] = useState(false)

  const [showConfirm, setShowConfirm] = useState(false);
  const { refetch } = useUser()
  const [filledPhone, setFilledPhone] = useState(false);
  const [filledOTP, setFilledOTP] = useState(true);
  const [filledAllOtp, setFilledAllOtp] = useState('')
  const [days, hours, minutes, seconds] = useCountdown(new Date().getTime() + 60000);
  const navigate = useNavigate();


  const telRef = useRef(null)

  const num1Ref = useRef(null)

  const handleChange = event => {
    const value = event.target.value.replace(/\D/g, "");
    Setuserphone(value);
  };

  const handleotpchange = event => {
    const value = event.target.value.replace(/\D/g, "");
    setmyotp(value);
  };

  const clickverify = (value) => {
    if (userphone.length > 7) {
      phonverifynow(userphone);
      setShow()
      setDisabled(true)
    }
  }

  const goBack = () => {
    setGetOTP(false);
    setPhonePage(true);
    setFilledPhone(false);
  }

  const goNext = () => {
    setPhonePage(false)
    setGetOTP(true);
  }

  const verifyotp = () => {
    setShowConfirm(true);
    verifyotpnow(userphone, myotp, Cookies.get('username'))
  }

  const phonverifynow = (phone) => {
    try {
      return fetch("https://dev.honda.zaviago.com/api/method/honda_api.api_calls.verifyuser.getphone?userphone=" + phone, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => response.json()).then((data) => {
        var res = data.message;

        if (res.status == 'success') {
          seterrornow('');
          seterrornow(res.message);
        }
        else {
          seterrornow(res.message);
          setShow('false')
          setDisabled(false)
        }

      })

    } catch (error) {
      return error;
    }
  }
  const verifyotpnow = (userphone, myotp, username) => {


    if(!myotp){
      seterrornow('Please Enter OTP');
      setShowConfirm(false);
      return;
    }


    var myHeaders = new Headers();
    myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");
    myHeaders.append("Authorization", "Bearer " + Cookies.get('token'));


    var requestOptions = {
      method: 'POST',
      headers: myHeaders
    };
    fetch("https://dev.honda.zaviago.com/api/method/honda_api.api_calls.verifyuser.verifyotp?userphone=" + userphone + "&otp=" + myotp + "&username=" + username, requestOptions)
      .then((response) => response.json()).then((data) => {
        var res = data.message;

        if (res.status == 'success') {
          seterrornow('');
          seterrornow(res.message);
          Cookies.set('phoneverify', false);
          refetch().then(() => navigate("/"))
        }
        else {
          setShowConfirm(false);
          seterrornow(res.message);
          setShow('false')
          setDisabled(false)
        }

      })
      .catch(error => console.log('error', error));

  }



  return (
    <>
      {phonePage && (
        <>
          <main className='px-5 pt-[26px] pb-8'>
            <h1 className='text-[20px] font-bold'>กรอกหมายเลขโทรศัพท์</h1>
            <p className='text-[#00000061] text-sm'>กรุณากรอกหมายเลขโทรศัพท์ของคุณเพื่อรับรหัส OTP</p>

            <p className='text-[#00000061] text-sm mt-4'>กรอกหมายเลขโทรศัพท์</p>
            <div className="flex gap-x-3">
              <div className="text-style" style={{ fontSize: '24px', lineHeight: '50px' }}>+66</div>

              <input type="tel" id="phone" autoComplete="off" ref={telRef} onChange={handleChange} className={`relative border ${phoneError ? "border-[#EC5454]" : "border-[#E3E3E3]"} rounded-[8px] outline-none py-2 px-3 mt-2 w-full`} onInput={(e) => {
                if (e.target.value !== "") {
                  setFilledPhone(true)
                } else {
                  setFilledPhone(false)
                }
              }} onKeyDown={() => setPhoneError(false)} />
            </div>

            {!phoneError ? "" : (<p className="text-[#EC5454] inter mt-2">This phone number is invalid</p>)}

            {show && (
              <button onClick={() => {
                if (telRef.current.value.length < 10) {
                  setPhoneError(true);
                } else {
                  clickverify();
                }
              }} className={`mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full`} style={{ background: !filledPhone ? "#C5C5C5" : "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)" }} disabled={!filledPhone}>รับรหัสยืนยัน SMS (OTP)</button>
            )}

            <p className="text-[#00000061] mt-[14px] text-sm text-center">คุณจะได้รับรหัสยืนยันตัวตนจำนวน 6 หลัก</p>

          </main>

          <main className={`${show ? "invisible" : "visible"} px-5 pb-[46px]`}>
            <h1 className='text-[22px] font-bold'>กรอกรหัสผ่าน OTP</h1>
            <p className='mt-1 text-[#00000061] text-sm'>รหัส OTP จะส่งไปยังหมายเลขโทรศัพท์ของคุณ</p>

            <p className='mt-4 text-[#00000061] text-sm'>กรอกรหัส OTP</p>
            <input onChange={handleotpchange} value={myotp} className={`${otperror ? "border border-[#F0592A]" : "border border-[#F8F8F8]"} bg-[#F8F8F8] w-full rounded-[8px] outline-none py-2 px-3 mt-[11px] text-center text-[20px] font-bold`} id='otp' name='otp' type='tel' />
            {otperror && (<p className="text-[#F0592A] inter mt-2 text-sm" style={{ fontFamily: "Eventpop" }}>รหัส OTP ไม่ถูกต้อง</p>)}

            <p className='mt-[52px] text-[#00000061] text-sm text-center'>หากคุณต้องการขอรหัสผ่าน OTP อีกครั้ง <br />กด <span className="text-black">“ขอรหัส OTP อีกครั้ง”</span> ได้ที่ด้านล่าง</p>
            {/* <p className="mt-8 mb-[48px] text-sm text-center">ขอรหัส OTP ใหม่อีกครั้งใน 00:{seconds} วินาที</p> */}
              

              
              <p className="mt-8 mb-[48px] text-sm text-center">{errornow}</p>

            <button onClick={verifyotp} className={`text-white rounded-[9px] p-3 w-full bg-black flex items-center justify-center mt-[14px]`} style={{ background: !filledOTP ? "#C5C5C5" : "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)" }} >ยืนยันรหัส OTP</button>
            <p onClick={verifyotp} className="text-center mt-4 text-[#F0592A] text-sm underline">ขอรหัส OTP อีกครั้ง</p>
          </main>
        </>
      )}

      {/* <main className='px-5 py-[46px]'>
          <div className='flex flex-col relative'>
              <div className="showerror">{errornow}</div>
              <label htmlFor='phone'>เบอร์โทร</label>
              <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' onChange={handleChange} value={userphone} id='phone' name='phone' type='tel' disabled={disabled}/>
              <button onClick={clickverify} className="absolute translate-y-[38px] right-[4px] bg-black text-white px-3 py-[6px] rounded-[6px]">Send</button>
              
              
              <input  onChange={handleotpchange} value={myotp} className={`${show ? "invisible" : "visible"} border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]`} placeholder="OTP"  id='otp' name='otp' type='tel'/>
              <button onClick={verifyotp} className={`${show ? "invisible" : "visible"} text-white rounded-[9px] p-3 w-full bg-black flex items-center justify-center mt-8`}>ยืนยันรหัส OTP</button>
          </div>
      </main> */}

      <Transition.Root show={showConfirm} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowConfirm(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full max-w-md">
                  <div className='my-10'>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333]">
                        ระบบกำลังทำการสมัครสมาชิก
                      </Dialog.Title>
                      <div className="mt-2 mb-5">
                        <p className="text-xs text-[#8A8A8A]">
                          กรุณารอสักครู่
                        </p>
                      </div>
                    </div>
                    <div className="loading-icon">
                      <div className="inner-icon"></div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Phonverify;
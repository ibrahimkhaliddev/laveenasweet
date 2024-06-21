import { useState, Fragment } from "react";
import { SfInput, SfButton } from '@storefront-ui/react';
import { useFormik } from 'formik';
import { useFrappeAuth } from 'frappe-react-sdk';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { getToken } from '../utils/helper';
import { useFrappeGetCall } from 'frappe-react-sdk';
import bgBrand from '../img/background-login.png'
import hondaHomeLogo from '../img/honda-home-logo.svg'
import { Dialog, Transition } from '@headlessui/react'

export default function Login() {
  document.body.style.background = `url(${bgBrand})`;
  const [pdpa, setPdpa] = useState(false)
  const [acceptPdpa, setAcceptPdpa] = useState(false);
  const { login } = useUser();
  const [lineurl, setlineurl] = useState("");
  const navigate = useNavigate();
  const { data } = useFrappeGetCall('/honda_api.api_calls.linetoken.get_oauth2_authorize_url', null, ``)

  const line = async (usr, pwd) => {
    try {
      return fetch("https://dev.honda.zaviago.com/api/method/honda_api.api_calls.linetoken.get_oauth2_authorize_url?" + Date.now(), { method: "GET", headers: { "Content-Type": "application/json" } }).then((response) => response.json()).then((data) => {
        setlineurl(data.message);
      })
    } catch (error) {
      return error;
    }
  }

  const {
    isLoading,
  } = useFrappeAuth();

  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
    line();
  }, [])

  const formik = useFormik({
    initialValues: {
      usr: 'suttirak.ch@zaviago.com',
      pwd: 'CanDoNa12a3',
      // usr: 'suttirak.ch@zaviago.com',
      // pwd: 'Markchar123%',
    },
    onSubmit: values => login(values.usr, values.pwd).then(() => navigate("/"))
  });


  function handleClick(e) {
    const url = window.location.href = lineurl
    navigate(url)
  }


  return (
    <>
      <header>
        <img src={hondaHomeLogo} className="w-[200px] mx-auto mt-10" />
        <article className="text-center text-white p-5">
          <h1 className="text-[32px] font-bold">ยินดีต้อนรับ</h1>
          <h1 className="text-[32px] font-bold">Hondanont Loyalty</h1>
          <p className="mt-4">ลงทะเบียนวันนี้ เริ่มสะสมคะแนนจากทุกการใช้จ่าย แลกส่วนลด และสิทธิ์พิเศษที่เหนือกว่าใคร แทนคำขอบคุณที่ไว้วางใจ</p>
        </article>
      </header>
      <form className="p-4 flex gap-4 flex-wrap text-neutral-900 text-start" onSubmit={formik.handleSubmit}>
        {/* <h2 className="w-full typography-headline-4 md:typography-headline-3 font-bold">Sign in</h2>
          <label className="w-full flex flex-col gap-0.5">
            <span className="typography-text-sm  font-medium">usr/username</span>
            <SfInput name="usr" type='email' autoComplete="usr" required onChange={formik.handleChange} value={formik.values.usr} className='focus:ring-[#F0592A] hover:ring-[#F0592A] focus-within:ring-[#F0592A] active:ring-[#F0592A]'/>
          </label>
          <label className="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
            <span className="typography-text-sm font-medium">password</span>
            <SfInput name="pwd" type='password' autoComplete="given-password" required onChange={formik.handleChange} value={formik.values.pwd} className='focus:ring-[#F0592A] hover:ring-[#F0592A] focus-within:ring-[#F0592A] active:ring-[#F0592A]'/>
          </label>


          <div className="w-full flex gap-4 mt-4 md:mt-0">
            <SfButton className="w-full shadow-none" type='submit' style={{color:"#F0592A",fontWeight:"bold",backgroundColor:"white"}}>{isLoading ? 'กำลังโหลด...' : 'เข้าสู่ระบบ'}</SfButton>
          </div> */}
        <div className="w-full flex gap-4">
          <SfButton onClick={() => setPdpa(true)} className="w-full shadow-none" type='button' style={{ color: "#F0592A", fontWeight: "bold", backgroundColor: "white" }}>{isLoading ? 'กำลังโหลด...' : 'เข้าสู่ระบบด้วย Line'}</SfButton>
        </div>
      </form>

      <Transition.Root show={pdpa} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setPdpa(false)}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-5 pt-5 pb-4 text-left shadow-xl transition-all w-full max-w-md">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-[24px] font-bold leading-6 text-[#333333] mb-8">
                        นโยบายข้อมูลส่วนบุคคล
                      </Dialog.Title>
                      <div className="mt-2 text-left">
                        <article>
                          <h2 className="font-bold mb-3">นโยบายความเป็นส่วนตัว</h2>
                          <p className="font-medium text-sm text-[#585858]">มีความมุ่งมั่นในการปกป้องความเป็นส่วนตัวและข้อมูลส่วนบุคคลของลูกค้าและผู้ใช้บริการของเรานโยบายความเป็นส่วนตัวนี้อธิบายถึงประเภทของข้อมูลส่วนบุคคลที่เราเก็บรวบรวมวิธีการเก็บรวบรวมและใช้ข้อมูลนั้นและสิทธิของคุณเกี่ยวกับข้อมูลส่วนบุคคลของคุณโดยการเข้าถึงเว็บไซต์ของเราและ/หรือการใช้บริการของเรา คุณยินยอมให้เราเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของคุณตามนโยบายความเป็นส่วนตัวนี้</p>
                        </article>
                        <article className="mt-8">
                          <h2 className="font-bold mb-3">1. การเก็บรวบรวมข้อมูลส่วนบุคคล</h2>
                          <p className="font-medium text-sm text-[#585858]">บริษัทขอสงวนสิทธิ์ในการเก็บรวบรวมใช้งานและเปิดเผยข้อมูลส่วนบุคคลของท่านตามกฎหมายของพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) โดยบริษัทจะดำเนินการเก็บรวบรวมข้อมูลส่วนบุคคลของท่านเฉพาะเมื่อจำเป็นต่อการให้บริการและปฏิบัติตามกฎหมาย</p>
                        </article>
                        <article className="mt-4">
                          <h2 className="font-bold mb-3">2. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล</h2>
                          <p className="font-medium text-sm text-[#585858]">ข้อมูลส่วนบุคคลที่บริษัทเก็บรวบรวมจะใช้เพื่อวัตถุประสงค์ต่อไปนี้:</p>
                          <ul className="list-disc ml-5 mt-2 font-medium text-xs text-[#585858]">
                            <li>ให้บริการและจัดการบัญชีของท่าน</li>
                            <li>ดำเนินการตามคำขอหรือความต้องการของท่าน</li>
                            <li>วิเคราะห์และปรับปรุงการให้บริการ</li>
                            <li>อื่นๆตามกฎหมาย</li>
                          </ul>
                        </article>
                        <article className="mt-4">
                          <h2 className="font-bold mb-3">3. การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล</h2>
                          <p className="font-medium text-sm text-[#585858]">บริษัทไม่มีสิทธิ์ในการเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอกยกเว้นในกรณีที่บริษัทได้รับความยินยอมจากท่านหรือเมื่อบริษัทมีหน้าที่ตามกฎหมายจะต้องเปิดเผยข้อมูล</p>
                        </article>
                        <article className="mt-4">
                          <h2 className="font-bold mb-3">4. สิทธิ์ทรัพย์สินทางปัญญา</h2>
                          <p className="font-medium text-sm text-[#585858]">บริษัทจะดำเนินการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของท่าน</p>
                        </article>

                        <footer className="relative mt-10">
                          <label for='accept' className="text-sm flex items-center gap-x-2 text-[#2C2C2E]">
                            <input type='checkbox' onChange={(e) => {
                              if (e.target.checked) {
                                setAcceptPdpa(true)
                              } else {
                                setAcceptPdpa(false)
                              }
                            }} id='accept' />
                            <span className="accept-checkbox"></span>
                            ข้าพเจ้าได้อ่าน และ ยินยอมให้ข้อมูลส่วนบุคคล
                          </label>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-flow-row-dense grid gap-3">
                    <button
                      type="button"
                      onClick={handleClick}
                      className={`w-full text-white rounded-[9px] p-3 text-center`}
                      style={{ background: acceptPdpa ? "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)" : "#C5C5C5" }}
                      disabled={!acceptPdpa}
                    >
                      ต่อไป
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

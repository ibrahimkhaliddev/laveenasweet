import { useState, useEffect, Fragment } from 'react';
import { SfButton, SfIconCheckCircle, SfIconClose } from '@storefront-ui/react';
import { useCart } from '../hooks/useCart';
import PaymentMethods from '../components/PaymentMethods';
import { useFrappeGetCall, useFrappePostCall } from 'frappe-react-sdk';
import { useFormik } from 'formik';
import { orderSchema } from '../components/forms/orderSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MarkerPin01, ChevronRight, HelpCircle } from '@untitled-ui/icons-react';
import chevronDropdown from '../img/chevron-right.svg'
import { useProducts } from '../hooks/useProducts'
import { ShoppingBag01, AlertTriangle } from '@untitled-ui/icons-react';
import banks from '../img/banks.svg'
import visaIcon from '../img/visa-icon.svg'
import BranchSelect from '../components/form-controls/BranchSelect';
import { useUser } from '../hooks/useUser';
import { giftCardSchema } from '../components/forms/giftCardSchema';
import { Dialog, Transition } from '@headlessui/react'
import { Skeleton } from '@chakra-ui/skeleton';

const GiftCheckout = () => {
    const { cart, cartCount, getTotal, resetCart } = useCart();
    const navigate = useNavigate();
    const { itemCode } = useParams();
    const { user } = useUser();

    const { getByItemCode } = useProducts()
    const product = getByItemCode(itemCode)

    const [modified, setModified] = useState(false)

    const [showConfirm, setShowConfirm] = useState(false);

    const { call, isCompleted, result } = useFrappePostCall('headless_e_commerce.api.place_order');

    const [checkoutPage, setCheckoutPage] = useState(true)
    const [selectShippingAddress, setSelectShippingAddress] = useState(false)
    const [selectPayment, setSelectPayment] = useState(false)
    const [addCard, setAddCard] = useState(false);

    const [delivery, setDelivery] = useState(59)
    const [discount, setDiscount] = useState(99)

    const [redeeming, setRedeeming] = useState(false);

    const [loading, setLoading] = useState(true);

    const total = getTotal() + delivery - discount

    const formik = useFormik({
        initialValues: {
            loyalty_points: product?.loyalty_points_based_price,
            items: [{
                item_code: itemCode,
                qty: 1
            }],
            payment_method: 'bank-transfer',
            branch: '',
        },
        validationSchema: giftCardSchema,
        validateOnChange: false,
        onSubmit: call
    });

    useEffect(() => {
        formik.setFieldValue('items', Object.entries(cart).map(([item_code, qty]) => ({ item_code, qty })))
    }, [cartCount])

    useEffect(() => {
        if (isCompleted) {
            if (result?.message?.name) {
                resetCart();
                navigate(`/thankyou?order_id=${result.message.name}&amount=${result.message.grand_total}`)
            }
        }
    }, [isCompleted])

    const tooltipHide = {
        visibility: "hidden",
        opacity: "0",
        transform: "translateY(9px)",
        transition: "all 300ms"
    }

    const tooltipShow = {
        visibility: "visible",
        opacity: "1",
        transform: "translateY(6px)",
        filter: "drop-shadow(0 12px 16px #10182814)",
        transition: "all 300ms",
    }

    const [showTooltipCVV, setShowTooltipCVV] = useState(tooltipHide);

    const [informationAlert, setInformationAlert] = useState(false);
    const [positiveAlert, setPositiveAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const goBackToCheckoutPage = () => {
        setCheckoutPage(true);
        setSelectShippingAddress(false);
        setSelectPayment(false)
    }


    const clickToAddCard = () => {
        setSelectPayment(false);
        setAddCard(true)
    }

    const clickToSelectPayment = () => {
        setAddCard(false);
        setSelectPayment(true);
    }

    useEffect(() => {
        formik.setFieldValue('loyalty_points', product?.loyalty_points_based_price)
        formik.setFieldValue('items', [{
            item_code: itemCode,
            qty: 1
        }])
    }, [product])

    console.log(formik.errors);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])
    return (
        <>
            {checkoutPage && (
                <>
                    <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
                        <button onClick={() => location.href = "/"} type="button">
                            <span className="sr-only">Close panel</span>
                            <ArrowLeft />
                        </button>
                        การแลกรางวัล
                    </header>
                    <div className='flex flex-col md:flex-row justify-center'>
                        <form className='p-5'>
                            <label className='text-[#333333] text-sm font-bold mt-[14px]'>
                              <div className='flex gap-x-[10px] mb-[18px]'>
                                <MarkerPin01 />
                                สาขาที่รับของรางวัล
                              </div>
                              <BranchSelect name="branch" value={formik.values.branch} onChange={formik.handleChange} error={formik.errors.branch} />
                            </label>
                        </form>
                        <div className='p-4 md:w-2/5'>
                            <div className="flex justify-between items-end py-4">
                                <p className="typography-headline-4 font-bold md:typography-headline-3 gap-x-2 flex">
                                    <ShoppingBag01 />
                                    สรุปรายการของรางวัล
                                </p>
                            </div>
                            <div className="md:shadow-lg md:rounded-md md:border md:border-neutral-100">
                                <ul role="list" className="divide-y divide-gray-200">
                                    {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src={product?.website_image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                    </div> */}

                                    <div className="flex flex-1 flex-col pb-[18px]">
                                        <div>
                                            {!loading ? (
                                              <div className="flex justify-between text-base font-medium text-gray-900 items-center">
                                                  <h3 className='font-bold text-[15px]'>
                                                    <a href="#">{product?.item_name}</a>
                                                  </h3>
                                                <p className="ml-4 text-sm text-[#F0592A] font-bold">{product?.loyalty_points_based_price} คะแนน</p>
                                              </div>
                                            ) : (
                                              <div className="flex justify-between text-base font-medium text-gray-900 items-center">
                                                <Skeleton startColor='#EDF2F7' endColor='#A0AEC0' height="10px" width="60%" borderRadius="6px"/>
                                                <Skeleton startColor='#EDF2F7' endColor='#A0AEC0' height="10px" width="15%" borderRadius="6px"/>
                                              </div>
                                            )}
                                        </div>
                                    </div>
                                </ul>

                                <ul role="list" className="divide-y divide-gray-200 border-t border-neutral-200">
                                    {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src={product?.website_image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                    </div> */}

                                    <div className="flex flex-1 flex-col pt-[18px]">
                                        <h2 className='mb-[18px] font-bold text-[15px]'>รายละเอียดการแลกรางวัล</h2>
                                        <div>
                                            {!loading ? (
                                              <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3 className='text-sm text-[#010101]'>
                                                  ยอดรวม
                                                </h3>
                                                <p className="ml-4 text-sm text-[#F0592A] font-bold">{product?.loyalty_points_based_price} คะแนน</p>
                                              </div>
                                            ) : (
                                              <div className="flex justify-between text-base font-medium text-gray-900">
                                                <Skeleton startColor='#EDF2F7' endColor='#A0AEC0' height="10px" width="60%" borderRadius="6px"/>
                                                <Skeleton startColor='#EDF2F7' endColor='#A0AEC0' height="10px" width="15%" borderRadius="6px"/>
                                              </div>
                                            )}
                                        </div>
                                    </div>
                                </ul>
                                <div className="py-4 mt-3 md:pb-6 md:mt-0">
                                    <SfButton disabled={user?.loyalty_points < product?.loyalty_points_based_price || formik.values.branch == "เลือกสาขา"} size="lg" className="w-full shadow-none" style={{ background: user?.loyalty_points < product?.loyalty_points_based_price || formik.values.branch == "เลือกสาขา" ? "#C5C5C5" : "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)"}} onClick={(e) => { 
                                      e.preventDefault();
                                      setShowConfirm(true)
                                    }}>
                                        แลกรางวัลโดยใช้ {product?.loyalty_points_based_price} คะแนน
                                    </SfButton>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
                                {positiveAlert && (
                                    <div
                                        role="alert"
                                        className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
                                    >
                                        <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
                                        <p className="py-2 mr-2">Your promo code has been added.</p>
                                        <button
                                            type="button"
                                            className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
                                            aria-label="Close positive alert"
                                            onClick={() => setPositiveAlert(false)}
                                        >
                                            <SfIconClose className="hidden md:block" />
                                            <SfIconClose size="sm" className="md:hidden block" />
                                        </button>
                                    </div>
                                )}
                                {informationAlert && (
                                    <div
                                        role="alert"
                                        className="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
                                    >
                                        <SfIconCheckCircle className="mr-2 my-2 text-positive-700" />
                                        <p className="py-2 mr-2">Your promo code has been removed.</p>
                                        <button
                                            type="button"
                                            className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
                                            aria-label="Close positive alert"
                                            onClick={() => setInformationAlert(false)}
                                        >
                                            <SfIconClose className="hidden md:block" />
                                            <SfIconClose size="sm" className="md:hidden block" />
                                        </button>
                                    </div>
                                )}
                                {errorAlert && (
                                    <div
                                        role="alert"
                                        className="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
                                    >
                                        <p className="py-2 mr-2">This promo code is not valid.</p>
                                        <button
                                            type="button"
                                            className="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
                                            aria-label="Close error alert"
                                            onClick={() => setErrorAlert(false)}
                                        >
                                            <SfIconClose className="hidden md:block" />
                                            <SfIconClose size="sm" className="md:hidden block" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )
            }

            {
                selectShippingAddress && (
                    <>
                        <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
                            <button onClick={goBackToCheckoutPage} type="button">
                                <span className="sr-only">Close panel</span>
                                <ArrowLeft />
                            </button>
                            ใส่ที่อยู่ในการจัดส่ง
                        </header>
                        <main className='p-5 pb-[100px]'>
                            <form action="#" className='flex flex-col gap-y-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor='receiver-name'>ชื่อผู้รับ</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='receiver-name' name='receiver-name' type='text' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='surname'>นามสกุล</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='surname' name='surname' type='text' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='address'>ที่อยู่ (ห้องเลขที่, ตึก, ถนน)</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='address' name='address' type='text' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='province'>จังหวัด</label>
                                    <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='province' name='province' style={{ backgroundImage: "url(" + chevronDropdown + ")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat" }}>
                                        <option value='กรุงเทพมหานคร'>กรุงเทพมหานคร</option>
                                        <option value='สมุทรปราการ'>สมุทรปราการ</option>
                                        <option value='สมุทรสาคร'>สมุทรสาคร</option>
                                        <option value='ปทุมธานี'>ปทุมธานี</option>
                                    </select>
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='district'>เมือง / เขต</label>
                                    <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='district' name='district' style={{ backgroundImage: "url(" + chevronDropdown + ")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat" }}>
                                        <option value='สวนหลวง'>สวนหลวง</option>
                                        <option value='บางกะปิ'>บางกะปิ</option>
                                        <option value='บางนา'>บางนา</option>
                                        <option value='ห้วยขวาง'>ห้วยขวาง</option>
                                    </select>
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='postal-code'>รหัสไปรษณีย์</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='postal-code' name='postal-code' type='text' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='phone'>เบอร์โทรศัพท์</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='phone' name='phone' type='tel' />
                                    <p className="text-xs text-[#474747] mt-[11px]">ที่ให้ต้องการให้ค้นส่งติดต่อแจ้งเมื่อมีการจัดส่ง</p>
                                </div>
                            </form>
                        </main>
                        <footer className="p-5 fixed bottom-0 w-full">
                            <button onClick={() => setOpenSuccess(true)} className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!modified ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!modified}>บันทึกที่อยู่</button>
                        </footer>
                    </>
                )
            }

            {
                selectPayment && (
                    <>
                        <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
                            <button onClick={goBackToCheckoutPage} type="button">
                                <span className="sr-only">Close panel</span>
                                <ArrowLeft />
                            </button>
                            เลือกช่องทางชำระ
                        </header>
                        <main>
                            <label htmlFor="transfer" className='flex justify-between p-5 w-full border-b border-b-[#E3E3E3] items-center'>
                                <div className='text-left'>
                                    <h2 className='text-[#333333] text-sm font-bold'>โอนเงินเข้าบัญชี</h2>
                                    <p className='text-[#969696] text-xs mt-[6px]'>
                                        <img src={banks} />
                                    </p>
                                </div>
                                <div>
                                    <input type="radio" id="transfer" name="payment-method" className='payment-check' checked />
                                    <span className='payment-radios'></span>
                                </div>
                            </label>
                            <label htmlFor="credit" className='flex justify-between p-5 w-full border-b border-b-[#E3E3E3] items-center'>
                                <div className='text-left'>
                                    <h2 className='text-[#333333] text-sm font-bold'>Credit Card</h2>
                                    <p className='text-[#969696] text-xs flex items-center gap-x-3'>
                                        <img src={visaIcon} />
                                        5689 .... 1234
                                    </p>
                                </div>
                                <div>
                                    <input type="radio" id="credit" name="payment-method" className='payment-check' />
                                    <span className='payment-radios'></span>
                                </div>
                            </label>

                            <div className='p-5'>
                                <button className='bg-[#F4F4F4] p-5 rounded-[7px] w-full' onClick={clickToAddCard}>
                                    <div className='flex gap-x-[7px] justify-center'>
                                        <MarkerPin01 />
                                        เพิ่มบัตรเครดิตการ์ด
                                    </div>
                                </button>
                            </div>
                        </main>
                        <footer className='p-5 absolute bottom-0 w-full'>
                            <button onClick={formik.handleSubmit} type='submit' className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full bg-[#111111] border border-[#111111]`}>ยืนยันการเลือก</button>
                        </footer>
                    </>
                )
            }

            {
                addCard && (
                    <>
                        <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
                            <button onClick={clickToSelectPayment} type="button">
                                <span className="sr-only">Close panel</span>
                                <ArrowLeft />
                            </button>
                            เพิ่มบัตรเครดิตการ์ด
                        </header>
                        <main className='p-5'>
                            <form action="#" className='flex flex-col gap-y-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor='card-number'>หมายเลขบัตร</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='card-number' name='card-number' type='text' placeholder='0-000-000-00-0-0' />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor='card-name'>ชื่อที่แสดงบนบัตร</label>
                                    <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='card-name' name='card-name' type='text' />
                                </div>

                                <div className='flex gap-x-[11px]' style={{ width: "calc(100% - 11px)" }}>
                                    <div className='flex flex-col w-1/2'>
                                        <label htmlFor='expiry-date'>วันหมดอายุ</label>
                                        <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='expiry-date' name='expiry-date' type='text' placeholder='12/25' />
                                    </div>
                                    <div className='flex flex-col w-1/2'>
                                        <label htmlFor='cvv'>CVV</label>
                                        <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='cvv' name='cvv' type='text' />
                                        <div className='absolute right-[31px] translate-y-[47px]' onMouseEnter={() => setShowTooltipCVV(tooltipShow)} onMouseLeave={() => setShowTooltipCVV(tooltipHide)}>
                                            <HelpCircle color="#333333" viewBox='0 0 24 24' width='18' height='18' />
                                        </div>
                                        <div className='absolute right-[11px]' style={showTooltipCVV}>
                                            <div className='bg-[#8A8A8A] px-3 py-2 rounded-[12px] text-white right-[18px] z-[9]'>
                                                <p className='text-xs'>เลข 3 ตัว หลังบัตรของคุณ</p>
                                            </div>
                                            <div className='w-[12px] h-[12px] inline-block bg-[#8A8A8A] z-[6] rounded-[1px] rotate-45 relative bottom-[12px] left-[127px]' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </main>
                        <footer className='p-5 absolute bottom-0 w-full'>
                            <button onClick={clickToSelectPayment} type='button' className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full bg-[#111111] border border-[#111111]`}>บันทึกข้อมูลบัตร</button>
                        </footer>
                    </>
                )
            }

            <Transition.Root show={showConfirm} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {if (redeeming === false){setShowConfirm(false)}}}>
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
                        <div className='mt-10 mb-[60px]'>
                          {!redeeming ? (
                            <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333]">
                                ยืนยันการแลกของรางวัล
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-xs text-[#8A8A8A]">
                              หลังจากกด “ยืนยันการแลก” <br/>คุณสามารถเก็บไว้ใช้ภายหลังได้
                              </p>
                            </div>
                          </div>
                          ) : (
                            <div className="mt-3 text-center sm:mt-5">
                              <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333]">
                                ระบบกำลังทำการแลกของรางวัล
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-xs text-[#8A8A8A]">
                                  กรุณารอสักครู่
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        {!redeeming ? (
                        <div className={`mt-6 grid grid-flow-row-dense grid-cols-2 gap-3`}>
                            <button
                              type="button"
                              className='w-full bg-white border border-[#D7D7D7] text-[#111111] rounded-[9px] p-3 text-center'
                              onClick={() => setShowConfirm(false)}
                            >
                              ยกเลิก
                            </button>
                          
                          <button
                            type="button"
                            onClick={() => {
                              setRedeeming(true);
                              formik.handleSubmit();
                            }}
                            className='w-full text-white rounded-[9px] p-3 text-center'
                            style={{background:!redeeming ? "linear-gradient(133.91deg, #F16A28 1.84%, #F9A30F 100%)" : "#C5C5C5"}}
                            >
                            ยืนยันการแลก
                          </button>
                        </div>
                        ) : (
                          <div className="loading-icon">
                            <div className="inner-icon"></div>
                          </div>
                        )}
                      </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition.Root>
        </>
    );

}

export default GiftCheckout
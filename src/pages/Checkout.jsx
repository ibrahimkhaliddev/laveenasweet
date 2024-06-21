import { useState, useEffect } from 'react';
import { SfCheckbox, SfButton, SfIconCheckCircle, SfIconClose, SfLink } from '@storefront-ui/react';
import { useCart } from '../hooks/useCart';
import PaymentMethods from '../components/PaymentMethods';
import AddressCard from '../components/AddressCard';
import { useFrappeGetCall, useFrappePostCall } from 'frappe-react-sdk';
import { useFormik } from 'formik';
import { orderSchema } from '../components/forms/orderSchema';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MarkerPin01, ChevronRight, HelpCircle } from '@untitled-ui/icons-react';
import chevronDropdown from '../img/chevron-right.svg'
import { useProducts } from '../hooks/useProducts'
import { ShoppingBag01 } from '@untitled-ui/icons-react';
import banks from '../img/banks.svg'
import visaIcon from '../img/visa-icon.svg'

const Checkout = () => {
    const { cart, cartCount, getTotal, resetCart } = useCart();
    const navigate = useNavigate();

    const { getByItemCode } = useProducts()

    const [modified, setModified] = useState(false)

    const { call, isCompleted, result } = useFrappePostCall('headless_e_commerce.api.place_order');

    const [checkoutPage, setCheckoutPage] = useState(true)
    const [selectShippingAddress, setSelectShippingAddress] = useState(false)
    const [selectPayment, setSelectPayment] = useState(false)
    const [addCard, setAddCard] = useState(false);

    const [delivery, setDelivery] = useState(59)
    const [discount, setDiscount] = useState(99)

    const total = getTotal() + delivery - discount

    const formik = useFormik({
        initialValues: {
            billing_address: '',
            shipping_address: '',
            use_different_shipping: false,
            loyalty_points: '',
            items: cart,
            payment_method: 'bank-transfer',
        },
        validationSchema: orderSchema,
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
      visibility:"hidden",
      opacity:"0",
      transform:"translateY(9px)",
      transition:"all 300ms"
    }

    const tooltipShow = {
      visibility:"visible",
      opacity:"1",
      transform:"translateY(6px)",
      filter:"drop-shadow(0 12px 16px #10182814)",
      transition:"all 300ms",
    }

    const [showTooltipCVV, setShowTooltipCVV] = useState(tooltipHide);

    const [informationAlert, setInformationAlert] = useState(false);
    const [positiveAlert, setPositiveAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const switchToShippingAddress = () => {
      setCheckoutPage(false);
      setSelectShippingAddress(true)
    }

    const goBackToCheckoutPage = () => {
      setCheckoutPage(true);
      setSelectShippingAddress(false);
      setSelectPayment(false)
    }

    const switchToSelectPayment = () => {
      setCheckoutPage(false);
      setSelectPayment(true);
    }

    const clickToAddCard = () => {
      setSelectPayment(false);
      setAddCard(true)
    }

    const clickToSelectPayment = () => {
      setAddCard(false);
      setSelectPayment(true);
    }

    return (
    <>
      {checkoutPage && (
        <>
        <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
          <button onClick={() => location.href = "/"} type="button">
            <span className="sr-only">Close panel</span>
            <ArrowLeft />
          </button>
          ทั้งหมด ฿ {getTotal()}
        </header>
        <header className='bg-black text-white text-center py-[10px]'>
          กดรับของขวัญฟรี 🎁
        </header>
        <div className='flex flex-col md:flex-row justify-center'>
            <form action="#" className="p-4 md:w-3/5 flex gap-4 flex-wrap text-neutral-900">
              <button className='flex justify-between items-center py-2 w-full' onClick={(e) => {e.preventDefault();switchToShippingAddress();}}>
                <div className='flex gap-x-[10px]'>
                  <MarkerPin01 />
                  ที่อยู่ในการจัดส่ง
                </div>
                <div>
                  <ChevronRight />
                </div>
              </button>
                <AddressOptions
                    onChange={(value) => {
                      formik.setFieldValue('billing_address', value);
                    }}
                    onClick={(e) => e.preventDefault()}
                    value={formik.values.billing_address}
                    error={formik.errors.billing_address}
                />
                {/* <label className="w-full flex items-center gap-2">
                    <SfCheckbox
                        name="use_different_shipping"
                        onChange={formik.handleChange}
                        checked={formik.values.use_different_shipping} />
                    Use different shipping address
                </label>
                {
                    formik.values.use_different_shipping && (
                        <AddressOptions
                            onChange={value => formik.setFieldValue('shipping_address', value)}
                            value={formik.values.shipping_address}
                            error={formik.errors.shipping_address}
                        />
                    )
                } */}
                <PaymentMethods onChange={value => formik.setFieldValue('payment_method', value)} value={formik.values.payment_method} error={formik.errors.payment_method} />
            </form>
            <div className='p-4 md:w-2/5'>
              <div className="flex justify-between items-end py-4">
                <p className="typography-headline-4 font-bold md:typography-headline-3 gap-x-2 flex">
                  <ShoppingBag01 />
                  Order Summary
                </p>
                <p className="typography-text-base font-medium">(Items: {cartCount})</p>
              </div>
              <div className="md:shadow-lg md:rounded-md md:border md:border-neutral-100">
                <ul role="list" className="divide-y divide-gray-200">
                  {
                    Object.entries(cart).map(([itemCode, qty]) => {
                      const product = getByItemCode(itemCode)
                      return (
                        <li key={itemCode} className="flex pb-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src={product?.website_image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{product?.name}</a>
                                </h3>
                                <p className="ml-4">{product?.formatted_price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">Salmon</p>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
                    <div className="py-4 mt-3 md:pb-6 md:mt-0 border-t border-neutral-200">
                        <h2 className='text-black font-bold text-[15px] mb-[18px]'>รายละเอียดการชำระเงิน</h2>
                        <div className="flex justify-between typography-text-base pb-4">
                            <div className="flex flex-col grow pr-2 gap-y-5 text-sm">
                              <p>ยอดรวม</p>
                              <p>โค้ดส่วนลด</p>
                              <p>ค่าจัดส่ง</p>
                            </div>
                            <div className="flex flex-col text-right">
                              <p>฿ {getTotal()}</p>
                              <p>-฿ {discount}</p>
                              <p className="my-2">฿ {delivery}</p>
                            </div>
                        </div>
                        {/* {promoCode ? (
                            <div className="flex items-center mb-5 py-5 border-y border-neutral-200">
                                <p>PromoCode</p>
                                <SfButton size="sm" variant="tertiary" className="ml-auto mr-2" onClick={removePromoCode}>
                                    Remove
                                </SfButton>
                                <p>{formatPrice(promoCode)}</p>
                            </div>
                        ) : (
                            <form className="flex gap-x-2 py-4 border-y border-neutral-200 mb-4" onSubmit={checkPromoCode}>
                                <SfInput
                                    value={inputValue}
                                    placeholder="Enter promo code"
                                    wrapperClassName="grow"
                                    onChange={(event) => setInputValue(event.target.value)}
                                />
                                <SfButton type="submit" variant="secondary">
                                    Apply
                                </SfButton>
                            </form>
                        )} */}
                        {/* <p className="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
                            You are saving ${Math.abs(orderDetails.savings).toFixed(2)} on your order today!
                        </p> */}
                        <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 text-[#010101]">
                          <p>ทั้งหมด</p>
                          <p>฿ {total}</p>
                        </div>
                        <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 text-[#010101]">
                          <p>Points ที่คุณจะได้รับ</p>
                          <p>Points 149</p>
                        </div>
                        <SfButton size="lg" className="w-full" style={{backgroundColor:"black"}} onClick={(e) => {e.preventDefault();switchToSelectPayment()}}>
                            ชำระเงิน
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
      )}

        {selectShippingAddress && (
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
                  <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='surname' name='surname' type='text'/>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='address'>ที่อยู่ (ห้องเลขที่, ตึก, ถนน)</label>
                  <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='address' name='address' type='text'/>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='province'>จังหวัด</label>
                  <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='province' name='province' style={{backgroundImage:"url(" + chevronDropdown + ")",backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat"}}>
                    <option value='กรุงเทพมหานคร'>กรุงเทพมหานคร</option>
                    <option value='สมุทรปราการ'>สมุทรปราการ</option>
                    <option value='สมุทรสาคร'>สมุทรสาคร</option>
                    <option value='ปทุมธานี'>ปทุมธานี</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='district'>เมือง / เขต</label>
                  <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='district' name='district' style={{backgroundImage:"url(" + chevronDropdown + ")",backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat"}}>
                    <option value='สวนหลวง'>สวนหลวง</option>
                    <option value='บางกะปิ'>บางกะปิ</option>
                    <option value='บางนา'>บางนา</option>
                    <option value='ห้วยขวาง'>ห้วยขวาง</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='postal-code'>รหัสไปรษณีย์</label>
                  <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='postal-code' name='postal-code' type='text'/>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='phone'>เบอร์โทรศัพท์</label>
                  <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='phone' name='phone' type='tel'/>
                  <p className="text-xs text-[#474747] mt-[11px]">ที่ให้ต้องการให้ค้นส่งติดต่อแจ้งเมื่อมีการจัดส่ง</p>
                </div>
              </form>
            </main>
            <footer className="p-5 fixed bottom-0 w-full">
              <button onClick={() => setOpenSuccess(true)} className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!modified ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!modified}>บันทึกที่อยู่</button>
            </footer>
          </>
      )}

      {selectPayment && (
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
                <input type="radio" id="transfer" name="payment-method" className='payment-check' checked/>
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
                <input type="radio" id="credit" name="payment-method" className='payment-check'/>
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
      )}

      {addCard && (
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
                <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='card-number' name='card-number' type='text' placeholder='0-000-000-00-0-0'/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='card-name'>ชื่อที่แสดงบนบัตร</label>
                <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='card-name' name='card-name' type='text'/>
              </div>

              <div className='flex gap-x-[11px]' style={{width:"calc(100% - 11px)"}}>
                <div className='flex flex-col w-1/2'>
                  <label htmlFor='expiry-date'>วันหมดอายุ</label>
                  <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='expiry-date' name='expiry-date' type='text' placeholder='12/25'/>
                </div>
                <div className='flex flex-col w-1/2'>
                  <label htmlFor='cvv'>CVV</label>
                  <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='cvv' name='cvv' type='text'/>
                  <div className='absolute right-[31px] translate-y-[47px]' onMouseEnter={() => setShowTooltipCVV(tooltipShow)} onMouseLeave={() => setShowTooltipCVV(tooltipHide)}>
                    <HelpCircle color="#333333" viewBox='0 0 24 24' width='18' height='18'/>
                  </div>
                  <div className='absolute right-[11px]' style={showTooltipCVV}>
                    <div className='bg-[#8A8A8A] px-3 py-2 rounded-[12px] text-white right-[18px] z-[9]'>
                      <p className='text-xs'>เลข 3 ตัว หลังบัตรของคุณ</p>
                    </div>
                    <div className='w-[12px] h-[12px] inline-block bg-[#8A8A8A] z-[6] rounded-[1px] rotate-45 relative bottom-[12px] left-[127px]'/>
                  </div>
                </div>
              </div>
            </form>
          </main>
          <footer className='p-5 absolute bottom-0 w-full'>
            <button onClick={clickToSelectPayment} type='button' className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full bg-[#111111] border border-[#111111]`}>บันทึกข้อมูลบัตร</button>
          </footer>
        </>
      )}
      </>
    );

}

export default Checkout

function AddressOptions({
    value,
    onChange,
    error
}) {
    const { data } = useFrappeGetCall('headless_e_commerce.api.get_addresses', null, `addresses-0`)

    return (
        <>
            <div className="flex flex-wrap gap-4 lg:gap-6">
                {data?.message?.map(({ name: nameVal, address_title, address_line2 = null, city, state, country }) => (
                    <label key={nameVal} className="relative xs:w-full md:w-auto" onClick={(e) => {
                      e.preventDefault();
                      onChange(nameVal)
                    }}>
                        <div className={`cursor-pointer rounded-md -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 ${value == nameVal ? "border-primary-300 bg-primary-100 outline outline-2 outline-primary-700" : ""}`}>
                            <AddressCard title={address_title} addressLine2={address_line2} city={city} state={state === "Select One" ? null : state} country={country} />
                        </div>
                    </label>
                ))}
            </div>
            {
                error && <p className="text-negative-600">Please select an address</p>
            }
        </>
    );
}

import React, { useState } from 'react'
import { SfButton, SfDrawer, useTrapFocus, SfIconAdd, SfIconRemove } from '@storefront-ui/react'
import { CSSTransition } from 'react-transition-group';
import { useCart } from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Ticket02 } from '@untitled-ui/icons-react';

import { useRef } from 'react';

const Cart = () => {
    const { cart, cartCount, addToCart, removeFromCart, getTotal, isOpen, setIsOpen } = useCart()
    const nodeRef = useRef(null);
    const drawerRef = useRef(null);
    const { getByItemCode } = useProducts()
    const navigate = useNavigate()

    useTrapFocus(drawerRef, { activeState: isOpen });

    const [cartPage, setCartPage] = useState(true);
    const [selectShippingOption, setSelectShippingOption] = useState(false)

    const goToSelectShipping = () => {
      setSelectShippingOption(true);
      setCartPage(false)
    }

    const goBackToCartPage = () => {
      setCartPage(true);
      setSelectShippingOption(false)
    }

    const accessToCheckout = () => {
      location.href = "/checkout"
    }

    return (
        <CSSTransition
            ref={nodeRef}
            in={isOpen}
            timeout={200}
            unmountOnExit
            classNames={{
                enter: 'translate-x-full',
                enterActive: 'translate-x-0',
                enterDone: 'translate-x-0 transition duration-300 ease-in-out',
                exitDone: 'translate-x-0',
                exitActive: 'translate-x-full transition duration-300 ease-in-out',
            }}
        >
            <SfDrawer
                ref={drawerRef}
                placement='right'
                open
                onClose={() => setIsOpen(false)}
                className="bg-neutral-50 w-full z-[999] overflow-y-auto"
            >
                {cartPage && (
                  <>
                    <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
                      <button onClick={() => setIsOpen(false)} type="button">
                        <span className="sr-only">Close panel</span>
                        <ArrowLeft />
                      </button>
                      ทั้งหมด ฿ {getTotal()}
                    </header>
                    <header className='bg-black text-white text-center py-[10px]'>
                      กดรับของขวัญฟรี 🎁
                    </header>
                    <div className="flex flex-col bg-white shadow-xl" style={{height:"calc(100% - 429px)"}}>
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        {/* <div className="flex items-start justify-between">
                            <div className="ml-3 flex h-7 items-center">
                                <button onClick={() => setIsOpen(false)} type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Close panel</span>
                                    <ArrowLeft />
                                </button>
                            </div>
                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">ทั้งหมด ฿ {getTotal()}</h2>
                        </div> */}

                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200 overflow-y-auto">
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

                                                        <div className="flex flex-1 items-center justify-between text-sm">
                                                            <div className="flex items-center justify-between mt-4 sm:mt-0">
                                                                <div className="flex border border-neutral-300 rounded-md">
                                                                    <SfButton
                                                                        type="button"
                                                                        variant="tertiary"
                                                                        disabled={cart[itemCode] === 1}
                                                                        square
                                                                        className="rounded-r-none"
                                                                        aria-controls={null}
                                                                        aria-label="Decrease value"
                                                                        onClick={() => addToCart(itemCode, cart[itemCode] - 1)}
                                                                    >
                                                                        <SfIconRemove />
                                                                    </SfButton>
                                                                    <input
                                                                        type="number"
                                                                        role="spinbutton"
                                                                        className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                                                                        value={cart[itemCode]}
                                                                        onChange={null}
                                                                    />
                                                                    <SfButton
                                                                        type="button"
                                                                        variant="tertiary"
                                                                        square
                                                                        className="rounded-l-none"
                                                                        aria-controls={null}
                                                                        aria-label="Increase value"
                                                                        onClick={() => addToCart(itemCode)}
                                                                    >
                                                                        <SfIconAdd />
                                                                    </SfButton>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <button onClick={() => removeFromCart(itemCode)} type="button" className="font-medium text-primary-700 hover:text-primary-600">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 fixed bottom-0 w-full bg-white">
                      <div className='border-y border-y-[#E3E3E3] py-4'>
                        <label htmlFor='coupon-pro'>โปรโมชั่นและส่วนลด</label>
                        <div className='flex gap-x-5 mt-4'>
                          <input type="text" id="coupon-pro" name="coupon-pro" placeholder="โปรดใส่โค้ดส่วนลด" className="border-b border-b-[#141414] w-full outline-none" autoComplete="off" onClick={(e) => e.target.focus()}/>
                          <button className='border-[2px] border-black p-2 rounded-md w-[68px] text-sm'>ใช้โค้ด</button>
                        </div>
                        <button className='flex gap-x-2 text-[#5B6CFF] mt-5 text-sm'>
                          <Ticket02 />
                          ใช้คูปองที่คุณเก็บไว้
                        </button>
                      </div>
                      <div className='mt-4'>
                        <h2>รายละเอียดการชำระเงิน</h2>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>ยอดรวม</p>
                          <p>฿ {getTotal()}</p>
                        </div>
                        <SfButton className="w-full mt-[22px]" style={{backgroundColor:cartCount == 0 ? "#C5C5C5" : "black",color:"white"}} disabled={cartCount == 0} onClick={goToSelectShipping}>
                          ดำเนินการสั่งซื้อสินค้า
                        </SfButton>
                      </div>
                    </div>
                  </>
                )}

                {selectShippingOption && (
                  <>
                    <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
                      <button onClick={goBackToCartPage} type="button">
                        <span className="sr-only">Close panel</span>
                        <ArrowLeft />
                      </button>
                      เลือกวิธีการรับสินค้า
                    </header>
                    <main>
                      <button className='flex justify-between p-5 w-full border-b border-b-[#E3E3E3] items-center' onClick={accessToCheckout}>
                        <div className='text-left'>
                          <h2 className='text-[#333333] text-sm font-bold'>จัดส่งไปยังที่อยู่ของฉัน</h2>
                          <p className='text-[#969696] text-xs'>รอรับสินค้าถึงหน้าบ้านรวดเร็วทันใจ</p>
                        </div>
                        <div>
                          <ChevronRight />
                        </div>
                      </button>
                      <button className='flex justify-between p-5 w-full border-b border-b-[#E3E3E3] items-center' onClick={accessToCheckout}>
                        <div className='text-left'>
                          <h2 className='text-[#333333] text-sm font-bold'>ไปรับที่หน้าร้าน หรือ ที่สาขา</h2>
                          <p className='text-[#969696] text-xs'>รับสินค้าของคุณได้ฟรีที่จุดบริการ</p>
                        </div>
                        <div>
                          <ChevronRight />
                        </div>
                      </button>
                    </main>
                  </>
                )}
            </SfDrawer>
        </CSSTransition>
    );

    // return (
    //     <aside className={`w-1/4 p-4 fixed top-0 right-0 overflow-y-auto h-full transition-all ease-in-out duration-500 ${isOpen ? "" : "translate-x-full"}`}>
    //         <div className="relative">
    //             <div className="fixed overflow-hidden">
    //                 <div className="fixed  overflow-hidden">
    //                     <div className="pointer-events-none fixed inset-y-0 right-0 flex pl-10">

    //                         <div className="pointer-events-auto w-screen max-w-md">
    //                             <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
    //                                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
    //                                     <div className="flex items-start justify-between">
    //                                         <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
    //                                         <div className="ml-3 flex h-7 items-center">
    //                                             <button onClick={() => setIsOpen(false)} type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
    //                                                 <span className="sr-only">Close panel</span>
    //                                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //                                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //                                                 </svg>
    //                                             </button>
    //                                         </div>
    //                                     </div>

    //                                     <div className="mt-8">
    //                                         <div className="flow-root">
    //                                             <ul role="list" className="-my-6 divide-y divide-gray-200">
    //                                                 {
    //                                                     Object.entries(cart).map(([itemCode, qty]) => {
    //                                                         const product = getByItemCode(itemCode)
    //                                                         return (
    //                                                             <li key={itemCode} className="flex py-6">
    //                                                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
    //                                                                     <img src={product?.website_image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
    //                                                                 </div>

    //                                                                 <div className="ml-4 flex flex-1 flex-col">
    //                                                                     <div>
    //                                                                         <div className="flex justify-between text-base font-medium text-gray-900">
    //                                                                             <h3>
    //                                                                                 <a href="#">{product?.name}</a>
    //                                                                             </h3>
    //                                                                             <p className="ml-4">{product?.formatted_price}</p>
    //                                                                         </div>
    //                                                                         <p className="mt-1 text-sm text-gray-500">Salmon</p>
    //                                                                     </div>

    //                                                                     <div className="flex flex-1 items-center justify-between text-sm">
    //                                                                         <div className="flex items-center justify-between mt-4 sm:mt-0">
    //                                                                             <div className="flex border border-neutral-300 rounded-md">
    //                                                                                 <SfButton
    //                                                                                     type="button"
    //                                                                                     variant="tertiary"
    //                                                                                     disabled={cart[itemCode] === 1}
    //                                                                                     square
    //                                                                                     className="rounded-r-none"
    //                                                                                     aria-controls={null}
    //                                                                                     aria-label="Decrease value"
    //                                                                                     onClick={() => addToCart(itemCode, cart[itemCode] - 1)}
    //                                                                                 >
    //                                                                                     <SfIconRemove />
    //                                                                                 </SfButton>
    //                                                                                 <input
    //                                                                                     type="number"
    //                                                                                     role="spinbutton"
    //                                                                                     className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
    //                                                                                     value={cart[itemCode]}
    //                                                                                     onChange={null}
    //                                                                                 />
    //                                                                                 <SfButton
    //                                                                                     type="button"
    //                                                                                     variant="tertiary"
    //                                                                                     square
    //                                                                                     className="rounded-l-none"
    //                                                                                     aria-controls={null}
    //                                                                                     aria-label="Increase value"
    //                                                                                     onClick={() => addToCart(itemCode)}
    //                                                                                 >
    //                                                                                     <SfIconAdd />
    //                                                                                 </SfButton>
    //                                                                             </div>
    //                                                                         </div>
    //                                                                         <div className="flex">
    //                                                                             <button onClick={() => removeFromCart(itemCode)} type="button" className="font-medium text-primary-700 hover:text-primary-600">Remove</button>
    //                                                                         </div>
    //                                                                     </div>
    //                                                                 </div>
    //                                                             </li>
    //                                                         )
    //                                                     })
    //                                                 }

    //                                             </ul>
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    //                                     <div className="flex justify-between text-base font-medium text-gray-900">
    //                                         <p>Subtotal</p>
    //                                         <p>฿ {getTotal()}</p>
    //                                     </div>
    //                                     <p className="my-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
    //                                     <SfButton className="w-full" disabled={cartCount == 0} onClick={() => { setIsOpen(false); navigate("/checkout"); }}>
    //                                         Checkout
    //                                     </SfButton>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </aside>
    // )

}

export default Cart
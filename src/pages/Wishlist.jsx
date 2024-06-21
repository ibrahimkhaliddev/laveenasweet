import { useCart } from '../hooks/useCart';
import { ShoppingBag01, ChevronRight, ArrowLeft } from "@untitled-ui/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFrappeGetCall, useFrappePostCall } from 'frappe-react-sdk';
import { useProducts } from '../hooks/useProducts'

const Wishlist = () => {
  const navigate = useNavigate();

  const { getByItemCode } = useProducts()

  const [modified, setModified] = useState(false)

  const { call, isCompleted, result } = useFrappePostCall('headless_e_commerce.api.place_order');
  const { cart, cartCount, setIsOpen } = useCart()

  const [activeOne, setActiveOne] = useState(true);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  const switchToActiveOne = () => {
    setActiveOne(true);
    setActiveTwo(false);
    setActiveThree(false);
  }

  const switchToActiveTwo = () => {
    setActiveOne(false);
    setActiveTwo(true);
    setActiveThree(false);
  }

  const switchToActiveThree = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(true);
  }

  return (
    <>
      <header className="border-b p-[14px] border-b-[#F2F2F2] text-md font-bold bg-white flex justify-between items-center fixed w-full bg-white top-0 z-[999]">
        <div className="flex items-center gap-x-[7px]">
          <Link to='/my-account'>
            <ArrowLeft />
          </Link>
          รายการสินค้าที่ถูกใจ
        </div>

        <div className="flex items-center">
          <button className="px-2" onClick={() => setIsOpen(true)}>
            <ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>
          </button>
        </div>
      </header>
      <main className='mt-[53px]'>
        <nav className="border-b border-b-[#F2F2F2]">
          <ul className="flex">
            <li className="h-[50px] basis-1/3 flex items-center justify-center gap-x-1 relative" onClick={switchToActiveOne}>
              <span className='text-[#111111] font-bold text-[15px]'>ทั้งหมด</span>
              <span className='inter text-[#8A8A8A] text-xs mt-[2px]'>(2)</span>

              <div className={`absolute h-[2px] ${activeOne ? "w-full border-anim" : ""} left-0 bg-black bottom-0`}></div>
            </li>
            <li className="h-[50px] basis-1/3 flex items-center justify-center gap-x-1 relative" onClick={switchToActiveTwo}>
              <span className='text-[#111111] font-bold text-[15px]'>มีสินค้า</span>
              <span className='inter text-[#8A8A8A] text-xs mt-[2px]'>(1)</span>

              <div className={`absolute h-[2px] ${activeTwo ? "w-full border-anim" : ""} left-0 bg-black bottom-0`}></div>
            </li>
            <li className="h-[50px] basis-1/3 flex items-center justify-center gap-x-1 relative" onClick={switchToActiveThree}>
              <span className='text-[#111111] font-bold text-[15px]'>สินค้าหมด</span>
              <span className='inter text-[#8A8A8A] text-xs mt-[2px]'>(1)</span>

              <div className={`absolute h-[2px] ${activeThree ? "w-full border-anim" : ""} left-0 bg-black bottom-0`}></div>
            </li>
          </ul>
        </nav>

        {activeOne && (
          <section className='p-5'>
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
                        <p className="mt-1 text-sm text-gray-500 mb-5">Salmon</p>

                        <button className='w-full bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'>ใส่ตะกร้า</button>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
        )}
      </main>
    </>
  )
}

export default Wishlist;
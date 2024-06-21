import FooterMenu from "../components/FooterMenu"
import searchIcon from '../img/search-md-black.svg'
import { useCart } from '../hooks/useCart';
import { ShoppingBag01, ChevronRight, ArrowLeft } from "@untitled-ui/icons-react";
import { Link } from "react-router-dom";
import newItem from '../img/new-item.png'
import ProductCard from "../components/ProductCard";
import { useProducts } from '../hooks/useProducts'
import { useState } from "react";

const ShopPage = () => {
  const { products } = useProducts()
  const { cartCount, setIsOpen } = useCart()

  const [clickSearch, setClickSearch] = useState(false);

  const onClickSearch = () => {
    setClickSearch(true);
    document.getElementById('search').focus();
  }

  return (
    <>
      <header className={`${clickSearch ? "py-[9px] px-[14px]" : "p-[14px]"} border-b border-b-[#F2F2F2] text-md font-bold bg-white flex justify-between items-center fixed w-full bg-white top-0 z-[999]`}>
        <div className="flex items-center gap-x-[7px]">
          <Link to='/categories'>
            <ArrowLeft />
          </Link>
          ไอเท็มใหม่
        </div>

        <div className="flex items-center">
          {!clickSearch ? (
            <button className="px-2" onClick={onClickSearch}>
              <img src={searchIcon} />
            </button>
          ) : (
            <>
              <img src={searchIcon} className="absolute translate-x-[10px]"/>
              <input type="search" id='search' className="p-[7px] pl-10 bg-[#E6E6E6] h-[34px] rounded-[9px] font-medium w-full text-[13px]" placeholder='พิมพ์ชื่อสินค้า แบรนด์ ลักษณะสินค้า' onBlur={() => setClickSearch(false)}/>
            </>
          )}
          <button className="px-2" onClick={() => setIsOpen(true)}>
            <ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>
          </button>
        </div>
      </header>
      <header className='bg-black text-white text-center py-[10px] mt-[53px]'>
        สมาชิกใหม่รับ ของขวัญฟรี กดรับเลย !! 🎁
      </header>
      <main>
        <div className="p-5">
          <img src={newItem} width="100%"/>
        </div>

        <div className="border-b border-b-[#F2F2F2] flex">
          <Link to='/shop/filter' className='block p-4 w-1/2 border-r border-r-[#F2F2F2] text-center'>ประเภทสินค้า</Link>
          <Link to='/shop/type' className='block p-4 w-1/2 text-center'>ลักษณะสินค้า</Link>
        </div>

        <section className="p-5 flex flex-wrap justify-between gap-y-[14px]">
          {(products ?? []).map((product) => (
              <ProductCard
                key={product.item_code}
                title={product.name}
                productId={product.name}
                itemCode={product.item_code}
                price={product.formatted_price}
                thumbnail={product.website_image ? product.website_image : "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"} 
              />
          ))}
        </section>
      </main>
    </>
  )
}

export default ShopPage
import { useCounter } from 'react-use';
import { clamp } from '@storefront-ui/shared';
import { React, useState, useContext } from 'react';
import {
    SfButton,
    SfLink,
    SfIconShoppingCart,
    SfIconSell,
    SfIconPackage,
    SfIconRemove,
    SfIconAdd,
    SfIconWarehouse,
    SfIconSafetyCheck,
    SfIconShoppingCartCheckout,
    SfIconFavorite,
    SfIconArrowForward,
    SfScrollable
} from '@storefront-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { ArrowLeft, ShoppingBag01, Heart, CoinsStacked01, Truck01, AnnotationDots, Share04, SwitchHorizontal01 } from '@untitled-ui/icons-react';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';
import TitleHeader from '../components/TitleHeader';
import shopeeIcon from '../img/shopeeIcon.svg'
import lazadaIcon from '../img/lazadaIcon.svg'
import tiktokIcon from '../img/tiktokIcon.svg'

const ProductCompare = () => {
  const { id } = useParams();
  const { get, products } = useProducts();
  const { cart, addToCart, cartCount, setIsOpen } = useCart();
  const product = get(id);
  const inputId = "useId('input')";

  return (
    <>
      <TitleHeader title="เปรียบเทียบสินค้า" link="/product/:id" />
      <main className='p-5'>
        <h2>เปรียบเทียบสินค้า<br/>จากช่องทางอื่น</h2>
        <p>คุณสามารถเปรียบเทียบราคาสินค้าชิ้นเดียวกัน<br/>ในแต่ละช่องทางอื่น ๆ ได้ที่นี่</p>

        <div className='flex gap-x-5'>
          <div className='w-1/3'>
            <img
              src={`${product?.website_image}`}
              className="object-contain rounded-[9px]"
              aria-label={product?.website_image}
              alt={product?.website_image}
            />
          </div>
          <div className='w-2/3'>
            <h1 className="mb-1 font-bold typography-headline-4 inter">
              {product?.item_name}
            </h1>
            <strong className="block font-bold typography-headline-3 inter">{product?.formatted_price}</strong>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td><img src={shopeeIcon} /></td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default ProductCompare;
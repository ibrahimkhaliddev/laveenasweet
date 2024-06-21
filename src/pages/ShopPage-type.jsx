import React, { useCallback, useEffect, useRef, useState } from 'react'
import TitleHeader from "../components/TitleHeader"
import Accordion from '../components/Accordion'
import { Link } from 'react-router-dom'

const ShopPageType = ({min, max, onChange}) => {
  const [accordionActiveOne, setAccordionActiveOne] = useState(false);
  const [accordionActiveTwo, setAccordionActiveTwo] = useState(false);
  const [accordionActiveThree, setAccordionActiveThree] = useState(false);
  const [accordionActiveFour, setAccordionActiveFour] = useState(false);

  const sizeRef = useRef(null);

  const productTypes = [
    {
      key:'shirt-one',
      text:'เสื้อท่อนบน'
    },
    {
      key:'shirt-two',
      text:'เสื้อผ้าท่อนล่าง'
    },
    {
      key:'skirt',
      text:'กระโปรง'
    },
    {
      key:'pants',
      text:'กางเกง'
    },
    {
      key:'shoes',
      text:'รองเท้า'
    }
  ];

  const productSizes = [36, 37, 38, 39, 40, 41]

  const productColours = [
    {
      key:'orange',
      colour:'#F54E06',
      text:'ส้ม'
    },
    {
      key:'black',
      colour:'#000000',
      text:'ดำ'
    },
    {
      key:'purple',
      colour:'#AD00FF',
      text:'ม่วง'
    },
    {
      key:'green',
      colour:'#009521',
      text:'เขียว'
    },
    {
      key:'brown',
      colour:'#660000',
      text:'น้ำตาล'
    }
  ]

  const hideClearSearch = {
    visibility: "hidden",
    opacity: "0",
    transition: "all 200ms"
  }

  const showClearSearch = {
    visibility: "visible",
    opacity: "1",
    transition: "all 200ms"
  }

  const itemLists = [
    {
      title:(
        <div className='flex justify-between w-full pr-[14px] items-center'>
          <div>ประเภทสินค้า</div>
          <div className={`text-[#5B6CFF] text-xs`} style={accordionActiveOne ? showClearSearch : hideClearSearch} onClick={() => {
            setAccordionActiveOne(false)
          }}>เคลียร์การค้นหา</div>
        </div>
      ),
      content:(
        <div className='flex flex-col gap-y-[30px] w-full'>
          {productTypes.map((type) => 
            <label htmlFor={type.key} className='flex items-center gap-x-[14px]'>
              <input type='checkbox' name='product-type' id={type.key} className='product-type-input' onClick={(e) => {e.target.checked ? setAccordionActiveOne(true) : setAccordionActiveOne(false)}}/>
              <span className='product-type-checkbox'/>
              {type.text}
            </label>
          )}
        </div>
      )
    },
    {
      title:(
        <div className='flex justify-between w-full pr-[14px] items-center'>
          <div>ไซส์</div>
          <div className={`text-[#5B6CFF] text-xs`} style={accordionActiveTwo ? showClearSearch : hideClearSearch} onClick={() => {
            setAccordionActiveTwo(false);
          }}>เคลียร์การค้นหา</div>
        </div>
      ),
      content:(
        <div className='flex gap-x-4 gap-y-3 flex-wrap'>
          {productSizes.map((size) => 
            <label htmlFor={size} className='size-btn'>
              <input type="checkbox" name="size" id={size} className='size-input' ref={sizeRef} onClick={(e) => {e.target.checked ? setAccordionActiveTwo(true) : setAccordionActiveTwo(false)}}/>
              <span className='size-text'>{size}</span>
            </label>
          )}
        </div>
      )
    },
    {
      title:(
        <div className='flex justify-between w-full pr-[14px] items-center'>
          <div>สี</div>
          <div className={`text-[#5B6CFF] text-xs`} style={accordionActiveThree ? showClearSearch : hideClearSearch} onClick={() => {
            setAccordionActiveThree(false);
          }}>เคลียร์การค้นหา</div>
        </div>
      ),
      content:(
        <div className='flex gap-x-8 flex-wrap w-full'>
          {productColours.map((colour) => 
            <label htmlFor={colour.key} className='flex flex-col justify-center gap-x-[14px] text-center'>
              <input type='checkbox' name='product-type' id={colour.key} className='product-colour-input' onClick={(e) => {e.target.checked ? setAccordionActiveThree(true) : setAccordionActiveThree(false)}}/>
              <span className='product-colour-checkbox' style={{backgroundColor:colour.colour}}/>
              {colour.text}
            </label>
          )}
        </div>
      )
    },
    {
      title:(
        <div className='flex justify-between w-full pr-[14px] items-center'>
          <div>ราคา</div>
          <div className={`text-[#5B6CFF] text-xs`} style={accordionActiveFour ? showClearSearch : hideClearSearch} onClick={() => {
            setAccordionActiveFour(false);
          }}>เคลียร์การค้นหา</div>
        </div>
      ),
      content:(
        <div>
          <div className='flex justify-between'>
            <input type="number" className='p-[6px] text-center border border-[#D8DADC] rounded-[6px] w-[83px]' id='price-min-num' onClick={(e) => e.target.focus()} onKeyDown={(e) => {if (e.key === "Enter"){document.getElementById('price-min').value = e.target.value}}} />
            <input type="number" className='p-[6px] text-center border border-[#D8DADC] rounded-[6px] w-[83px]' id='price-max-num' onClick={(e) => e.target.focus()} onKeyDown={(e) => {if (e.key === "Enter"){document.getElementById('price-max').value = e.target.value}}}/>
          </div>

          <input type="range" name="price-min" id="price-min" min="0" max="1000"/>
          <input type="range" name="price-max" id="price-max" min="0" max="1000"/>
        </div>
      )
    }
  ]
  return (
    <>
      <TitleHeader link="/shop" title="ประเภทสินค้า" />
      <main className='mt-[53px]'>
        <Accordion items={itemLists}/>
      </main>
      <footer className='flex p-5 gap-x-3 absolute bottom-0 w-full'>
        <button className='w-1/2 bg-white border border-[#111111] text-[#111111] rounded-[9px] p-3 text-center'>เคลียร์การค้นหา</button>
        <button className='w-1/2 bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'>ค้นหาสินค้า</button>
      </footer>
    </>
  )
}

export default ShopPageType
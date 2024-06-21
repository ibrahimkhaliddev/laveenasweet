import React from 'react'
import TitleHeader from "../components/TitleHeader"

const ShopPageFilter = () => {
  const FilterRadio = ({key, text}) => {
    return (
      <label htmlFor={key} className='flex py-5 w-full items-center gap-x-[14px]'>
        <input type="radio" id={key} name="shop-filter" className='shop-filter-check'/>
        <span className='shop-filter-radios' />
        {text}
      </label>
    )
  }
  const filterLists = [
    {
      key:'recommend',
      text:'สินค้าแนะนำ',
    },
    {
      key:'best-seller',
      text:'สินค้าขายดี'
    },
    {
      key:'popular',
      text:'สินค้ามาแรง'
    },
    {
      key:'high-to-low',
      text:'เรียงลำดับราคาสูง - ต่ำ'
    },
    {
      key:'low-to-high',
      text:'เรียงลำดับราคาต่ำ - สูง'
    }
  ]
  return (
    <>
      <TitleHeader link="/shop" title="ประเภทสินค้า" />
      <main className="p-5 mt-[53px]">
        {filterLists.map((list) => 
          <FilterRadio key={list.key} text={list.text} />
        )}
      </main>
      <footer className='p-5'>
        <button onClick={() => setOpenSuccess(true)} className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full bg-[#111111] border border-[#111111]`}>ค้นหา</button>
      </footer>
    </>
  )
}

export default ShopPageFilter
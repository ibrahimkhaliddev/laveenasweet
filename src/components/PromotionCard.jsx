import { Link } from "react-router-dom";
import { SfIconSearch, SfIconArrowForward, SfIconCalendarToday } from '@storefront-ui/react'

const PromotionCard = ({title, image, date, link}) => {
  return (
    <Link to={link} className="min-w-[300px]">
      <h2 className='mb-[5px] text-[#3D3D3D] font-bold flex items-center'>
        เข้าร่วมเลย
        <SfIconArrowForward className="w-[18px] text-black ml-2"/>
      </h2>
      <img src={image} />
      <h2 className='mt-4 text-[#1C1C1C] text-sm font-bold'>{title}</h2>

      <p className='text-[#8A8A8A] mt-[10px] text-xs flex items-center'>
        <SfIconCalendarToday className="w-[11px] mr-[6px]"/>
        {date}
      </p>
    </Link>
  )
}

  export default PromotionCard
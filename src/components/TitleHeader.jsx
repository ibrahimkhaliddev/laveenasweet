import { ArrowLeft } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'

const TitleHeader = ({link, title}) => {
  return (
    <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold fixed w-full bg-white top-0 z-[999]'>
      <Link to={link}>
        <ArrowLeft />
      </Link>
      {title}
    </header>
  )
}

export default TitleHeader
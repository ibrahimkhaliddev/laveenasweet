import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import bgBrand from '../../img/background-login.png'

const Welcome = () => {
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px]'>
        <img src={logo} />
      </header>
      <main className='px-5 py-[46px]'>
        <h1 className='text-[22px] font-bold'>ยินดีต้อนรับสู่ App</h1>
        <p className='mt-4'>ร้านค้าของเราได้รวบรวม ผลิตภัณฑ์ สินค้าแฟชั่น ที่คุ้มค่าเหมาะกับคุณมาไว้ในที่แล้ว</p>
      </main>
      <footer className='flex px-5 gap-x-3'>
        <Link to="/login" className='w-1/2 bg-white border border-[#111111] text-[#111111] rounded-[9px] p-3 text-center'>Login</Link>
        <Link to="/signup" className='w-1/2 bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'>Sign up</Link>
      </footer>
    </>
  )
}

export default Welcome
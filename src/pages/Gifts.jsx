import TitleHeader from '../components/TitleHeader'
import promotion1 from '../img/promotion1.png'
import promotion2 from '../img/promotion2.png'
import promotion3 from '../img/promotion3.png'

const Gifts = () => {
  return (
    <>
      <TitleHeader link='/' title='ของขวัญและดีลต่างๆ'/>
      <main className='p-3 flex flex-col gap-y-[11px]'>
        <img src={promotion1} />
        <img src={promotion2} />
        <img src={promotion3} />
      </main>
    </>
  )
}

export default Gifts
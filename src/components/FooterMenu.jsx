import { Link } from "react-router-dom"
import { Home02, Grid01, Award03, User02, Gift01, ClockRewind } from "@untitled-ui/icons-react"
import { useState } from "react"

const FooterMenu = ({active}) => {
  const Menu = ({icon, title, link, current}) => {
    return (
      <Link to={link} className={`h-[82px] flex flex-col justify-center w-full text-center items-center ${current === active ? "text-[#F0592A]" : "text-[#BBBBBB]"} text-xs gap-y-[10px]`}>
        {icon}
        {title}
      </Link>
    )
  }

  const menuLists = [
    {
      icon:(<Home02 />),
      title:"หน้าหลัก",
      link:"/",
      current:0
    },
    {
      icon:(<Gift01 />),
      title:"แลกรางวัล",
      link:"/categories",
      current:1
    },
    {
      icon:(<ClockRewind />),
      title:"ประวัติ",
      link:"/reward-history",
      current:2
    },
    {
      icon:(<User02 />),
      title:"บัญชี",
      link:"/my-account",
      current:3
    }
  ]
  return (
    <footer className="h-[82px] fixed bottom-0 w-full flex bg-white border-t border-t-[#F1F1F1]">
      {menuLists.map((menu, index) => 
        <Menu icon={menu.icon} title={menu.title} link={menu.link} current={index}/>
      )}
    </footer>
  )
}

export default FooterMenu
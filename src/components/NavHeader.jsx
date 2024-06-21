import {
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
    SfIconMenu,
    SfBadge,
} from '@storefront-ui/react';
import brandLogo from '../img/logo.svg'
import cartIcon from '../img/cart.svg'
import messageIcon from '../img/message-circle.svg'
import banner from '../img/banner.png'
import { useFrappeAuth } from 'frappe-react-sdk';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag01, MessageCircle01  } from '@untitled-ui/icons-react'; 
import hondaLogo from '../img/hondaLogo.png'

const NavHeader = () => {
    const navigate = useNavigate();
    const { cartCount, setIsOpen } = useCart()
    const { currentUser } = useFrappeAuth()

    const actionItems = [
      {
        icon: (<MessageCircle01 />),
        label: '',
        ariaLabel: 'Message',
        role: 'button',
        onClick: () => setIsOpen(true)
      },
      {
        icon: (<ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>),
        label: '',
        ariaLabel: 'Cart',
        role: 'button',
        onClick: () => null,
      },
    ];

    return (
        <header className="flex justify-center w-full z-[999] border-b border-b-[#EBEBEB]">
            <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full m-4 rounded-[9px] justify-center" style={{backdropFilter:"blur(3px)"}}>
                <a
                  href="/"
                  aria-label="SF Homepage"
                  className="flex mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
                >
                  <picture>
                    <source srcSet={hondaLogo} media="(min-width: 768px)" />
                    <img
                      src={hondaLogo}
                      alt="Sf Logo"
                      className="w-[60px]"
                    />
                  </picture>
                </a>
            </div>
        </header>
    )
}

export default NavHeader

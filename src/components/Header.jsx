import React from 'react'
import logo from './../assets/Images/logo.avif'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import HeaderItemLeft from './HeaderItemLeft';
import HeaderItemRight from './HeaderItemRight';
import SearchInput from './SearchInput';
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  const leftmenu = [
    {
      icon: MdKeyboardArrowDown,
      name: 'Product',
    },
    {
      name: 'Hair Care',
      icon: MdKeyboardArrowDown
    },
    {
      name: 'Hair Colour',
      icon: MdKeyboardArrowDown
    },
    {
      name: 'Hair Styling',
      icon: MdKeyboardArrowDown
    },
    {
      name: 'Salon',
      icon: MdKeyboardArrowDown
    }];
  const rightMenu = [
    {
      name2: 'Cart',
      icon2: BsCart2
    },
    {
      name2: 'Account',
      icon2: FaRegUser
    }
  ]


  return (

    <div className="w-full">
      <div className="w-full hidden lg:block h-10 bg-black text-white overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee pt-3 pb-2 text-[12px] font-extrabold">
          <div className='flex gap-3'>
            <span className='flex'>Hair To Dare Sale is Live | Buy 1 Get 1 Free | Coupon Code :
              <span className='font-bold'> BOGO</span></span>
            <span>
              -----
            </span>
            <span className='flex'>Hair To Dare Sale is Live | Buy 1 Get 1 Free | Coupon Code :
              <span className='font-bold'> BOGO</span>
            </span>
            <span>
              -----
            </span>
            <span className='flex'>Hair To Dare Sale is Live | Buy 1 Get 1 Free | Coupon Code :
              <span className='font-bold'> BOGO</span>
            </span>
            <span>
              -----
            </span>
            <span className='flex'>Hair To Dare Sale is Live | Buy 1 Get 1 Free | Coupon Code :
              <span className='font-bold'> BOGO</span>
            </span>
            <span>
              -----
            </span>
            <span className='flex'>Hair To Dare Sale is Live | Buy 1 Get 1 Free | Coupon Code :
              <span className='font-bold'> BOGO</span>
            </span>
            <span>
              -----
            </span>
            <span className='flex'>Hair To Dare Sale is Live | Buy 1 Get 1 Free | Coupon Code :
              <span className='font-bold'> BOGO</span>
            </span>
            <span>
              -----
            </span>
          </div>

        </div>
      </div>
      <div className="flex items-center 
   bg-white z-40 shadow-sm
  justify-between px-4 lg:pt-2 lg:pb-2 pl-10 py-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Icon */}
          <CgMenuLeft className="lg:hidden" size={22} />

          {/* Logo */}
          <img
            className="w-[90px] lg:w-[145px]
            object-contain"
            src={logo}
            alt="Logo"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 items-center">
            {leftmenu.map((item, index) => (
              <HeaderItemLeft
                key={index}
                Icon={item.icon}
                name={item.name}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Mobile Get App */}
          <input
            type="button"
            value="Get App"
            className="lg:hidden bg-black text-white text-xs px-3 py-1 rounded-full"
          />

          {/* Mobile Search */}
          <CiSearch
            className="lg:hidden text-[18px]"
            strokeWidth={1.5}
          />

          {/* Desktop Search */}
          <div className="hidden lg:block relative w-64">
            <CiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2"
              strokeWidth={1.5}
            />
            <SearchInput />
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1">
            <BsCart2 size={18} />
            <span className="text-[14px] font-bold hidden lg:inline">
              Cart
            </span>
          </div>

          {/* Account */}
          <div className="hidden lg:flex items-center gap-1">
            <FaRegUser size={18} />
            <span className="text-[14px] font-bold">
              Account
            </span>
          </div>

        </div>

      </div>
    </div>


  )
}

export default Header
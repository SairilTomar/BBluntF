import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const FooterFixed = () => {
  return (
    <div className=''>
    <div className='block md:hidden fixed flex-col gap-2 bottom-23 right-5 z-50 h-11 w-full pl-7 pr-5'>
       <div className='p-4'>
        <div className='h-9
        rounded-3xl w-83 bg-green-200 text-black text-bold 
        flex flex-row gap-1'>
             <div className='pt-2 pl-1.5'>
                 <BiSolidOffer size={20}/></div>
            <div className='pt-2.5 text-bold text-[12px]'>
                Add 2 more products to unlock BOGO offer
            </div>
        </div>
    </div>
    </div>
    <div className='block md:hidden fixed bottom-1.5'>
        <div className='p-5'>
            <div className='h-12 rounded-3xl w-84 bg-gray-300 text-black flex flex-row gap-2'>
               <div className='pl-4'>
                 <div className='flex flex-row gap-1'>
                    <div className='flex flex-col'>
                    <div className='pt-1 pl-3.5'>
                        <IoHomeOutline size={20}/>
                    </div>
                    <div className='pl-2.5 text-[15px] text-extrabold'>
                        Home
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='pt-1 pl-8.5'>
                        <FaRegUser size={20}/>
                    </div>
                    <div className='pl-4 text-[15px] text-extrabold'>
                        Account
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='pt-1 pl-9'>
                        <IoChatboxEllipsesOutline size={20}/>
                    </div>
                    <div className='pl-7 text-[15px] text-extrabold'>
                        Chat
                    </div>
                </div>
                  <div className='flex flex-col'>
                    <div className='pt-1 pl-11 pr-2'>
                        <CiShoppingCart size={22}/>
                    </div>
                    <div className='pl-9 text-[15px] text-extrabold'>
                        Cart
                    </div>
                </div>
                    </div>
               </div>
                    
               

            </div>

        </div>

    </div>
    </div>
  )
}

export default FooterFixed

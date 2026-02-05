import React from 'react'
import LogoFooter from './../assets/Images/LogoFooter.webp'
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdCash } from "react-icons/io";


const Footer = () => {
  return (
    <>
    <div className='hidden md:block pt-12'>
      <footer className='w-full h-80 bg-black pt-8 pl-25 pr-25'>
        <div className='flex flex-row'>
        <div className='flex flex-col gap-5'> 
             <img className='h-11 w-37' src={LogoFooter} alt='logo'>
                 </img>
                    <div className="flex gap-2 pl-2">
                         <div className="w-6 h-6 rounded-full border border-white 
                          flex items-center justify-center text-white 
                         hover:border-white hover:text-white transition">
                          <LuFacebook size={12} />
                          </div>
                          <div className="w-6 h-6 rounded-full border border-white
                          flex items-center justify-center text-white
                         hover:border-white hover:text-white transition">
                           <FaXTwitter size={12} />
                          </div>
                         <div className="w-6 h-6 rounded-full border border-white 
                         flex items-center justify-center text-white
                       hover:border-white hover:text-white transition">
                        <IoLogoInstagram size={12} />
                         </div>
                        <div className="w-6 h-6 rounded-full border border-white 
                        flex items-center justify-center text-white
                       hover:border-white hover:text-white transition">
                        <CiYoutube size={12} />
                         </div>
                        <div className="w-6 h-6 rounded-full border border-white
                        flex items-center justify-center text-white 
                       hover:border-white hover:text-white transition">
                        <HiOutlineMail size={12} />
                      </div>
                      </div>
                      </div>
    <div className='flex flex-row pl-37 gap-14'>
       <div className='text-[15px] text-white text-bold'>
      About Us
      <div className='flex flex-col gap-5 pt-7'>
        <div className='text-white text-[12px] gap-10'>
              <div className='pb-2 hover:text-blue-500 cursor-pointer'>
                Our Story
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Blogs
              </div>
        </div>
      </div>
     </div>
     <div className='text-[15px] text-white text-bold'>
    Useful Links
       <div className='flex flex-col gap-5 pt-7'>
        <div className='text-white text-[12px] gap-10'>
              <div className='flex flex-col gap-2'>
                <div className='hover:text-blue-500 cursor-pointer'>
                Privacy Policy
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Return Policy
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Terms & Conditions
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Contact Us
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Request <br></br>
                Replacement/Returns
              </div>
              </div>
        </div>
      </div>
     </div>
     <div className='text-[15px] text-white text-bold'>
      Salon 
         <div className='flex flex-col gap-5 pt-7'>
        <div className='text-white text-[12px] gap-10'>
              <div className='flex flex-col gap-2'>
                <div className='hover:text-blue-500 cursor-pointer'>
                Mumbai
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Hyderabad
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Bangalore
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Gurugram
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Guwahati
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Kolkata
              </div>
              </div>
        </div>
      </div>
     </div>
     <div className='text-[15px] text-white text-bold'>
      Categories
         <div className='flex flex-col gap-5 pt-7'>
        <div className='text-white text-[12px] gap-10'>
              <div className='flex flex-col gap-2'>
                <div className='hover:text-blue-500 cursor-pointer'>
                All Products
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Hair Styling
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Hair Colour
              </div>
               <div className='hover:text-blue-500 cursor-pointer'>
                Hair Care
              </div>
              </div>
        </div>
      </div>
     </div>
     <div className='text-[15px] text-white text-bold'>
      My Account
         <div className='flex flex-col gap-5 pt-7'>
        <div className='text-white text-[12px] gap-10'>
              <div className='flex flex-col gap-2 '>
                <div className='hover:text-blue-500 cursor-pointer'>
                Profile
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Orders
              </div>
              <div className='hover:text-blue-500 cursor-pointer'>
                Addresses
              </div>
              
              </div>
        </div>
      </div>
     </div>
    </div>
      </div>
      </footer>
      
      <footer className='bg-black pt-1'>
        <div className='flex flex-col pb-6 '>
  
      <div className="w-full h-px bg-gray-400"></div>
     <div className='flex flex-row justify-between'>
       <div className='text-gray-400 text-[10px] pt-4 pl-22'>
        © 2026 Honasa Consumer Limited. All rights reserved.
      </div>
      <div className='text-gray-300 flex flex-row text-[14px] pt-4 pr-22'>
       <TiTick size={18}/>
       100% Payment Protection, Easy Return Policy
      </div>
     </div>
</div>

      </footer>
    </div>
    

<div className='pt-6'>

<div className='block md:hidden bg-black text-white p-6 h-250'>
  <div className='p-2'>

    <div className='text-medium text-white text-[17px]'>
      India's Go-To Hair care - Bblunt
    </div>
    <div className='flex flex-col gap-7 text-white text-[18px] pt-8 text-extrabold'>
      <div>
     <div>
     <div className='flex flex-row justify-between'>
       <div>About Us</div>
      <div>
        <GoPlus className='text-white'
        />
      </div>
     </div>
      <div className='text-gray-500 pt-5'>
        <hr></hr>
      </div>
     </div>
    </div>
    <div>
     <div>
     <div className='flex flex-row justify-between'>
       <div>Useful Links</div>
      <div>
        <GoPlus className='text-white '
        />
      </div>
     </div>
      <div className='text-gray-500 pt-5'>
        <hr></hr>
      </div>
     </div>
    </div>
    <div>
     <div>
     <div className='flex flex-row justify-between'>
       <div>Categories</div>
      <div>
        <GoPlus className='text-white '
        />
      </div>
     </div>
      <div className='text-gray-500 pt-5'>
        <hr></hr>
      </div>
     </div>
    </div>
    <div>
     <div>
     <div className='flex flex-row justify-between'>
       <div>Our Salons</div>
      <div>
        <GoPlus className='text-white '
        />
      </div>
     </div>
      <div className='text-gray-500 pt-5'>
        <hr></hr>
      </div>
     </div>
    </div>
    <div>
     <div>
     <div className='flex flex-row justify-between'>
       <div>My Account</div>
      <div>
        <GoPlus className='text-white '
        />
      </div>
     </div>
      <div className='text-gray-500 pt-5'>
        <hr></hr>
      </div>
     </div>
    </div>

    
  </div>

  </div>


  <div className='flex flex-col p-3 gap-3'>
    <div>Get the App</div>
    <div className='flex flex-row gap-4 '>
      <div className='text-black
     border-gray-300 rounded-2xl h-17 w-45 bg-white'>
       <div className='flex flex-row gap-2'>
        <div className='pt-3 pl-3'>
          <FaApple size={35}/>
        </div>
        <div className='text-black pt-5 pl-1 text-[17px]'>
App Store
       </div>
       </div>
    </div>
    <div className='text-black
     border-gray-300 rounded-2xl h-17 w-45 bg-white'>
       <div className='flex flex-row gap-2'>
        <div className='pt-4 pl-3'>
          <IoLogoGooglePlaystore size={33}/>
        </div>
        <div className='text-black pt-5 pl-1 text-[17px]'>
Google Play
       </div>
       </div>
    </div>
    </div>
  </div>

  <div className='pt-4'>
    <div className='pb-0'>
      <hr className='text-gray-400'> 
      </hr>
    </div>
   <div className='flex flex-row justify-between pt-5 pb-5'>
     <div className='flex flex-col gap-3'>
      <div className='pl-9'><MdOutlineLocalShipping className='' size={35}/></div>
    <div>Free Shipping</div>
    </div>
     <div className='flex flex-col gap-3'>
      <div className='pl-9'><IoCheckmarkDoneCircleOutline className='' size={35}/></div>
    <div>Easy Return</div>
    </div>
    <div className='flex flex-col gap-3'>
      <div className='pl-9'><IoMdCash className='' size={35}/></div>
    <div>COD Availabe</div>
    </div>
   </div>
    </div>
<div>
  <div className='pt-2 text-gray-400'>
    <hr>
    </hr>
  </div>
   <div className='flex flex-col gap-5 pt-5'> 
             
                    <div className="flex gap-2 pl-2">
                         <div className="w-8 h-8 rounded-full border border-white
                          flex items-center justify-center text-white 
                         hover:border-white hover:text-white transition">
                          <LuFacebook size={12} />
                          </div>
                          <div className="w-8 h-8 rounded-full border border-white 
                          flex items-center justify-center text-white 
                         hover:border-white hover:text-white transition">
                           <FaXTwitter size={12} />
                          </div>
                         <div className="w-8 h-8 rounded-full border border-white 
                         flex items-center justify-center text-white 
                       hover:border-white hover:text-white transition">
                        <IoLogoInstagram size={12} />
                         </div>
                        <div className="w-8 h-8 rounded-full border border-white 
                        flex items-center justify-center text-white
                       hover:border-white hover:text-white transition">
                        <CiYoutube size={12} />
                         </div>
                        <div className="w-8 h-8 rounded-full border border-white 
                        flex items-center justify-center text-white 
                       hover:border-white hover:text-white transition">
                        <HiOutlineMail size={12} />
                      </div>
                      </div>
                      </div>
</div>
</div>
</div>
    </>

    
  )
}

export default Footer

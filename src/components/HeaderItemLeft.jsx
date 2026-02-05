import React from 'react'

const HeaderItemLeft = ({name,Icon}) => {
   if (name === "Product") {
    return (
      <div className="relative group cursor-pointer">

        {/* Top Menu */}
        <div className="text-black flex items-center gap-1 text-[13px] font-extrabold hover:underline underline-offset-5">
          <h2>{name}</h2>
          <Icon size={16} />
        </div>

        {/* Dropdown */}
        <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg 
                        opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible 
                        transition-all duration-300">

          <div className="p-5 space-y-3 text-gray-700 text-xs">
            <p className="hover:text-black cursor-pointer">Tarini X BBlunt</p>
            <p className="hover:text-black cursor-pointer">All Products</p>
            <p className="hover:text-black cursor-pointer">New Launches</p>
            <p className="hover:text-black cursor-pointer">Best Sellers</p>
            <p className="hover:text-black cursor-pointer">Combos</p>
          </div>

        </div>

      </div>

      
    )
  }
    if (name === "Hair Care") {
    return (
      <div className="relative group cursor-pointer">
        <div className="text-black flex items-center gap-1 text-[13px] font-extrabold hover:underline underline-offset-5">
          <h2>{name}</h2>
          <Icon size={16} />
        </div>

        <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg 
                        opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible 
                        transition-all duration-300">
          <div className="p-4 space-y-2 text-gray-700 text-xs">
            <p className="hover:text-black cursor-pointer">Product Type</p>
            <p className="hover:text-black cursor-pointer">Shop By Concern</p>
          </div>
        </div>
      </div>
    )
  }
  if (name === "Hair Colour") {
  return (
    <div className="relative group cursor-pointer">

      <div className="text-black flex items-center gap-1 text-[13px] font-extrabold hover:underline underline-offset-5">
        <h2>{name}</h2>
        <Icon size={16} />
      </div>

      <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg 
                      opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300">

        <div className="p-4 space-y-2 text-gray-700 text-xs">
          <p className="hover:text-black cursor-pointer">Product Type</p>
          <p className="hover:text-black cursor-pointer">Salon Secret</p>
          <p className="hover:text-black cursor-pointer">Colour Bundles</p>
          <p className="hover:text-black cursor-pointer">Hair Colour Shampoo</p>
        </div>

      </div>

    </div>
  )
}
if (name === "Hair Styling") {
  return (
    <div className="relative group cursor-pointer">

      <div className="text-black flex items-center gap-1 text-[13px] font-extrabold hover:underline underline-offset-5">
        <h2>{name}</h2>
        <Icon size={16} />
      </div>

      <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg 
                      opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300">

        <div className="p-4 space-y-2 text-gray-700 text-xs">
          <p className="hover:text-black cursor-pointer">Product Type</p>
          <p className="hover:text-black cursor-pointer">Heat Protection</p>
          <p className="hover:text-black cursor-pointer">Hair Sprays</p>
          <p className="hover:text-black cursor-pointer">Hair Appliances</p>
        </div>

      </div>

    </div>
  )
}
if (name === "Salon") {
  return (
    <div className="relative group cursor-pointer">

      <div className="text-black flex items-center gap-1 text-[13px] font-extrabold hover:underline underline-offset-5">
        <h2>{name}</h2>
        <Icon size={16} />
      </div>

      <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg 
                      opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300">

        <div className="p-4 space-y-2 text-gray-700 text-xs">
          <p className="hover:text-black cursor-pointer">Mumbai</p>
          <p className="hover:text-black cursor-pointer">Hyderabad</p>
          <p className="hover:text-black cursor-pointer">Bangalore</p>
          <p className="hover:text-black cursor-pointer">Gurugram</p>
          <p className="hover:text-black cursor-pointer">Guwahati</p>
          <p className="hover:text-black cursor-pointer">Kolkata</p>
        </div>

      </div>

    </div>
  )
}
  
  return (
    <div className='text-black flex  items-center
     gap-1 text-[13px] font-extrabold cursor-pointer 
     hover:underline underline-offset-5'>
        <h2>{name}</h2>
        <Icon /> 
    </div>
  )
}

export default HeaderItemLeft

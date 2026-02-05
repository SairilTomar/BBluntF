import React from 'react'

const HurryUp = () => {
  return (
<div className="w-full flex justify-center lg:pb-2 lg:pt-2">
  <div className="flex items-center gap-2 text-[#ff0000]">
    {/* Left lines */}
    <div className="flex flex-col items-end gap-[6px]">
      <div className="w-9 h-[3.5px] bg-[#ff0000] rounded-full"></div>
       <div className="w-7 h-[3.5px] bg-[#ff0000] rounded-full"></div>
      <div className="w-9 h-[3.5px] bg-[#ff0000] rounded-full"></div>
    </div>
    {/* Text */}
    <span className="text-[25px] sm:text-[80px] lg:text-[40px]
  
    text-red-500 font-extrabold tracking-[-1px]">
      Hurry Up!
    </span>
   
    {/* Right lines */}
    <div className="flex flex-col gap-[6px]">
      <div className="w-9 h-[3.5px] bg-[#ff0000] rounded-full"></div>
       <div className="w-7 h-[3.5px] bg-[#ff0000] rounded-full"></div>
      <div className="w-9 h-[3.5px] bg-[#ff0000] rounded-full"></div>
    </div>
  </div>
</div>
  )
}

export default HurryUp

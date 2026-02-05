import React from 'react'

const HeaderItemRight = ({name2,Icon2}) => {
  return (
    <div className='text-black flex  items-center
     gap-2 text-[13px] cursor-pointer'>
      <Icon2 />
      <h2>{name2}</h2>
    </div>
  )
}

export default HeaderItemRight

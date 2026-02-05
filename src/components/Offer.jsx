import React, { useState, useEffect } from 'react'

const Offer = () => {

  const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = targetDate - now

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex-col flex items-center'>
      <span className='font-bold text-[26px] sm:text-[24px] lg:text-[32px] py-2 text-black'>
        Offer will expire in
      </span>

      <div className="flex gap-2 pt-0">

        <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center">
          <span className="text-xl font-black font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-xs mt-[1px]">Days</span>
        </div>

        <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-xs mt-[1px]">Hours</span>
        </div>

        <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-xs mt-[1px]">Min</span>
        </div>

        <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-xs mt-[1px]">Sec</span>
        </div>

      </div>
      <span className='hidden lg:text-[22px] font-medium lg:block pt-6 pb:2 lg:pt-6 text-black text-3xl'>
        Most Loved
      </span>
    </div>
  )
}

export default Offer

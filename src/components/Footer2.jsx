import React, { useState } from 'react'
import bottomLogo from './../assets/Images/bottomLogo.png'

const Footer2 = () => {

  const [openChat, setOpenChat] = useState(false)

  return (
  <>  <div className="
    hidden lg:block
    fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

     
      {openChat && (
        <div className="w-[320px] bg-white shadow-2xl rounded-xl p-4">
          <h3 className="font-semibold mb-3">BBLunt</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border mb-2 p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border mb-2 p-2 rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full border mb-2 p-2 rounded"
          />

          <button className="w-full bg-black text-white py-2 rounded">
            Start Conversation
          </button>
        </div>
      )}

      {/* Chat Bubble */}
      {!openChat && (
        <div
          onClick={() => setOpenChat(true)}
          className="bg-white shadow-lg rounded-full px-4 py-2 text-sm cursor-pointer"
        >
          Hey, lets chat
        </div>
      )}

      {/* Logo Button */}
      <div
        onClick={() => setOpenChat(!openChat)}
        className="w-12 h-12 bg-white shadow-lg rounded-md flex items-center justify-center cursor-pointer"
      >
        <img
          src={bottomLogo}
          alt="Chat Logo"
          className="w-8 object-contain"
        />
      </div>

    </div>

  
    </>
  )
}

export default Footer2

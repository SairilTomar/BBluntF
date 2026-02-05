import React from 'react'
import shamp2Img from './../assets/Images/shamp2Img.webp'
import shamp2Video from './../assets/Images/shamp2Video.webp'
import shamp1Img from './../assets/Images/shamp1Img.webp'
import shamp1Vid from './../assets/Images/shamp1Vid.webp'
import shamp3Img from './../assets/Images/sham3Img.webp'
import shamp3Vid from './../assets/Images/shamp3Vid.webp'
import shamp4Img from './../assets/Images/shamp4Img.webp'
import shamp4Vid from './../assets/Images/shamp4Vid.webp'




const Product1 = () => {
    const list = [
        {
            id:1,
            image:shamp1Img,
            video:shamp1Vid,
            green:'BIG1',
            quantity:'300ml',
            name:'Shampoo',
            description:'Hair Fall Control Shampoo with Pea Protein & Caffeine for Stronger Hair - 300 ml',
            desc2:'Reduces Up to 93% Hair Fall | Adds Shine',
            rating:'4.8',
            price:'₹355',
            button:'Add to cart'
        },
        {
            id:2,
            image:shamp2Img,
            video:shamp2Video,
            green:'BIG1',
            quantity:'250ml',
            name:'Conditioner',
            description:'Hair Fall Control Shampoo with Pea Protein & Caffeine for Stronger Hair - 300 ml',
            desc2:'Reduces Up to 93% Hair Fall | Adds Shine',
            rating:'4.8',
            price:'₹355',
            button:'Add to cart'
        },
         {
            id:3,
            image:shamp3Img,
            video:shamp3Vid,
            green:'BIG1',
            quantity:'150ml',
            name:'Hair Styling',
            description:'Hot Shot Heat Protection Mist with Grapeseed Oil & Provitamin B5 - 150 ml',
            desc2:'Prevents Damage | Upto 230° Celsius Protection',
            rating:'4.8',
            price:'₹499',
            button:'Add to cart'
        },
       
         {
            id:4,
            image:shamp4Img,
            video:shamp4Vid,
            green:'BIG1',
            quantity:'130ml',
            name:'Hair Colour',
            description:'High Shine Conditioning Hair Colour - Chocolate Dark Brown (Shade 3)',
            desc2:'Intense High Shine Hair Colour at Home | Colour Outside, Care Inside | Powered by MaliPeptide',
            rating:'4.6',
            price:'₹399',
            button:'Add to cart'
        },

    ]
  return (
    <div className='grid grid-cols-2 
    sm:grid-cols-2 lg:grid-cols-4
     gap-0 lg:gap-4 pt-14 lg:pt-4 lg:px-25'>
       {list.map((item) =>(
        <div className='border-0 lg:border-[1px] rounded-lg p-2 border-gray-200'>
            <div className='relative overflow-hidden 
            rounded-lg group'>

                <img src={item.image}
                loading='lazy'
                 decoding="async"
                 className='w-full aspect-[3/4] lg:aspect-[3/3.5] object-cover transition duration-[3000ms]
                 ease-out
                  lg:group-hover:opacity-0'/>
            <img src={item.video}
            loading='lazy'
             decoding="async"
             className='absolute aspect-[3/4] lg:aspect-[3/3.5] object-cover top-0 left-0 w-full opacity-0
           scale-100
           transition-transform duration-[1500ms] ease-out
           lg:group-hover:opacity-100
           lg:group-hover:scale-[1.12]'/>
           <div className="absolute top-2 left-2 
                bg-[#23aa60d6]
 text-white 
                text-xs font-semibold 
                px-3 py-1 
                rounded-md shadow">
                  
  B1G1
</div>
<div className="absolute bottom-1 right-1 
                bg-white/50 text-black 
                text-xs font-medium 
                px-1 py-0.5 
                rounded shadow-2xl">
  {item.quantity}
</div>
</div>
<div className=''>
    <p className="mt-3 inline-block 
              bg-gray-100 text-black 
              text-xs font-bold
              px-3 py-1.5 rounded-md">
  {item.name}
</p>
<h3 className="mt-2 text-sm
 text-black font-[550] line-clamp-2">
  {item.description}
</h3>
<p className="mt-1 text-xs text-gray-500 
 min-h-[32px] line-clamp-2">
  {item.desc2}
</p>
<div className="mt-2 flex-col flex">
  
  {/* Rating */}
  <span className="text-black-500 text-[12px]">
   ⭐ {item.rating}
  </span>

  {/* Price */}
  <span className="text-sm mt-1 font-semibold text-gray-900">
    {item.price}
  </span>

  <input
  type="button"
  value={item.button}
  className="mt-3 w-full 
             bg-black text-white 
             text-sm font-semibold 
             py-2 rounded-md 
             cursor-pointer 
             block
             hover:bg-gray-800 
             transition"
/>

</div>
    </div>
</div>
       ))}
    </div>
  )
}

export default Product1

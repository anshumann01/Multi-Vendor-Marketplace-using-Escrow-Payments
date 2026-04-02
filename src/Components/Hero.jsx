import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#19202e] flex flex-col justify-center items-center h-[calc(100vh)]'>
       <div className=' flex flex-col justify-center items-center pt-12 gap-8'>
         <div className='bg-[#182A33] text-[#29A37A] border-2 border-[#29A37A] px-4 py-1 rounded-full'>Escrow-Protected-Payments</div>
        <h1 className='text-7xl text-white font-bold text-center w-220'>Buy & Sell with <span className='text-[#29A37A]'>Complete Trust</span></h1>
        <p className='text-gray-500 text-xl w-120 text-center'>A multi-vendor marketplace where every transaction is protected by escrow. Your money stays safe until you confirm delivery.</p>
        <div className='flex gap-4'>
            <button className='bg-[#29A37A] text-white px-10 py-3 rounded-lg cursor-pointer hover:bg-[#33C090] transition-colors duration-200'>Start Shopping</button>
             <button className='bg-white text-black px-10 py-3 rounded-lg cursor-pointer hover:bg-gray-500 transition-colors duration-200'>Become a Seller</button>
        </div>
        <div className='flex gap-20 pt-4'>
            <div className='flex flex-col items-center'>
                <p className='text-yellow-400 text-2xl font-semibold'>10K+</p>
                <p className='text-gray-500'>Sellers</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-yellow-400 text-2xl font-semibold'>100%</p>
                <p className='text-gray-500'>Safe Deliveries</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-yellow-400 text-2xl font-semibold'>$2M</p>
                <p className='text-gray-500'>Protected</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Hero
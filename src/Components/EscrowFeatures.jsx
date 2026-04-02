import React from 'react'

const EscrowFeatures = () => {
  const features = [
    {
      title: "Secure Payments",
      desc: "Funds are held safely until the buyer confirms delivery.",
    },
    {
      title: "Buyer Protection",
      desc: "Get full refund if the product is not delivered as promised.",
    },
    {
      title: "Seller Assurance",
      desc: "Sellers receive payment only after successful order completion.",
    },
    {
      title: "Dispute Resolution",
      desc: "Fair resolution system in case of any transaction conflicts.",
    },
  ];
  return (
    <>
    <div className='flex flex-col items-center justify-center pt-10 gap-3'>
        <h3 className='text-3xl font-semibold'>How Escrow <span className='text-[#29A37A]'>Protects You</span></h3>
        <p className='text-gray-500'>A simple 4-step process that keeps both buyers and sellers safe.</p>
    </div>
        <div className="w-full  py-12 px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className=" rounded-2xl p-6 shadow-lg hover:scale-105 transition transform"
          >
            <h3 className="text-xl font-semibold text-[#29A37A] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default EscrowFeatures
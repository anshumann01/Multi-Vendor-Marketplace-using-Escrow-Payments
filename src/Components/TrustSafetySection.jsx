export default function TrustSafetySection() {
  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#182A33] mb-4">
          Trust & Safety
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Our platform uses escrow-based payments to ensure every transaction is
          safe, transparent, and reliable for both buyers and sellers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#29A37A] mb-2">
              Payment Protection
            </h3>
            <p className="text-gray-500 text-sm">
              Your money is held securely and only released after successful
              delivery confirmation.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#29A37A] mb-2">
              Transparent Transactions
            </h3>
            <p className="text-gray-500 text-sm">
              Every step of the payment process is visible and trackable,
              ensuring full transparency.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#29A37A] mb-2">
              Dispute Handling
            </h3>
            <p className="text-gray-500 text-sm">
              In case of any issue, our system ensures fair dispute resolution
              between buyers and sellers.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button className="px-6 py-2 bg-[#29A37A] text-white rounded-lg font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

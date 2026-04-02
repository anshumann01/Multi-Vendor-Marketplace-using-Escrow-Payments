export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="w-full py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-[#182A33] mb-10">
        Explore Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform"
          >
            <img
              src={`${product.image}?w=400&h=300&fit=crop`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#182A33] mb-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{product.price}</p>

              <button className="w-full py-2 rounded-lg bg-[#29A37A] text-[#182A33] font-semibold hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

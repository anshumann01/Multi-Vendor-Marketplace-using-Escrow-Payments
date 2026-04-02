import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Product 2",
      price: 800,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white p-6 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#182A33]">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-[#182A33]">
                    {item.title}
                  </h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-[#29A37A] text-[#182A33] rounded"
                >
                  -
                </button>
                <span className="text-[#182A33]">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-[#29A37A] text-[#182A33] rounded"
                >
                  +
                </button>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="font-semibold text-[#182A33]">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm mt-6">
            <div className="flex justify-between text-lg font-semibold text-[#182A33]">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full mt-4 py-2 rounded-lg bg-[#29A37A] text-[#182A33] font-semibold hover:opacity-90 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
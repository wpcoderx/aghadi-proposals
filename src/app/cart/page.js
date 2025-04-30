"use client";
import { useCart } from "@/context/cartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Your Cart
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-x-auto shadow">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3 text-center">Price</th>
                <th className="px-6 py-3 text-center">Quantity</th>
                <th className="px-6 py-3 text-center">Subtotal</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700 dark:text-gray-200">
              {cartItems.length > 0 ? (
                cartItems.map((item, idx) => (
                  <tr key={idx} className="border-t border-gray-200 dark:border-gray-600">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="text-center px-6 py-4">${item.price}</td>
                    <td className="text-center px-6 py-4">1</td>
                    <td className="text-center px-6 py-4">${item.price}</td>
                    <td className="text-right px-6 py-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500 dark:text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

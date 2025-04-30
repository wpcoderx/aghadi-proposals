'use client'
import { useCart } from "@/context/cartContext";

const ProductCard = ({product,setCartMsg}) => {

    const {addToCart} = useCart();


    const handleAddToCart = () => {
      addToCart(product);
      setCartMsg(`✅ ${product.title} added to cart. [cart]`);
    };


  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col justify-between"
    >
      <div>
        <img
          src={product.thumbnailUrl}
          alt={product.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
          {product.description || "No description available."}
        </p>
        <p className="text-md font-bold text-indigo-600 dark:text-indigo-400 mt-2">
          ${product.price}
        </p>
      </div>
      <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

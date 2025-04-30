'use client'
import React, { useState } from 'react'
import { FaProductHunt } from 'react-icons/fa6'
import product_list from '@/data/products.json'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const Products = () => {

  const [cartMsg, setCartMsg] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white flex items-center justify-center gap-2 mb-10">
          <FaProductHunt/> All Products
        </h2>

        {cartMsg && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-6 text-center text-sm">
            {cartMsg.replace('[cart]', '')}
            <Link href="/cart" className="underline text-green-700 ml-1">
              Go to cart →
            </Link>
          </div>
        )}

        { product_list ? ( 
          <div className="product_list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {product_list.map((product) => (
            <ProductCard key={product.id} product={product} setCartMsg={setCartMsg} />
          ))}
        </div>
        ) : (<h3> No Products for now </h3>) }
      </div>
    </div>
  )
}

export default Products
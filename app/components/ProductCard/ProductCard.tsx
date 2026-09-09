import React from 'react'
import AddToCart from '../AddToCart';

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-2xl hover:bg-sky-500'>
        <AddToCart/>
    </div>
  )
}

export default ProductCard
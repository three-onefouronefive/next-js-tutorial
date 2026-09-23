import React from 'react'

interface Props {
    params: Promise<{ slug : string[] }>
    searchParams:  Promise<{ sortOrder?: string }>
}

const ProductPage = async ({ params, searchParams } : Props) => {
  const { slug = [] } = await params
  const { sortOrder } = await searchParams

  return (
    <div className='text-black'>ProductPage {slug.join('/')} <br/> searchParams: { sortOrder }</div>
  )
}

export default ProductPage
import React from 'react'

function ProductDetails({
  params,}:{
    params:{productId:string}
  }) {
  return (
    <div>
      <h2>Products List</h2>
      <p>product {params.productId}</p>
      <p>product2</p>
      <p>product3</p>
    </div>
  )
}

export default ProductDetails

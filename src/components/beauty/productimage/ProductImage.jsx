import React from 'react'

function ProductImage({data}) {
  return (
    <>
     <div className="item slug">
        <img src={data.image} alt={`${data.title} picture`} />
      </div>
    </>
  )
}

export default ProductImage
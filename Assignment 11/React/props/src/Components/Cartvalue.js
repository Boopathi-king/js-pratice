import React from 'react'

const Cartvalue = (props) => {
    let {
        userId,
        Date,
        ProductId,
    } = props;

    console.log(userId);
    console.log(Date);
    console.log(ProductId);
    



  return (
    <div>
        <h3>User Id: {userId}</h3>
        <p>Date: {Date}</p>
        <p>Product: {ProductId}</p>
    </div>
  )
}

export default Cartvalue
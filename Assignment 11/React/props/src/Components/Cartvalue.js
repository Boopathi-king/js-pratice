import React from 'react'

const Cartvalue = (props) => {
    let {
        userId,
        Date,
        Product,
    } = props;

    console.log(userId);
    console.log(Date);
    console.log(Product);
    



  return (
    <div>
        <h3>User Id: {userId}</h3>
        <p>Date: {Date}</p>
        <p>Product: {Product}</p>
    </div>
  )
}

export default Cartvalue
import React from 'react'
import Cartvalue from './Cartvalue';
import cart from './data';

const Cart = () => {
  return (
    <div>
        {cart.map((crt) => (
            <Cartvalue 
                key={crt.id}
                userId= {crt.userId}
                Date={crt.date}
                ProductId= {crt.products.forEach(productId => {
                 
                  return productId
                })}
            
            
            />
        ))}
    </div>
  )
}

export default Cart
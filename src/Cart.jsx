import React, { useContext } from 'react'
import { CartContext } from './assets/CartContext'

const Cart = () => {

    const {cartItems}=useContext(CartContext);
    const {RemoveItems}=useContext(CartContext);

console.log(cartItems)
const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

  
  return (
    <section class="cart-page" style={{overflowY:cartItems.length>3?'auto':'hidden'}}>
 {cartItems.length===0? (<>
 
 <div className='cartImg'>
    <img src='https://madhurmilanvns.com/public/images/empty-cart.png'/>
 </div>
 
 </>):(<>
 
  <h2 class="cart-title">🛒 Your Cart</h2>

{
    cartItems.map(item=>

         <div class="cart-item">
    <img src={item.image} alt="Product" />
    <div class="item-info">
      <h4>{item.title}</h4>
      <p>$ {item.price}</p>
    </div>
    <div class="item-actions">
      <span class="qty">Qty: {item.qty}</span>
      <button class="remove-btn" onClick={()=>RemoveItems(item)}>Remove</button>
    </div>
  </div> 
    )
}

  <div class="cart-summary">
    <h3>Total:${totalPrice.toFixed(2)}</h3>
    <button class="checkout-btn">Proceed to Checkout</button>
  </div>
 
 </>)}
</section>

  )
}

export default Cart
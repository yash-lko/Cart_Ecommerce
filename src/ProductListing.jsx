import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { CartContext } from './assets/CartContext';

const ProductListing = () => {


  const { AddToCart } = useContext(CartContext);


  const { data, loader } = useContext(ProductContext);


  console.log(data, loader)
  return (
    <section class="product-listing">
      <h2 class="section-title">🛒 Featured Products</h2>

      <div class="product-grid">
        {
          loader ? (

            <>
              <h2 style={{ textAlign: 'center' }}>
                Loading....
              </h2>
            </>
          ) : (<>


            {
              data.map(item =>

                <>
                  <div class="product-card">
                    <img src={item.image} alt="Loafers" />
                    <h3>{item.title}</h3>
                    <p class="price">${item.price}</p>
                    <button onClick={() => AddToCart(item)}>Add to Cart</button>
                  </div>
                </>
              )
            }

          </>)
        }
      </div>
    </section>


  )
}

export default ProductListing
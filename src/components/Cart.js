import './Cart.css'
import 'aos/dist/aos.css'
import { PRODUCTS } from '../data/Product';
import { useGlobalContext } from '../context/CartContext';
import empty from '../images/emptycart.gif'





export default function Cart({ cartOpen, setCartOpen }) {

  const { cartCount, addToCart, removeFromCart } = useGlobalContext();
  const cartProducts = PRODUCTS;





  if (!cartOpen) {
    return null
  }

  var total = 0;




  return (

    <div className="cart-content" data-aos="fade-left">
      <div className="cart-list">
        <div className="cross" onClick={() => { setCartOpen(false) }}><big>X</big></div>
        <div className="cart-header">
          <big>Your Basket</big>
        </div>

        {/* cartProducts  */}

        {cartProducts && cartProducts.map((product) => {

          if (cartCount[product.id] !== 0) {

            total = total + (cartCount[product.id] * product.price);

            return (
              <div>
                <div className="cart-box">
                  <div className="cart-box-content">
                    <img src={product.pic} alt="not found" />


                    <div className="cart-box-value">
                      <h3>{product.name}</h3>
                      <p>Rs {product.price}</p>
                      <p><button>Delete</button></p>
                    </div>
                  </div>

                  <div className="cart-box-price">
                    {/* <h3>Rs {cartItem.price * cartItem.count}</h3> */}
                    <button className='minus' onClick={() => { removeFromCart(product.id) }}>-</button>
                    <button className='price'>{cartCount[product.id]}</button>
                    <button className='plus' onClick={() => { addToCart(product.id) }}>+</button>
                  </div>



                </div>

              </div>
            )
          }


        })}



        {total === 0 ? <>
          <h1 className='empty-cart-header'>OOps <br /> Your Cart is  Empty <br /> </h1>
          <img src={empty} alt="not found" className='empty-cart' />

        </> :
          <div className="complete-order">
            <div className="subTotal">
              <p>Subtotal</p>
              <p>{total}</p>
            </div>
            <div className="taxes">
              <p>Taxes</p>
              <p>Free</p>
            </div>
            <div className="totalPrice">
              <p>Total price: </p>
              <p>{total}</p>
            </div>

            <button className='completeOrder'>Complete Order</button>
          </div>
        }





      </div>
    </div>
  )
}

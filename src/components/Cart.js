import './Cart.css'
import 'aos/dist/aos.css'





export default function Cart({ cartOpen, setCartOpen, cartItems, setCartItems }) {

  if (!cartOpen) {
    return null
  }

  var subtotal = 0;

  const total = ()=>{

  }

  return (

    <div className="cart-content" data-aos="fade-left">
      <div className="cart-list">
        <div className="cross" onClick={() => { setCartOpen(false) }}><big>X</big></div>
        <div className="cart-header">
          <big>Your Basket</big>
          <big className='item-number'>2 Items</big>
        </div>

        {cartItems && cartItems.map((cartItem) => (
          <div className="cart-box">
            <div className="cart-box-content">
              <img src={cartItem.image} alt="not found" />


              <div className="cart-box-value">
                <h3>{cartItem.name}</h3>
                <p><button>Delete</button></p>
              </div>
            </div>

            <div className="cart-box-price">
              <h3>Rs {cartItem.price}</h3>
              <button className='minus' onClick={()=>{}}>-</button><button className='price'>{cartItem.count}</button><button className='plus'>+</button>
            </div>



          </div>

        ))}

        <div className="complete-order">
          <div className="subTotal">
            <p>Subtotal</p>
            <p></p>
          </div>
          <div className="taxes">
            <p>Taxes</p>
            <p>Free</p>
          </div>
          <div className="totalPrice">
            <p>Total price: </p>
            <p></p>
          </div>

          <button className='completeOrder'>Complete Order</button>
        </div>


      </div>
    </div>
  )
}

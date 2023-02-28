import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import { getCartItems,getTotalPrice } from '../../redux/cartSlice';
import CartItems from './CartItems';

const Cart =() => {
    const cartItems=useSelector(getCartItems);
    const totalPrice=useSelector(getTotalPrice)
  return (
    <Accordion ActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>  <h3 className="total">Total:${totalPrice}</h3></Accordion.Header>
      
     <Accordion.Body>

{cartItems.map (cartItem  => <CartItems cartItem={cartItem}/> )}

           </Accordion.Body>
       </Accordion.Item>
   
   </Accordion>
  )}



export default Cart

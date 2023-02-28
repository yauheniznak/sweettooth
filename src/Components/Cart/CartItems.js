import dataSweets from "../data/dataSweets";
import { removeItemFromCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"


const CartItem =({cartItem})=>{
    const dispatch=useDispatch();
    const sweets = dataSweets.find(item => item.id === cartItem.sweetId)
    return(
        <div className="orders">
            <p className="emp">{sweets.name}</p>
            <img className="photoCart" src={sweets.img} alt="food"/>
           <p className="emp">{cartItem.quantity} portion(s)</p>
           <p className="emp">Price: ${sweets.price*cartItem.quantity}</p>
           <span onClick={()=>dispatch (removeItemFromCart ({cartItemId:cartItem.id}))}>
           <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/>
           </span>
          
        </div>
    )
}

export default CartItem
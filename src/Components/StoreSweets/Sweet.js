import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const Sweet = ({sweet})=>{
    const [quantity,setQuantity] = useState(1);
    const dispatch=useDispatch()
    return(
        <div className="overall">
            <div className="card">
            <h3> {sweet.name}  </h3>
            <h4>$ {sweet.price}</h4> 
            <div>
    
            </div>
           <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
           <button className="add" onClick={()=> {dispatch(addItemToCart({sweet,quantity}));
        }}>Add </button>
            </div>
          <div className="order">
          <img src={sweet.img} alt="sweets"/>
          </div>
           
        </div>
    )
}

export default Sweet
import dataSweet from "../data/dataSweets";
import Sweet from "./Sweet";
import { useSelector } from "react-redux";
import {  getSelectedCategory } from "../../redux/sweetSlice";


const Sweets = () =>{
   const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div  >
             {dataSweet
             .filter(sweet=>
                { if (selectedCategory==='ALL')return true;
                    return selectedCategory===sweet.category})
             .map (sweet=> <Sweet key={sweet.id} sweet={sweet}/>)}

        </div>
    )
}

export default Sweets
import React, {useState} from "react"
import Style from "./CarshoppingButton.module.css"

/*function upCounter (action){
    if(action === "add"){ }
}*/
const ShoppingButton = (clic, action) =>{
    const [counter, setCounter] = useState("0");
    
    

    return(
            <span className={Style.counter}>
                {counter}
            </span>
    )
}

export default ShoppingButton
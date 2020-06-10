import React, {useState} from 'react'
import ShoppingIcon from '../../Assets/icons/shopping-icon.png'
import Style from './CarshoppingButton.module.css'

function upCounter (){
'a'
}
const ShoppingButton = (clic) =>{
    const [counter, setCounter] = useState('0');
    
    return(
        <div className={Style.container}>
            <img src={ShoppingIcon} className={Style.bag} alt='Button shoping car'/>
            <span className={Style.counter}>
                {counter}
            </span>
        </div>
    )
}

export default ShoppingButton
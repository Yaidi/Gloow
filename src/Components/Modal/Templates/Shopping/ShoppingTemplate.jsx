import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ShoppingStyle from './ShoppingTemplate.module.css';

const ShoppingTemplate = ({closeModal}) => {
        return(
            <div className={ShoppingStyle.Overlay}>
            <div className={ShoppingStyle.Dialog}>
                <div className="modal-header">
                    <div className={ShoppingStyle.shoppingTitle}>
                        <span
                            style={{paddingRight: ".5em"}}>
                            SHOPPING BAG
                        </span>
                        <FontAwesomeIcon
                            icon={faShoppingBag}
                        />
                    </div>
                    <div className="close-button">
                            <span
                                className={ShoppingStyle.CrossIconS}
                                onClick={closeModal}>
                                    &times;
                            </span>
                    </div>
                </div>
                <div className={ShoppingStyle.ModalBody} >
                    <div className={ShoppingStyle.ProductCard}>
                        Product.Img
                        Product.Description
                        Product.Color
                        Product.Size
                        Product.Price
                    </div>
                    <select 
                        className={ShoppingStyle.PaymentMethod} 
                        required>
                            <option disabled selected value>Payment Method</option>
                            <option value="cash">CASH</option>
                    </select>
                    <div className={ShoppingStyle.Total}>
                        TOTAL: $599.00 MXN
                    </div>
                    <div className={ShoppingStyle.Order}>
                        <button
                            type="submit"
                            onClick={() => {console.log(alert(`API for payment must be invoked.`))}}
                            className={ShoppingStyle.OrderButton}>
                            PROCESS ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>

        );
}

export default ShoppingTemplate;
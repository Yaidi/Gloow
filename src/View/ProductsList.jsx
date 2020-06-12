import React from "react";
import {ProductsDisplay} from "../Components/ProductsDisplay/ProductsDisplay";
import BackTo from "../Components/LinkBackTo/LinkBackTo";
const ProductsLists = () => {
    return (
        <div>
         <div>
      <BackTo move="/" nameback="HOME"/>
  
            <ProductsDisplay />
        </div>
         </div>
    );
};

export default ProductsLists;

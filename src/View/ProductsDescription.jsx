import React from "react";
import {ProductsDetails} from "../Components/ProductsDisplay/ProductsDisplay";
import { Link } from "react-router-dom";
import { ProductsId } from "../Library/UseFetch";
import BackTo from "../Components/LinkBackTo/LinkBackTo";

export default function ProductsDescription({ match }) {
    console.log(match);
    const data = ProductsId(match.params.id);
    console.log(data);
    if (data !== undefined) {
        return (
            <div>
      <BackTo move="/" nameback="HOME"/>
  
            <div>
                <ul>
                    <li>
                        <Link
                            key={data.productId}
                            to={`/ProductsList/${data.productId}`}
                        >
                            <p>{data.description}</p>
                            <p>{data.colors}</p>
                            <p>{data.sizes}</p>
                            <p>{data.price}</p>
                        </Link>
                    </li>
                </ul>
             </div>
            </div>
        );
    }
    return (
        <div>
            <h1> Ups¡ We couldnt find any product that matches your search.</h1>
        </div>
    );
}

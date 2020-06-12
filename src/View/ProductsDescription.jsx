import React from "react";
import {ProductsDetails} from "../Components/ProductsDisplay/ProductsDisplay";
import { Link } from "react-router-dom";
import { ProductsId } from "../Library/UseFetch";

export default function ProductsDescription({ match }) {
    console.log(match);
    const data = ProductsId(match.params.id);
    console.log(data);
    if (data !== undefined) {
        return (
            <div>
                <ul>
                    <li>
                        <Link
                            key={data.productId}
                            to={`/ProductsList/${data.productId}`}
                        >
                            <li>{data.description}</li>
                            <li>{data.price}</li>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
    return (
        <div>
            <h1> Ups¡ We couldnt find any product that matches your search.</h1>
        </div>
    );
}

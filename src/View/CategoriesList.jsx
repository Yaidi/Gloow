import React from "react";
import { ProductsSearchbyCategory } from "../Library/UseFetch";
import { Link } from "react-router-dom";

export default function CategoriesList({ match }) {
    console.log(match);
    const data = ProductsSearchbyCategory(match.params.id);
    console.log(data);
    if (data !== undefined) {
        return (
            <div>
                <ul>
                    <li>
                        <Link
                            key={data.productId}
                            to={`/ProductsDetails/${data.productId}`}
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

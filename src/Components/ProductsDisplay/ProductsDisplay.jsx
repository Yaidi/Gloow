import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsId } from "../../Library/UseFetch";
import { AllProducts } from "../../Library/UseFetch";

export function ProductsDetails({ match }) {
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
export function ProductsDisplay() {
    const [data, setData] = useState([]);
    console.log("data: ",data);
    useEffect(() => {
        AllProducts().then((response) => setData(response));
    }, []);

    return (
        <div>
                {data.map((el, index) => (
  <section key={index}>
                    <div>{el.description}</div>
                </section>
            ))}
        </div>
    );
}

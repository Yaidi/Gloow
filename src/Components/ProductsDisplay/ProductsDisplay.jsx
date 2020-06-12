import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsId } from "../../Library/UseFetch";
import { AllProducts } from "../../Library/UseFetch";
import Style from "./ProductsDisplay.module.css";

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
                            to={`/ProductsList/${data.productId}`>
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
    console.log("data: ", data);
    useEffect(() => {
        AllProducts().then((response) => setData(response));
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((el, index) => (
                        <div className="col-md-6 col-lg-4 my-3">
                            <div className="card text-center">
                                <section className={`card-body mb-3 ${Style.cardheight}`} key={index}>
                                    <p className="card-text">{el.description}</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>s
        </div>
        </>
    );
}

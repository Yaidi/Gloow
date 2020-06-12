import React from "react";
import { ProductsDetails } from "../Components/ProductsDisplay/ProductsDisplay";
import { Link } from "react-router-dom";
import { ProductsId } from "../Library/UseFetch";
import BackTo from "../Components/LinkBackTo/LinkBackTo";

export default function ProductsDescription({ match }) {
    console.log(match);
    const data = ProductsId(match.params.id);
    console.log(data);
    if (data !== undefined) {
        return (
            <>
                <BackTo move="/" nameback="HOME" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 my-3">
                            <div className="card text-center">
                                <section className="card-body back letter-white" mb-3 >
                                    <Link
                                        key={data.productId}
                                        to={`/ProductsList/${data.productId}`}
                                    >
                                        <p>{data.colors}</p>
                                        <p>{data.sizes}</p>
                                        <p>{data.description}</p>
                                        <p>{data.price}</p>
                                    </Link>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div>
            <h1> Ups¡ We couldnt find any product that matches your search.</h1>
        </div>
    );
}

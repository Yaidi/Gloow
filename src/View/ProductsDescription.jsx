import React from "react";
import { ProductsDetails } from "../Components/ProductsDisplay/ProductsDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
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
                                <section className="card-body back letter-white" mb-3 >
                                    <Link
                                        key={data.productId}
                                        to={`/ProductsList/${data.productId}`} >
                                        <h5 className="card-title letter-white"> {data.description}</h5>
                                        <p className="letter-white">{"Colors: " + data.colors}</p>
                                        <p className="letter-white">{"Sizes: " + data.sizes}</p>
                                        <p className="letter-white">{"Price: $ " + data.price}</p>
                                        <FontAwesomeIcon icon={faCartPlus} color="white" size="1x" />
                                    </Link>
                                </section>
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

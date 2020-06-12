import React from "react";
import { ProductsSearchbyCategory } from "../Library/UseFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
export default function ProductsbyCategories({match}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        ProductsSearchbyCategory(match.params.id).then((response) => setData(response));
    }, []);

   return (
            <>
            <div className="container">
                <div className="row">
                        {data.map((el, index) => (
                    <div className="col-md-6 col-lg-4 my-3">
                            <div className="card text-center back"></div>
        <section className={`card-body mb-3 back letter-white cardheight `} key={index}>
        <Link
            key={index}
            to={`/ProductsDetails/${el.productId}`}>
            <img src={el.picture} className="card-img-top" alt={el.picture}/>
            <div className="card-body">
                <h5 className="card-title letter-white"> {el.description}</h5>
                    <p className="card-text letter-white"> {"Price: $ " + el.price} </p>
                    <FontAwesomeIcon icon={faCartPlus} color="white" size="1x" />
            </div>
            </Link>
        </section>
            </div>
             
                ))}
                </div>
                </div>
                </>
        );
    }

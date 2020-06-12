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
                        <Link
           key={index}
            to={`/ProductsDetails/${el.productId}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 my-3">
                            <div className="card text-center back"></div>
        <section className={`card-body mb-3 back letter-white `} key={index}>
            <img src={el.picture} className="card-img-top" alt={el.picture}/>
            <div className="card-body">
                <h5 className="card-title"> {el.description}</h5>
                    <p className="card-text"> {"$" + el.price} </p>
                    <FontAwesomeIcon icon={faCartPlus} color="white" size="1x" />
            </div>
        </section>
            </div>
            </div>
            </div>
               </Link>
                ))}
                </div>
                </div>
                </>
        );
    }

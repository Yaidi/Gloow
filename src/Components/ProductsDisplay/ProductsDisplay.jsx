import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductsId } from "../../Library/UseFetch";
import { AllProducts } from "../../Library/UseFetch";
import Style from "./ProductsDisplay.module.css";

export function ProductsDisplay() {
    const [data, setData] = useState([]);
    console.log("data: ", data);
    useEffect(() => {
        AllProducts().then((response) => setData(response));
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                {data.map((el, index) => (
                    <div className="col-md-6 col-lg-4 my-3">
                            <div className="card text-center back"></div>
        <section className={`card-body mb-3 back letter-white ${Style.cardheight}`} key={index}>
            <img src={el.picture} className="card-img-top" alt={el.picture}/>
            <div className="card-body">
                <h5 className="card-title"> {el.description}</h5>
                    <p className="card-text"> {"$" + el.price} </p>
                    <FontAwesomeIcon icon={faCartPlus} color="white" size="1x" />
            </div>
        </section>
            </div>
            ))}
            </div>
            </div>
                        </div>
    );
}

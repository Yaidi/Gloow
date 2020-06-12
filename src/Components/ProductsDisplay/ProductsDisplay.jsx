import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

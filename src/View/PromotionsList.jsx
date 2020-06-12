import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AllPromotions } from "../Library/UseFetch";

export default function PromotionsList() {
    const [data, setData] = useState([]);
    console.log("data: ", data);
    useEffect(() => {
        AllPromotions().then((response) => setData(response));
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((el, index) => (
                        <div className="col-md-6 col-lg-4 my-3">
                            <div className="card text-center">
                                <section className={`card-body mb-3`} key={index}>
                                    <p className="card-text">{el.description}</p>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        </>
    );
}

import React from "react";
import { useState, useEffect } from "react";
import { AllPromotions } from "../Library/UseFetch";
import BackTo from "../Components/LinkBackTo/LinkBackTo";

export default function PromotionsList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        AllPromotions().then((response) => setData(response));
    }, []);

    return (
            <div className="container">
            <BackTo move="/" nameback="HOME"/>
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
    );
}

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsId } from "../../Library/UseFetch";
import { AllProducts } from "../../Library/UseFetch";


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

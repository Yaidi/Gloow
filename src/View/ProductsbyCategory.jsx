import React from "react";
import { ProductsSearchbyCategory } from "../Library/UseFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductsbyCategories({match}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        ProductsSearchbyCategory(match.params.id).then((response) => setData(response));
    }, []);

   return (
            <div>
        
                <ul>
                     {data.map((el, index) => (
                    <li>
                        <Link

           key={index}
            to={`/ProductsDetails/${el.productId}`}
                        >
                    <li>{el.description}</li>
               </Link>
                    </li>))}
                </ul>
            </div>
        );
    }

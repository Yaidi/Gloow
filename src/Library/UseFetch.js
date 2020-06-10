import { useState, useEffect } from 'react';

const API = 'https://genericapiv1.azurewebsites.net';
const categoriesEndPoint = '/v1/shop/categories';
const productsEndPoint = '/v1/shop/products/';

export function AllCategories() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${API}${categoriesEndPoint}`)
            .then((response) => response.json())
            .then((res) => {
                setData(res);
                console.log(data);
            });
    }, [data]);
    return data
}

export function ProductsId(productId) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${API}${productsEndPoint}${productId}`)
            .then((response) => response.json())
            .then((res) => setData(res));
    }, [productId]);

    return data;
}
import { useState, useEffect } from 'react';

const API = "https://genericapiv1.azurewebsites.net";
const categoriesEndPoint = "/v1/shop/categories";
const productsEndPoint = "/v1/shop/products/";
const promotionsEndPont = "/v1/shop/promotions";
const authuser = "https://genericapiv1.azurewebsites.net/oauth/token"



export function SerchUser(userName, password) {

    return fetch(authuser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: `grant_type=password&username=${userName}&password=${password}&app=AAD`
    })
        .then((response) => response.json()).catch((error) => alert(error));

}

export function AllCategories() {
    return fetch(`${API}${categoriesEndPoint}`)
        .then((response) => response.json())
}

export function AllPromotions() {
    return fetch(`${API}${promotionsEndPont}`)
        .then((response) => response.json())
}
export function AllProducts() {
    return fetch(`${API}${productsEndPoint}`)
        .then((response) => response.json())
}

export function ProductsId(productId) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${API}${productsEndPoint}${productId}`)
            .then((response) => response.json())
            .then((res) => setData(res));
            console.log(data)
    }, [productId]);

    return data;
}
export async function ProductsSearchbyCategory(inputCategoryId) {
  inputCategoryId = parseInt(inputCategoryId)
  return fetch(`${API}${productsEndPoint}`)
            .then((response) => response.json())
            .then((data) => {
                let searchResults = [];
                for (let i = 0; i < data.length -1; i++) {
                if (data[i].categoryId === inputCategoryId) {
                    searchResults.push(data[i])
                    }
                }
            return searchResults;
            });
}
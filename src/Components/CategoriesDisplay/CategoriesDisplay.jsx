import React from "react";
import { useState, useEffect } from "react";
import { AllCategories } from "../../Library/UseFetch";

export default function CategoriesDisplay() {
    const [data, setData] = useState([]);
    let randomCategories = [];
    console.log(data);
    useEffect(() => {
        AllCategories().then((response) => setData(response));
    }, []);

    if (data.length > 0) {
        //JSON parse and JSON.stringify clone the Array instead of referencing it
        const tempData = JSON.parse(JSON.stringify(data));
        const categoriesBuffer = [];
        for (let i = 0; i < 3; i++) {
            const randomElementsArray = tempData.splice(
                //Generate a random number between 0 and the lenght of our data
                Math.floor(Math.random() * tempData.length - 1),
                1
            );
            //Splice reeturn an Array of elements, we only need the fisrt one
            categoriesBuffer.push(randomElementsArray[0]);
        }
        randomCategories = categoriesBuffer;
    }
    return (
        <div>
            {randomCategories.map((el, index) => (
                <section key={index}>
                    <div>{el.description}</div>
                </section>
            ))}
        </div>
    );
}

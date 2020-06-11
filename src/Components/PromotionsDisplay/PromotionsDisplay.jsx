import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AllPromotions } from "../../Library/UseFetch";

export default function PromotionsDisplay() {
    const [data, setData] = useState([]);
    let randomPromotions = [];
    console.log(data);
    useEffect(() => {
        AllPromotions().then((response) => setData(response));
    }, []);

    if (data.length > 0) {
        //JSON parse and JSON.stringify clone the Array instead of referencing it
        const tempData = JSON.parse(JSON.stringify(data));
        const promotionsBuffer = [];
        for (let i = 0; i < 2; i++) {
            const randomElementsArray = tempData.splice(
                //Generate a random number between 0 and the lenght of our data
                Math.floor(Math.random() * tempData.length - 1),
                1
            );
            //Splice reeturn an Array of elements, we only need the fisrt one
            promotionsBuffer.push(randomElementsArray[0]);
        }
        randomPromotions = promotionsBuffer;
    }
    return (
        <div>
            {randomPromotions.map((el, index) => (
                <section key={index}>
                    <div>{el.description}</div>
                </section>
            ))}
        </div>
    );
}

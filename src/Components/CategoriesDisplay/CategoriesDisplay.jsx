import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AllCategories } from "../../Library/UseFetch";
import womanl from "../../Assets/categoriesImages/womanl.jpg";
import handbags from "../../Assets/categoriesImages/handbags.jpg";
import shoes from "../../Assets/categoriesImages/shoes.jpg";
import jewerlyandaccesories from "../../Assets/categoriesImages/jewerlyandaccesories.jpg";
import kids from "../../Assets/categoriesImages/kids.jpg";
import home from "../../Assets/categoriesImages/home.jpg";

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
        for (let i = 0; i < randomCategories.length; i++) {
            switch (randomCategories[i].description) {
                case "Woman":
                    randomCategories[i].picture = womanl;
                    break;
                case "Handbags":
                    randomCategories[i].picture = handbags;
                    break;
                case "Shoes":
                    randomCategories[i].picture = shoes;
                    break;
                case "Jewerly & Accesories":
                    randomCategories[i].picture = jewerlyandaccesories;
                    break;
                case "Kids":
                    randomCategories[i].picture = kids;
                    break;
                case "Home":
                    randomCategories[i].picture = home;
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <div>
            <div class="card-deck">
                {randomCategories.map((el, index) => (
                    <section class="card back white" key={index}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <Link to={`/CategoriesList/${el.categoryId}`}>
                                <img src={el.picture} alt="" />
                                {el.description}
                            </Link>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </section>
                ))}

            </div>
        </div>
    );
}

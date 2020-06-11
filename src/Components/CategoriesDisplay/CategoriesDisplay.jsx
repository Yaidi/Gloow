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
import Style from "./CategoriesDisplay.module.css";

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
            <div className="card-deck">
                {randomCategories.map((el, index) => (
                    <section className="card back" key={index}>
                        <div className="card-body">
                            <Link to={`/CategoriesList/${el.categoryId}`} className={Style.container}>
                                <img src={el.picture}  className="card-img-top" alt= {el.description} />
                                 <div className={Style.overlay}>
                              <div className={Style.text}>{"Go to " + el.description + " and see the products" }
                              </div>
                              </div>
                            </Link>  
                           
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

import React from "react";
import {Link} from "react-router-dom";
import SearchForm from "../Components/SearchButton/SearchButton";
import ContainerPromotion from "../Components/ContainerPromotion/ContainerPromotion";
import { CategoriesDisplay } from "../Components/CategoriesDisplay/CategoriesDisplay";
import PromotionsDisplay from "../Components/PromotionsDisplay/PromotionsDisplay";

const Home = () => {
    return (
        <>
            <div className="row d-flex bd-highlight mb-3">
                <div className="mr-auto p-2 bd-highligh">
                    <Link to="/PromotionsList" className="see-promotion"> 
                        <span className="letter-white"> SEE ALL </span>  
                        <span className="letter-pink"> PROMOTIONS </span> 
                    </Link>
                </div>
                <div className="p-2 bd-highlight ">
                    <SearchForm />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <ContainerPromotion />
                    <PromotionsDisplay />
                </div>
            </div>

            <div className="row">
            <div className="col-lg-12 d-flex justify-content-end see-products">
            <Link to="/ProductsList"> 
                <span className="letter-white"> SEE ALL </span>  <span className="letter-pink"> PRODUCTS </span> 
            </Link>
            </div>
                <div className="col-lg-12">
                    <CategoriesDisplay />
                </div>
            </div>
        </>

    );
};

export default Home;

import React from "react";
// Components
import SearchForm from "../Components/SearchButton/SearchButton";
import ContainerPromotion from "../Components/ContainerPromotion/ContainerPromotion";
import { CategoriesDisplay } from "../Components/CategoriesDisplay/CategoriesDisplay";
import PromotionsDisplay from "../Components/PromotionsDisplay/PromotionsDisplay";

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-end">
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
                <div className="col-lg-12">
                    <CategoriesDisplay />
                </div>
            </div>
        </>
    );
};

export default Home;

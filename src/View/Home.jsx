import React from "react";
// Components
import SearchForm from "../Components/SearchButton/SearchButton";
<<<<<<< Updated upstream
import ContainerPromotion from "../Components/ContainerPromotion/ContainerPromotion";
import { CategoriesDisplay } from "../Components/CategoriesDisplay/CategoriesDisplay";
=======
import CategoriesDisplay from "../Components/CategoriesDisplay/CategoriesDisplay";
>>>>>>> Stashed changes
import PromotionsDisplay from "../Components/PromotionsDisplay/PromotionsDisplay";

const Home = () => {
    return (
<<<<<<< Updated upstream
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
=======
        <div>
            <SearchForm />
            <PromotionsDisplay />
            <CategoriesDisplay />
        </div>
>>>>>>> Stashed changes
    );
};

export default Home;

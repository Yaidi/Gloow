import React from "react";
// Components
import SearchForm from "../Components/SearchButton/SearchButton";
import ContainerPromotion from '../Components/ContainerPromotion/ContainerPromotion';
import CategoriesDisplay from "../Components/CategoriesDisplay/CategoriesDisplay";
// Css



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
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <CategoriesDisplay />
                </div>
            </div>
        </>

    )
};

export default Home;
